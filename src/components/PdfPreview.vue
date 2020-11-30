<template>
  <div class="pdf-preview-container">
    <span class="page_num">{{showPageNum}}/{{docPages}}</span>
    <div
      class="page-container"
      ref="container"
      v-for="(page, index) in docPages"
      :style="{
        height: `${pageHeight}px`
      }"
      :key="page" :data-index="index">
      <canvas v-if="renderList.includes(page)">
      </canvas>
    </div>
  </div>
</template>

<script>
import pdfJS from 'pdfjs-dist/webpack'

export default {
  props: {
    url: {
      type: String,
      required: true
    },
    renderPages: {
      type: Number,
      default: 5
    },
    customScroll: {
      type: Boolean,
      default: false
    },
    offsetHeight: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      doc: null,
      docPages: 0,
      showPageNum: 0,
      currentPage: 0,
      pageHeight: 0,
      renderList: [],
      timer: 0
    }
  },
  watch: {
    url: {
      immediate: true,
      handler() {
        this.getPDFFile()
      }
    }
  },
  created() {
    if(!this.customScroll) {
      document.addEventListener('scroll', this.scroll)
    }
  },
  beforeDestroy() {
    document.removeEventListener('scroll', this.scroll)
  },
  methods: {
    getPDFFile() {
      if(!this.url) return
      this.currentPage = 0
      // getDocument 加载要打开的PDF文件
      pdfJS.getDocument({
        url: this.url,
        cMapUrl: 'https://unpkg.com/pdfjs-dist@2.3.200/cmaps/', // 这里同样要引入字体解决水印问题，需自己提供
        cMapPacked: true,
        httpHeaders: {
            // headers
        },
        verbosity: 0
      }).promise.then(pdf => {
        this.doc = pdf
        this.docPages = pdf.numPages
        this.showPageNum = 1
        this.$nextTick(() => {
          // 渲染第一屏
          this.docPages && this.scrollToPage(1)
        })
      })
    },
    scrollToPage(pageNo) {
      if(this.currentPage === pageNo) return
      // 赋值给当前页
      this.currentPage = pageNo
      const list = []
      for(let page = pageNo; page <= pageNo + this.renderPages; page++) {
        list.push(page)
      }
      this.renderList = list.filter(page => page <= this.docPages)
      this.$nextTick(() => {
        this.renderList.forEach(page => {
          this.renderPage(page)
        })
      })
    },
    // 渲染page
    renderPage(pageNo) {
      this.doc.getPage(pageNo).then(page => {
        const container = this.$refs.container[pageNo - 1]
        if(!container) return
        const canvas = container.querySelector('canvas')
        if(!canvas || canvas.__rendered) return
        const ctx = canvas.getContext('2d')
        const dpr = window.devicePixelRatio || 1
        const bsr = ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1
        const ratio = dpr / bsr
        const rect = container.getBoundingClientRect()
        const viewport = page.getViewport({ scale: 1.0 })
        const width = rect.width
        const height = width / viewport.width * viewport.height
        canvas.style.width = `${width}px`
        canvas.style.height = `${height}px`
        this.pageHeight = height
        canvas.height = height * ratio
        canvas.width = width * ratio
        ctx.setTransform(ratio, 0, 0, ratio, 0, 0)
        page.render({
          canvasContext: ctx,
          viewport: page.getViewport({ scale: width / viewport.width })
        })
        canvas.__rendered = true
      })
    },
    // 计算当前页数
    scroll() {
      const scrollHeight = document.body.scrollHeight // 页面高度
      const screenHeight = window.screen.height // 屏幕高度
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      if(scrollTop + screenHeight < scrollHeight) {
        this.showPageNum = scrollTop <= 0 ? 1 : this.docPages - Math.floor((scrollHeight - scrollTop) / this.pageHeight)
      } else {
        this.showPageNum = this.docPages
      }
      this.checkRender(document.documentElement)
    },
    checkRender(el) {
      if(!this.pageHeight) return
      let scrollTop = el.scrollTop
      if(el === document.documentElement) {
        scrollTop = el.scrollTop || window.pageYOffset || document.body.scrollTop
      }
      let page = Math.floor((scrollTop - this.offsetHeight) / this.pageHeight)
      page = Math.max(page, 1)
      page = Math.min(page, this.docPages)
      this.scrollToPage(page)
    }
  }
}
</script>

<style lang="less" scoped>
.page_num {
  position: fixed;
  left: 20px;
  top: 60px;
  z-index: 99;
}
</style>

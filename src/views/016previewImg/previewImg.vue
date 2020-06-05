<template>
  <div class="main-container">
    <header-component :title="'previewImg组件'"></header-component>
    <div class="content-space">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide>
          <img src="http://wenba-ooo-qiniu.xueba100.com/90426755e10108aefde536d12461f2be.png" preview="0" preview-text="海报1">
        </swiper-slide>
        <swiper-slide>
          <img src="http://wenba-ooo-qiniu.xueba100.com/596114ea75f7c284965e43293dc46459.png" preview="0" preview-text="海报2">
        </swiper-slide>
        <swiper-slide>
          <img src="http://wenba-ooo-qiniu.xueba100.com/90426755e10108aefde536d12461f2be.png" preview="0" preview-text="海报3">
        </swiper-slide>
        <swiper-slide>
          <img src="http://wenba-ooo-qiniu.xueba100.com/596114ea75f7c284965e43293dc46459.png" preview="0" preview-text="海报4">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'previewImg',
  data() {
    return {
      swiperOptions: {
        // slidesPerView: 1, // wrapper中显示的图片数量
        slidesPerView: 'auto',
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        effect: "coverflow", // 3D界面效果
        centeredSlides: false,
        observer: false, // 修改swiper自己或子元素时，自动初始化swiper 
        observeParents: false, // 修改swiper的父元素时，自动初始化swiper 
        coverflow: {
          rotate: 0, // slide做3d旋转时Y轴的旋转角度。默认50。
          stretch: 0, // 每个slide之间的拉伸值，越大slide靠得越紧。 默认0。
          depth: 100, // slide的位置深度。值越大z轴距离越远，看起来越小。 默认100
          modifier: 10, // slide的位置深度。值越大z轴距离越远，看起来越小。 默认100
          slideShadows: false // 开启slide阴影。默认 true。
        },
        loop: true, // 是否可循环
        autoplayDisableOnInteraction: true,
        paginationClickable: true, // 此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换
        on: {
          slideChange: function (e) {
            console.log(this.realIndex,'realIndex',e)
            // that.imgIndex = this.realIndex + 1;  //获取轮播图片下标索引；这里有一个坑，之前网上找到的是用activeIndex，但后来网上说的是这个realIndex，原来 activeIndex 是swiper2.0的；而realIndex是swiper3.0的，（使用realIndex才实现了下标索引）
          }
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
      }
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted() {
    console.log('Current Swiper instance object', this.swiper)
    this.swiper.slideTo(0, 1000, false)
    // this.$previewRefresh() // 异步加载图片更新后，使用图片查看器
    this.open()
    this.close()
  },
  methods: {
    open() {
      this.$preview.on('imageLoadComplete', () => {
        console.log('图片查看器被打开') // 此实例仅在图片查看器被打开时生
      })
    },
    close() {
      this.$preview.on('close', () => { //close只是众多事件名的其中一个，更多请查看文档
        console.log('图片查看器被关闭')
      })
    }
  }
}
</script>

<style lang="less" scoped>
.main-container {
  margin-top: 44px;
  .content-space {
    width: 375px;
    box-sizing: border-box;
    padding: 18px;
    img {
      width: 100%;
    }
  }
}
</style>

<template>
  <div class="main-container"  ref="editor">
    <header-component :title="'prismjs-code动画'"></header-component>
    <a href="https://github.com/elvinn/wedding-invitation">原文：wedding-invitation</a>
    <pre class="tmp-ctn">
      <code v-html="highlightedCode"></code>
    </pre>
  </div>
</template>

<script>
const data = `
// 我给你表演写代码
// 我要开始写啦

将进酒
唐代：李白

君不见黄河之水天上来，奔流到海不复回。
君不见高堂明镜悲白发，朝如青丝暮成雪。
人生得意须尽欢，莫使金樽空对月。
天生我材必有用，千金散尽还复来。
烹羊宰牛且为乐，会须一饮三百杯。
岑夫子，丹丘生，将进酒，杯莫停。
与君歌一曲，请君为我倾耳听。
钟鼓馔玉不足贵，但愿长醉不愿醒。
古来圣贤皆寂寞，惟有饮者留其名。
陈王昔时宴平乐，斗酒十千恣欢谑。
主人何为言少钱，径须沽取对君酌。
五花马、千金裘，呼儿将出换美酒，与尔同销万古愁。

// 好了我写完了
`

import Prism from 'prismjs'
import 'prismjs/themes/prism-okaidia.css'

export default {
  name: 'prismjs',
  data() {
    return {
      code: data,
      currentCode: '',
      isCursorVisible: 1
    }
  },
  computed: {
    highlightedCode () {
      const code = Prism.highlight(
          this.currentCode,
          Prism.languages.javascript
        )
      const codeWithCursor = `${code}<span style="opacity:${this.isCursorVisible}"> ▍</span>`
      return codeWithCursor
    }
  },
  created() {
    this.progressivelyTyping()
  },
  updated() {
      this.scrollToBottom()
    },
  methods: {
    scrollToBottom() {
      // 保持页面一直滚到最下面
      this.$refs.editor.scrollTop = 100000
    },
    // 代码输入
    progressivelyTyping() {
      return new Promise((resolve) => {
        let count = 0, typingCount = 0, typing
        // 写代码每一帧的函数
        let step = () => {
          let randomNumber = Math.round(Math.random() * 6)
          // 摸你打字的随机速度
          if(count % 2 === 0 && randomNumber % 3 === 0){
            this.currentCode = this.code.substring(0, typingCount)
            typingCount += 0.5
          }
          // 大约每 24 帧光标闪动一次
          if(count % 24 === 0){
            this.isCursorVisible = this.isCursorVisible === 0 ? 1 : 0
          }
          count++
          if (typingCount <= this.code.length) {
            typing = requestAnimationFrame(step)
          } else {
            resolve()
            cancelAnimationFrame(typing)
          }
        }
        typing = requestAnimationFrame(step)
      })
    }
  }
}
</script>

<style lang="less" scoped>
.main-container {
  margin-top: 44px;
  pre{
    margin: 0;
    white-space: pre-wrap;
    text-align: left;
    code{
      white-space: pre-wrap;
      word-break: break-all;
      font-size: 16px!important;
      margin: 0;
      color: blueviolet;
      line-height: 1.2;
      font-weight: 500 !important;
      background: transparent;
    }
  }
}
</style>

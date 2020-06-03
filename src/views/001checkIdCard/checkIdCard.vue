<template>
  <div class="main-container">
    <header-component :title="'身份证校验'"></header-component>
    <div class="check-id">
      <input class="input-id" type="text" v-model="idCard" @keyup="keyUp" placeholder="请输入身份证号" />
      <button class="subimt-btn" @click="check">校验</button>
      <br />
      <p class="other">* 代码中 keyUp 方法中包含其他限制输入的正则判断</p>
    </div>
  </div>
</template>

<script>
import { checkIdCard } from '@/libs/checkIdCard'
export default {
  name: 'checkIdCard',
  data() {
    return {
      // idCard: '15260019811216600X'
      idCard: ''
    }
  },
  methods: {
    check() {
      let _this = this
      let id = _this.idCard
      let result = checkIdCard(id)
      alert('检验结果为 ' + result)
    },
    keyUp() {
      // 只允许输入 数字 和 Xx
      this.idCard = this.idCard.replace(/[^(\d|Xx)]/gi, '')

      // 只允许输入 数字 和 字母
      // this.idCard = this.idCard.replace(/[^(\d|A-z)]/gi, '')

      // 只允许输入 汉字
      // this.idCard = this.idCard.replace(/^[\u4e00 -\u9fa5]/g, '')

      // 只允许输入 字母
      // this.idCard = this.idCard.replace(/[^A-z]/gi, '')

      // 只允许输入 汉字 和 字母
      // this.idCard = this.idCard.replace(/[^(\u4e00-\u9fa5|a-zA-Z)]/gi, '')

      // 只允许输入 .
      // this.idCard = this.idCard.replace(/[^(/.)]/gi, '')

      // 只允许输入 数字 和 .
      // this.idCard = this.idCard.replace(/[^(0-9/.)]/g, '')

      // 不允许输入 < >
      // this.idCard = this.idCard.replace(/[(<>)]/g, '')

      // 测试 只允许输入 金额 100.98
      // this.idCard = this.idCard.replace(/^(\d+(\.\d{2})?)$/g, '')
      // if (/^(\d+\.\d{1,2}|\d+)$/.test(this.idCard)) {
      //   console.log(true)
      // } else {
      //   console.log(false)
      // }
      // let id = this.idCard
      // this.idCard = id.match(/\d+(\.\d{0,2})?/) ? id.match(/\d+(\.\d{0,2})?/)[0] : ''
      // let intention = _this.textAreaMsg.replace(/[<">']/g, (a) => {
      //   return {
      //     '<': '&lt;',
      //     '"': '&quot;',
      //     '>': '&gt;',
      //     "'": '&#39;'
      //   }[a]
      // })
    }
  }
}
</script>

<style lang="less" scoped>
.main-container {
  margin-top: 44px;
  .check-id {
    .input-id {
      margin: 18px auto 0;
      padding-left: 6px;
      width: 226px;
      height: 36px;
      border: 1px solid #f4f6fc;
    }
    .subimt-btn {
      font-size: 18px;
      color: #1f2845;
      display: block;
      margin: 18px auto 0;
      width: 90px;
      height: 27px;
      border: 1px solid #f4f6fc;
    }
  }
  .other {
    color: #303030;
    font-size: 16px;
    padding: 6px 54px;
  }
}
</style>

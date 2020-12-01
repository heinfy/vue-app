<template>
  <div class="main-container">
    <header-component :title="title"></header-component>
    <ul class="reg-list">
      <li>
        <input class="input__" type="text" v-model="identityCard" placeholder="校验身份证号"/>
        <button class="subimt-btn" @click="checkIdentityCard">校验</button>
      </li>
      <li>
        <input class="input__" type="text" v-model="phoneNo" placeholder="校验手机号"/>
        <button class="subimt-btn" @click="checkPhoneNo">校验</button>
      </li>
      <li>
        <input class="input__" type="text" v-model="amount" placeholder="格式化金额"/>
        <button class="subimt-btn" @click="formatMoney">格式化</button>
      </li>
      <li>
        <input class="input__" type="search" @keyup.enter="search" v-model="searchMsg" placeholder="输入后点击回车模拟搜索"/>
      </li>
    </ul>
    <p>* 代码中包含其他限制输入的正则</p>
  </div>
</template>

<script>
import { checkIdCard, checkPhoneNo, formatMoney } from '@/utils/check-tool'
export default {
  name: 'check',
  data() {
    return {
      title: this.$route.meta.intro,
      identityCard: '', // '15260019811216600X'
      phoneNo: '',
      amount: '',
      searchMsg: ''
    }
  },
  methods: {
    checkIdentityCard() {
      alert('检验结果为 ' + checkIdCard(this.identityCard))
    },
    checkPhoneNo() {
      alert('检验结果为 ' + checkPhoneNo(this.phoneNo))
    },
    formatMoney() {
      formatMoney(this.amount)
    },
    search() {
      alert(this.searchMsg)
    },
    // 其他方法
    otherFn() {
      // 只允许输入 数字 和 Xx
      // this.inputString = this.inputString.replace(/[^(\d|Xx)]/gi, '')

      // 只允许输入 数字 和 字母
      // this.inputString = this.inputString.replace(/[^(\d|A-z)]/gi, '')

      // 只允许输入 汉字
      // this.inputString = this.inputString.replace(/^[\u4e00 -\u9fa5]/g, '')

      // 只允许输入 字母
      // this.inputString = this.inputString.replace(/[^A-z]/gi, '')

      // 只允许输入 汉字 和 字母
      // this.inputString = this.inputString.replace(/[^(\u4e00-\u9fa5|a-zA-Z)]/gi, '')

      // 只允许输入 .
      // this.inputString = this.inputString.replace(/[^(/.)]/gi, '')

      // 只允许输入 数字 和 .
      // this.inputString = this.inputString.replace(/[^(0-9/.)]/g, '')

      // 不允许输入 < >
      // this.inputString = this.inputString.replace(/[(<>)]/g, '')

      // 测试 只允许输入 金额 100.98
      // this.inputString = this.inputString.replace(/^(\d+(\.\d{2})?)$/g, '')
      // if(/^(\d+\.\d{1,2}|\d+)$/.test(this.inputString)) {
      //   console.log(true)
      // } else {
      //   console.log(false)
      // }
      // let id = this.inputString
      // this.inputString = id.match(/\d+(\.\d{0,2})?/) ? id.match(/\d+(\.\d{0,2})?/)[0] : ''
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
  .reg-list {
    width: 100%;
    box-sizing: border-box;
    padding: 10px 20px;
    li {
      padding: 10px 0;
      border-bottom: 1px solid #7ed6da;
      display: flex;
      justify-content: space-between;
      font-size: 18px;
      color: #1f2845;
      .input__ {
        padding-left: 10px;
        border: 1px solid #8edb7e;
        height: 36px;
        width: 70%;
      }
      .subimt-btn {
        padding: 0 20px;
        border: 1px solid #8edb7e;
      }
    }
  }
}
</style>

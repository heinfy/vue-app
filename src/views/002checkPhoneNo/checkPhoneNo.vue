<template>
  <div class="main-container">
    <header-component :title="'手机号校验'"></header-component>
    <div class="check-id">
      <input class="input-id" type="text" v-model="phoneNo" @keyup="keyUp" maxlength="11" placeholder="请输入手机号" />
      <button class="subimt-btn" @click="check">校验</button>
    </div>
  </div>
</template>

<script>
import { checkPhoneNo } from '@/libs/checkPhoneNo'
export default {
  name: 'checkPhoneNo',
  data() {
    return {
      phoneNo: '15732520529'
    }
  },
  methods: {
    check() {
      let _this = this
      let no = _this.phoneNo
      let result = checkPhoneNo(no)
      alert('检验结果为 ' + result)
    },
    keyUp() {
      // 只允许输入 数字 和 Xx
      this.phoneNo = this.phoneNo.replace(/[^(\d)]/gi, '')
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
}
</style>

<template>
  <div class="main-container">
    <header-component :title="'Toast'"></header-component>
    <div class="alert" @click="showAlert">Toast - 1</div>
    <div class="alert" @click="showMsg">Toast - 2</div>
  </div>
</template>

<script>
import Alert from '../../components/Alert/index.js'
export default {
  name: 'tmp',
  methods: {
    showAlert() {
      /* eslint-disable */
      Alert({ name: 'Alert消息' }).$on('results', text => {
        console.log(text)
      })
    },
    showMsg() {
      this.$message.info('普通消息')
      setTimeout(() => this.$message.error('错误消息'), 1000)
      setTimeout(() => this.$message.warning('警告消息'), 2000)
      setTimeout(() => this.$message.success('成功消息'), 3000)
    },
    getActive() {
      console.log('getActive')
    }
  }
}
</script>

<style lang="less" scoped>
.main-container {
  .alert {
      display: block;
      background-color: #f5f5f5;
      min-width: 200px;
      height: 44px;
      line-height: 44px;
      margin: 20px auto 0;
      border: 1px solid #a5c5b5;
      border-radius: 2px;
  }
}
</style>

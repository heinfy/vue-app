<template>
  <div class="main-container">
    <header-component :title="'加载动画和软键盘搜索'"></header-component>
    <div class="load-ctn">
      <h4>移动端 h5 界面软键盘搜索功能实现</h4>
      <input type="search" @keyup.enter="getMsg" class="ipt" placeholder="输入后点击回车模拟搜索" v-model="msg" />
      <h4>loading 动画</h4>
      <button @click="show">模拟ajax请求</button>
      <!-- 接口加载动画 -->
      <loading v-show="loadAnimation" :propShow="loadAnimation"></loading>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import Load from '@/components/loadingAn.vue'
export default {
  name: 'load',
  components: {
    loading: Load
  },
  data() {
    return {
      loadAnimation: false,
      msg: ''
    }
  },
  mounted() {
    this.changeHeaderControl({
      title: 'Loading',
      closeShow: false,
      backShow: true,
      headerBor: true
    })
  },
  methods: {
    ...mapMutations(['changeHeaderControl']),
    getMsg() {
      alert(this.msg)
    },
    show() {
      let _this = this
      _this.loadAnimation = true
      setTimeout(() => {
        alert('模拟结束！')
        _this.loadAnimation = false
      }, 2000)
    }
  }
}
</script>

<style lang="less" scoped>
.main-container {
  margin-top: 44px;
  .load-ctn {
    h4 {
      color: #ec5656;
      font-size: 16px;
      font-weight: 700;
      padding-top: 10px;
    }
    .ipt {
      width: 200px;
      display: block;
      height: 22px;
      margin: 20px auto;
      border: 1px solid #a5c5b5;
      border-radius: 2px;
    }
    button {
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
}
</style>

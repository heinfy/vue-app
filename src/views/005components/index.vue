<template>
  <div class="main-container">
    <header-component :title="'组件'"></header-component>
    <div class="load-ctn">
      <button @click="loadingAnimate">loading 动画</button>
      <loading v-show="loadAnimation" class="loading" :size="40"></loading>
    </div>
  </div>
</template>

<script>
import Loading from '@/components/Loading/'
export default {
  name: 'components',
  components: {
    Loading
  },
  data() {
    return {
      loadAnimation: false
    }
  },
  methods: {
    loadingAnimate() {
      this.loadAnimation = true
      setTimeout(() => {
        alert('模拟结束！')
        this.loadAnimation = false
      }, 2000)
    }
  }
}
</script>

<style lang="less" scoped>
.main-container {
  margin-top: 44px;
  .load-ctn {
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
    .loading {
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: 100;
    }
  }
}
</style>

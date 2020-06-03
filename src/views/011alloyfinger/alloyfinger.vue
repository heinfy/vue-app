<template>
  <div class="main-container">
    <header-component :title="'AlloyFinger手势事件'"></header-component>
    <p>文档：alloyfinger/vue/README.md</p>
    <div class="tmp-ctn">
      <button v-finger:swipe="swipeHandler">swipe 事件</button>
      <button v-finger:tap="tapTandler">tap 事件</button>
      <button v-finger:double-tap="doubleTap">doubleTap 事件</button>
      <button v-finger:long-tap="longTap">longTap 事件</button>
      <button v-finger:touch-move="touchMove">touchMove 事件</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Alloyfinger',
  methods: {
    swipeHandler(e) {
      console.log('swipeHandler', e)
    },
    tapTandler(e) {
      console.log('tapTandler', e)
    },
    doubleTap(e) {
      console.log('doubleTap', e)
    },
    longTap(e) {
      console.log('longTap', e)
    },
    touchMove(e) {
      console.log('touchMove', e)
    },
  }

}
</script>

<style lang="less" scoped>
.main-container {
  margin-top: 44px;
  .tmp-ctn {
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

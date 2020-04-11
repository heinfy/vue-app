<template>
  <div class="loadingWrap">
    <div class="loading" @touchmove.prevent v-show="propShow">
      <div class="loadingImg">
        <img :src="loadSrc" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'loading',
  props: ['propShow'],
  data() {
    return {
      loadSrc: '',
      loadTimer: ''
    }
  },
  mounted() {
    let _this = this
    _this.animate()
    if (_this.propShow) clearInterval(_this.loadTimer)
  },
  methods: {
    animate() {
      let _this = this
      let num = 0
      function load() {
        num++
        if (num === 37) num = 1
        _this.loadSrc = require('@/assets/images/load/' + num + '.png')
      }
      _this.loadTimer = setInterval(load, 40.5)
    }
  }
}
</script>

<style lang="less">
.loadingWrap {
  .loading {
    position: fixed;
    left: 0;
    top: 44px;
    width: 375px;
    z-index: 1;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 44px);
    .loadingImg {
      width: 90px;
      height: 90px;
      margin-top: -60px;
      img {
        width: 100%;
        height: 100%;
        border: 0;
      }
    }
    p {
      font-size: 15px;
      margin-top: 10px;
    }
  }
}
</style>

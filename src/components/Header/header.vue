<template>
  <Header :class="['header', border ? 'header-border' : 'no-border']">
    <div class="header-sides header-left" @click="back">
      <span class="iconfont icon-angle-left"></span>
    </div>
    <div class="header-sides-ctn header-left-ctn" v-show="!!description">
      {{ description || '' }}
    </div>
    <div class="header-title">{{ title }}</div>
    <div class="header-sides header-right" v-show="!!instruction" @click="transfromMethod">
      <span :class="['iconfont', instructClassName]"></span>
    </div>
  </Header>
</template>

<script>
export default {
  props: {
    title: String,
    border: Boolean,
    description: String,
    instruction: String
  },
  data() {
    return {
      instructClassName: ''
    }
  },
  created() {
    this.showClassName()
  },
  mounted() {},
  methods: {
    showClassName() {
      switch (this.instruction) {
        case 'times':
          this.instructClassName = 'icon-times'
          break
        case 'ellipsis-v':
          this.instructClassName = 'icon-ellipsis-v'
          break
        case 'gallery-view':
          this.instructClassName = 'icon-gallery-view'
          break
        case 'qrcode':
          this.instructClassName = 'icon-qrcode'
          break
        case 'gift':
          this.instructClassName = 'icon-gift'
          break
        case 'poweroff':
          this.instructClassName = 'icon-poweroff'
          break
        case 'chart-pie-alt':
          this.instructClassName = 'icon-chart-pie-alt'
          break
        case 'chart-line':
          this.instructClassName = 'icon-chart-line'
          break
        case 'chart-bar':
          this.instructClassName = 'icon-chart-bar'
          break
        case 'delete-fill':
          this.instructClassName = 'icon-delete-fill'
          break
        case 'clouddownload-fill':
          this.instructClassName = 'icon-clouddownload-fill'
          break
        case 'cloudupload-fill':
          this.instructClassName = 'icon-cloudupload-fill'
          break
        case 'angle-down':
          this.instructClassName = 'icon-angle-down'
          break
        case 'angle-up':
          this.instructClassName = 'icon-angle-up'
          break
        case 'angle-right':
          this.instructClassName = 'icon-angle-right'
          break
        case 'sync-alt':
          this.instructClassName = 'icon-sync-alt'
          break
        case 'icon-drag':
          this.instructClassName = 'icon-icon-drag'
          break
        case 'share':
          this.instructClassName = 'icon-share'
          break
        case 'home':
          this.instructClassName = 'icon-home'
          break
        default:
          this.instructClassName = ''
      }
    },
    back() {
      this.$router.go(-1)
    },
    transfromMethod() {
      this.$emit('method')
    }
  }
}
</script>

<style lang="less" scoped>
@import './fonts/index.css';
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  box-sizing: border-box;
  border-bottom: 1px solid #f4f6fc;
  background: #fff;
  width: 375px;
  height: 44px;
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  grid-template-rows: 44px;
  font-size: 18px;
  .header-sides {
    line-height: 44px;
    span {
      font-size: 20px;
    }
  }
  .header-left {
    grid-column-start: 1;
    grid-column-end: 4;
    padding-left: 18px;
  }
  .header-right {
    text-align: right;
    grid-column-start: 19;
    grid-column-end: 25;
    padding-right: 18px;
  }
  .header-sides-ctn {
    height: 44px;
    line-height: 44px;
  }
  .header-left-ctn {
    grid-column-start: 4;
    grid-column-end: 7;
  }
  .header-title {
    grid-column-start: 7;
    grid-column-end: 19;
    color: #1f2845;
    line-height: 44px;
    font-weight: bold;
  }
  &.header-border {
    border-bottom: 1px solid #f4f6fc;
  }
}
</style>

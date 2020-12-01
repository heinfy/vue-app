<template>
  <div class="main-container">
    <header-component :title="'地图获取定位'"></header-component>
    <div class="location-ctn">
      <button class="btn" @click="getLocation">点击获取定位</button>
      <p class="other">建议在cli3.0 Network 下测试！</p>
    </div>
  </div>
</template>

<script>
import { addJS, getPosition } from '../../utils/tx-map.js'
export default {
  name: 'map-pos',
  methods: {
    getLocation() {
      addJS(() => getPosition(
        data => console.log('JS获取定位成功', data),
        err => console.log('JS获取定位失败', err)
      ))
    }
  }
}
</script>

<style lang="less" scoped>
.main-container {
  margin-top: 44px;
  .location-ctn {
    .btn {
      display: block;
      background-color: #f5f5f5;
      min-width: 200px;
      height: 44px;
      line-height: 44px;
      margin: 20px auto 0;
      border: 1px solid #a5c5b5;
      border-radius: 2px;
    }
    .other {
      color: #333333;
      font-size: 16px;
      padding: 6px 54px;
    }
  }
}
</style>

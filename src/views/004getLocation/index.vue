<template>
  <div class="main-container">
    <header-component :title="'腾讯地图获取定位'"></header-component>
    <div class="location-ctn">
      <button class="btn" @click="getLocation">点击获取定位</button>
      <p class="other">建议在cli3.0 Network 下测试！</p>
    </div>
  </div>
</template>

<script>
import addSrcTag from '@/assets/js/addTag.js'
import { getPosition } from '@/assets/js/getLocation.js'
export default {
  name: 'getlocation',
  data() {
    return {
      mapUrl: 'https://3gimg.qq.com/lightmap/components/geolocation/geolocation.min.js'
    }
  },
  methods: {
    getLocation() {
      const _this = this
      const localCallback = () => getPosition(
        data => getGeoData(data),
        err => getGeoError(err)
      )
      addSrcTag(_this.mapUrl, localCallback)
      const getGeoData = data => {
        console.log('JS获取定位成功', data)
      }
      const getGeoError = err => {
        console.log('JS获取定位失败', err)
      }
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

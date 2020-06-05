<template>
  <div class="main-container">
    <header-component :title="'swiper 库'"></header-component>
    <div class="content">
      <swiper-component></swiper-component>
    </div>
  </div>
</template>

<script>
import SwiperComponent from '@/components/ScrollList'
export default {
  name: 'MySwiper',
  components: {
    SwiperComponent
  }
}
</script>

<style lang="less" scoped>
.main-container {
  margin-top: 44px;
  .content {
    padding-top: 20px;
  }
}
</style>

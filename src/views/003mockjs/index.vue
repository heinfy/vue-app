<template>
  <div class="main-container">
    <header-component :title="title"></header-component>
    <div class="mock-ctn">
      待定
    </div>
  </div>
</template>

<script>
export default {
  name: 'mockdata',
  data() {
    return {
      title: this.$route.meta.intro
    }
  }
}
</script>

<style lang="less" scoped>
.main-container {
  margin-top: 44px;
  .mock-ctn {
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

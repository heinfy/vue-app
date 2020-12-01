<template>
  <div class="main-container">
    <header-component :title="title"></header-component>
    <div class="some__com">
      待定
    </div>
  </div>
</template>

<script>
export default {
  name: 'checkPhoneNo',
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
  .some__com {
    width: 100%;
  }
}
</style>

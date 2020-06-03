<template>
  <div class="main-container">
    <header-component :title="'预设模板'"></header-component>
    <div class="tmp-ctn">
      <button>预设模板，新增模块时可直接复制</button>
    </div>
  </div>
</template>

<script>
import { countdown } from '../../utils/util'
export default {
  name: 'tmp',
  mounted() {}
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

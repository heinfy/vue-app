<template>
  <div class="main-container">
    <header-component :title="'pdf文件预览'"></header-component>
    <pdf-preview :url="url"></pdf-preview>
  </div>
</template>

<script>
import pdfPreview from '@/components/PdfPreview.vue'

export default {
  name: 'pdfpreview',
  components: {
    pdfPreview
  },
  data () {
    return {
      url: 'http://zm-cms-image.oss-cn-hangzhou.aliyuncs.com/defe19f8-7402-44ed-bd44-1479d612a837.pdf'
    }
  }
}
</script>

<style lang="less" scoped>
.main-container {
  margin-top: 44px;
  .content {
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

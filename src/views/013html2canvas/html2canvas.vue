<template>
  <div class="home ignore-">
    <header-component :title="'html2canvas'"></header-component>
    <div ref="imageWrapper" id="img" class="draw">
      <h1>测试文本</h1>
      <img src="http://wenba-ooo-qiniu.xueba100.com/c5f6b3acab1cf1c74f5337163406c29a.png">
      <img src="http://wenba-ooo-qiniu.xueba100.com/b908b3f2f68712837a6044ecc6c30e3e.png">
    </div>
    <hr>
    <div ref="poster"></div>
    <button @click="show">html2canvas制作图像</button>
  </div>
</template>

<script>
import html2canvas from 'html2canvas'
export default {
  name: 'html2canvas',
  data() {
    return {
      imgUrl: '',
      poster: "http://wenba-ooo-qiniu.xueba100.com/e22e21c693e90bff30efc4bf6c8381e3.png"
    }
  },
  methods: {
    show() {
      this.createPoster(this.$refs.imageWrapper)
    },
    async createPoster( node ) {
      let canvas = await html2canvas( node , { useCORS: true })
      let base64 = canvas.toDataURL('image/png') // base64图片
      console.log(canvas)
      this.$refs.poster.appendChild(canvas)
    }
  }
};
</script>

<style lang="less">
  .ignore- {
    margin: 0 auto;
    .draw {
      margin: 0 auto;
      border: 5px solid red;
      width: 120px;
      img {
        width: 100%;
      }
    }
  }
</style>

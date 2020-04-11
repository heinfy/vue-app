<template>
  <div class="main-container">
    <header-component :title="'Mock模拟ajax'"></header-component>
    <div class="mock-ctn">
      <button @click="getGoodsList">getGoodsList按钮-get请求</button>
      <button @click="addGoods">addGoods按钮-post请求</button>
      <button @click="getGoodsById(2)">getGoodsById按钮</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mockdata',
  methods: {
    async getGoodsList() {
      const { data } = await this.$http.get('/api/goodslist')
      console.log(data)
    },
    async addGoods() {
      const obj = {
        name: '撒旦法',
        price: '12',
        count: '122',
        img: '@dataImage(80x80)'
      }
      const { data } = await this.$http.post('/api/addgoods', obj)
      console.log(data)
    },
    async getGoodsById(id) {
      const { data } = await this.$http.get(`/api/getgoods/${id}`)
      console.log(data)
    }
  }
}
</script>

<style lang="less" scoped>
.main-container {
  .mock-ctn {
    width: 375px;
    height: 623px;
    overflow-y: scroll;
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

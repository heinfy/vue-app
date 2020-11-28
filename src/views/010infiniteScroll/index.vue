<template>
  <div class="main-container">
    <header-component :title="'无限滚动'"></header-component>
    <div class="infinite-scroll">
      <ul v-infinite-scroll="loadBottom" infinite-scroll-disabled="busy" infinite-scroll-distance="100">
        <li v-for="(item, index) in list" :key="index">
          {{ item }}
        </li>
      </ul>
      <div v-if="busy" class="data-none">没有更多数据了</div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'loadmore1',
  data() {
    return {
      list: [],
      pagenum: 1,
      busy: false
    }
  },
  methods: {
    loadBottom() {
      let _this = this
      let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 2, 3, 4, 0, 2, 3, 4, 7, 8, 9, 0, 2, 3, 4, 0, 2,]
      if(_this.pagenum === 1) {
        console.log(_this.pagenum)
        _this.list = arr
        _this.pagenum = _this.pagenum + 1
      } else if(_this.pagenum === 4) {
        console.log('over')
        _this.busy = true
      } else {
        console.log(_this.pagenum)
        _this.pagenum = _this.pagenum + 1
        _this.list = [..._this.list, ...arr]
      }
    }
  }
}
</script>

<style scoped>
.main-container {
  padding-top: 44px;
}
.infinite-scroll {
  width: 100%;
  height: 100vh;
  overflow: scroll;
  overflow-y: scroll;
}
/* 隐藏滚动进度条 */
.infinite-scroll::-webkit-scrollbar {
  display:none;
}

ul li {
  padding: 10px 20px;
  font-size: 16px;
  line-height: 1.2;
  color: #333;
}
ul li + li {
  border-top: 1px solid #9c9c9c;
}
.data-refresh,
.data-more,
.data-none {
  text-align: center;
  padding: 10px;
  color: #9c9c9c;
  font-size: 12px;
}
.mint-loadmore {
  background-color: #ffffff;
}
</style>

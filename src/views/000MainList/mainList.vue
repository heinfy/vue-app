<template>
  <div class="main-content">
    <header-component :title="'模块功能列表'" :border="true" :instruction="'times'"></header-component>
    <ul class="main-list">
      <li @click="routeModule(1)" :class="[index === 1 ? 'active' : '']">
        <router-link :to="{ name: 'checkidcard' }">1 - 身份证检验功能</router-link>
      </li>
      <li @click="routeModule(2)" :class="[index === 2 ? 'active' : '']">
        <router-link :to="{ name: 'checkphoneno' }">2 - 手机号校验</router-link>
      </li>
      <li @click="routeModule(3)" :class="[index === 3 ? 'active' : '']">
        <router-link :to="{ name: 'mockdata' }">3 - Mock模拟ajax</router-link>
      </li>
      <li @click="routeModule(4)" :class="[index === 4 ? 'active' : '']">
        <router-link :to="{ name: 'getlocation' }">4 - 腾讯地图获取定位</router-link>
      </li>
      <li @click="routeModule(5)" :class="[index === 5 ? 'active' : '']">
        <router-link :to="{ name: 'loading' }">5 - loading动画 和 软键盘搜索</router-link>
      </li>
      <li @click="routeModule(6)" :class="[index === 6 ? 'active' : '']">
        <router-link :to="{ name: 'calendar2' }">6 - calendar2组件</router-link>
      </li>
      <li @click="routeModule(7)" :class="[index === 7 ? 'active' : '']">
        <router-link :to="{ name: 'swiper' }">7 - swiper组件</router-link>
      </li>
      <li @click="routeModule(8)" :class="[index === 8 ? 'active' : '']">
        <router-link :to="{ name: 'currency' }">8 - 金额格式化和日期选择组件</router-link>
      </li>
      <li @click="routeModule(9)" :class="[index === 9 ? 'active' : '']">
        <router-link :to="{ name: 'calendar1' }">9 - calendar1组件</router-link>
      </li>
      <li @click="routeModule(10)" :class="[index === 10 ? 'active' : '']">
        <router-link :to="{ name: 'infinitescroll' }">10 - InfiniteScroll</router-link>
      </li>
      <li @click="routeModule(11)" :class="[index === 11 ? 'active' : '']">
        <router-link :to="{ name: 'alloyfinger' }">11 - alloyfinger</router-link>
      </li>
      <li @click="routeModule(12)" :class="[index === 12 ? 'active' : '']">
        <router-link :to="{ name: 'myToast' }">12 - myToast</router-link>
      </li>
      <li @click="routeModule(13)" :class="[index === 13 ? 'active' : '']">
        <router-link :to="{ name: 'html2canvas' }">13 - html2canvas绘图</router-link>
      </li>
      <li @click="routeModule(14)" :class="[index === 14 ? 'active' : '']">
        <router-link :to="{ name: 'prismjs' }">14 - prismjs-code动画</router-link>
      </li>
      <li @click="routeModule(100)" :class="[index === 100 ? 'active' : '']">
        <router-link :to="{ name: 'tmp' }">100 - tmp 模板</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'mainList',
  data() {
    return {
      index: -1
    }
  },
  beforeRouteEnter(to, from, next) {
    const header = {
      title: '功能模块列表',
      closeShow: false,
      backShow: false,
      headerBor: true
    }
    next(vm => {
      vm.changeHeaderControl(header)
    })
  },
  methods: {
    ...mapMutations(['changeHeaderControl']),
    routeModule(index) {
      this.index = index
    }
  }
}
</script>

<style lang="less" scoped>
.main-content {
  margin-top: 44px;
  transition: all 0.3s ease;
  overflow-y: scroll;
  .main-list {
    color: #1f2845; // 目录颜色
    li {
      height: 30px;
      line-height: 30px;
      padding: 6px 0 6px 18px;
      font-size: 18px;
      text-align: left;
      &:nth-child(odd) {
        background-color: #f8f8f8;
      }
      &:nth-child(even) {
        background-color: #f2f2f2;
      }
      &.active {
        background-color: #517df799; // 激活颜色
      }
    }
  }
}
</style>

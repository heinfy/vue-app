<template>
  <div class="main-content">
    <header-component :title="'模块功能列表'" :border="true" :instruction="'times'"></header-component>
    <ul class="main-list">
      <li @click="routeModule(item.index)" v-for="item in list" :key="item.index" :class="[index === item.index ? 'active' : '']" v-if="item.index !== 0">
        <router-link :to="{ name: item.name }">{{ item.index }} - {{ item.intro }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { routes } from '@/router/routes'
export default {
  name: 'mainList',
  data() {
    return {
      list: routes,
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
      if (index === 0) return
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

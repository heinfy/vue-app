<template>
  <div class="main-container">
    <header-component :title="title"></header-component>
    <ul class="some__com">
      <li>
        <button @click="fn1">commit同步更新布尔值</button>
        <button @click="fn1Mutations">通过mapMutations映射同步更新布尔值</button>
        <button @click="fn1SyncActions">dispatch同步更新布尔值</button>
        <button @click="fn1AsyncActions">通过mapActions映射异步更新布尔值</button>
      </li>
      <li>
        <button @click="fn2">commit同步更新字符串</button>
        <button @click="fn2Mutations">通过mapMutations映射同步更新字符串</button>
        <button @click="fn2SyncActions">dispatch同步更新字符串</button>
        <button @click="fn2AsyncActions">通过mapActions映射异步更新字符串</button>
      </li>
      <li>
        <button @click="fn3">commit同步更新对象</button>
        <button @click="fn3Mutations">通过mapMutations映射并重命名同步更新字符串</button>
        <button @click="fn3SyncActions">dispatch同步更新对象</button>
        <button @click="fn3AsyncActions">通过mapActions映射异步更新对象</button>
      </li>
      <li>
        <button @click="login">登录</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  name: 'store',
  data() {
    return {
      title: this.$route.meta.intro
    }
  },
  computed: {
    // 通过映射 store/state 在组件中获取 state 属性， this.xxx 可以直接访问
    ...mapState({
      stateGlobalBool: state => state.globalBool,
      stateGlobalStr: 'globalStr',
      stateGlobalObj(state) {
        return state.globalObj
      }
    }),
    // getter 在通过方法访问时，每次都会去进行调用，而不会缓存结果
    // 注意 getters 属性 是根据 state 属性派生出来的，state 属性变化，getters 属性也跟着变化
    // 通过 store/getters 获取 getters 属性， this.xxx 可以直接访问
    ...mapGetters([
      'globalBool',
      'globalStr',
      'globalObj'
    ])
  },
  methods: {
    // 映射 store 中 mutations 的方法
    ...mapMutations([
      'SET_GLOBAL_BOOL',
      'SET_GLOBAL_STR',
      'SET_GLOBAL_OBJ'
    ]),
    // 映射 store 中 mapActions 的方法
    ...mapActions([
      'asyncSetGlobalBool',
      'asyncSetGlobalStr',
      'asyncSetGlobalObj'
    ]),
    // fn1
    fn1() { // commit 同步
      this.$store.commit('SET_GLOBAL_BOOL')
    },
    fn1Mutations() { // Mutations 同步
      this.SET_GLOBAL_BOOL()
    },
    fn1SyncActions() { // Actions 中的commit同步
      this.$store.dispatch('syncSetGlobalBool')
    },
    fn1AsyncActions() { // Actions 异步
      alert('可以在异步Actions掺杂commit同步')
      this.asyncSetGlobalBool()
    },
    // fn2
    fn2() { // commit 同步
      this.$store.commit('SET_GLOBAL_STR', 'commit更新字符串')
    },
    fn2Mutations() { // Mutations 同步
      this.SET_GLOBAL_STR('通过mapMutations映射更新字符串')
    },
    fn2SyncActions() { // Actions 中的commit同步
      this.$store.dispatch('syncSetGlobalStr', 'Actions 中的commit同步更新字符串')
    },
    fn2AsyncActions() { // Actions 异步
      this.asyncSetGlobalStr('Actions 中的dispatch异步更新字符串')
    },
    // fn3
    fn3() {
      const obj = { name: 'commit更新对象', age: 36 }
      this.$store.commit('SET_GLOBAL_OBJ', obj)
    },
    fn3Mutations() {
      const obj = { name: '通过mapMutations映射并重命名更新字符串', age: 63 }
      this.SET_GLOBAL_OBJ(obj)
    },
    fn3SyncActions() { // Actions 中的commit同步
      const obj = { name: 'Actions 中的commit同步', age: 63 }
      this.$store.dispatch('syncSetGlobalObj', obj)
    },
    fn3AsyncActions() { // Actions 异步
      const obj = { name: 'Actions 异步', age: 90 }
      this.asyncSetGlobalObj(obj)
    },
    // 登录
    login() {
      this.$store.dispatch('user/login', {
        username: 'admin',
        password: '123456'
      })
        .then(() => {
          // your code
          alert('登录成功')
        })
        .catch(() => {
          alert('登录失败')
        })
    }
  }
}
</script>

<style lang="less" scoped>
.main-container {
  margin-top: 44px;
  .some__com {
    width: 100%;
    li {
      margin-bottom: 10px;
      border: 1px solid #8edb7e;
      button {
        display: block;
        padding: 5px 20px;
        margin: 5px;
      }
    }
  }
}
</style>

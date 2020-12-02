# vuex 的使用

## 全局store

> global.js 为全局的 store 对象

在全局 store 中，使用 `globalBool` `globalStr` `globalObj` 三个属性来介绍读写 store 的方法：

读：
1. `this.$store.state.name`
2. `mapState` 映射
3. `mapGetters` 映射

写：

1. `this.$store.commit('MatationName')`
2. `mapMutations` 映射
3. `this.$store.dispatch('ActionName')`
4. `mapActions` 映射

注意：**本应用的store模仿redux，没有在 Mutations 中直接更新 state，而是在 Mutations 中定义方法，然后将触发Mutations的 commit 全部放在 Actions，同时，Actions 中也定义了 dispatch 来异步触发 Mutations。**

**简而言之，就是 Mutations 定义更新方法，Actions 触发方法，没有在组件中直接触发 Mutations，全部将方法放在Actions，便于更新管理。**

## module

> module 采用了 webpack 的读目录的方法，将 store/module 目录下的js文件作为单个 module。具体代码见 `/store/index.js`
> 新建 module 执行 `npm run polp` 即可

`module.user.js` 模拟了 dispatch 登录调取 api 获取 token 的异步 Actions。当然可以有同步的commit，和 全局的 store 类似，这里没有测试，其他也只需新增即可。

## getters.js文件

>  本 store 将所有属性（不管全局还是 module），全部派生在全局，代码见 `/store/getters.js`

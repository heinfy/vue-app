// 引入组件
import HeaderComponent from './header.vue'
// 定义 Header 对象
const Header = {
  // install 是默认的方法。当外界在 use 这个组件的时候，
  // 就会调用本身的 install 方法，同时传一个 Vue 这个类的参数。
  install: Vue => {
    Vue.component('header-component', HeaderComponent)
  /* eslint-disable */
  //   // 1. 添加全局方法或属性
  //   Vue.myGlobalMethod = function () {
  //     // 逻辑...
  //   }
  //   // 2. 添加全局资源
  //   Vue.directive('my-directive', {
  //     bind(el, binding, vnode, oldVnode) {
  //       // 逻辑...
  //     }
  //     // ...
  //   })
  //   // 3. 注入组件
  //   Vue.mixin({
  //     created: function () {
  //       // 逻辑...
  //     },
  //     // ...
  //   })
  //   // 4. 添加实例方法
  //   Vue.prototype.$myMethod = function (methodOptions) {
  //     // 逻辑...
  //   }
  }

}
// 导出
export default Header

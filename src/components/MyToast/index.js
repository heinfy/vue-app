// MyToast.vue 在全局挂载  index.js 在组件中使用
// 需要分别引入

import Vue from 'vue'
import MyToast from './MyToast.vue'
const ToastConstructor = Vue.extend(MyToast)
const toastComponent = function(message) {
  // 自定义传入的参数
  // 创建实例并且过滤参数
  const instance = new ToastConstructor({
    data: {
      message: message
    }
  })
  // 挂载实例
  instance.$mount()
  document.body.appendChild(instance.$el)
  return instance
}
export default toastComponent

/**
 * Created by misterXu on 2018/5/7.
 */
import ToastComponent from './Toast.vue'

const Toast = {}

Toast.install = function (Vue) {
  const ToastConstructor = Vue.extend(ToastComponent)
  const instance = new ToastConstructor()
  instance.$mount(document.createElement('div'))
  document.body.appendChild(instance.$el)
  Vue.prototype.$toast = (msg, duration = 3000) => {
    instance.text = msg
    instance.status = true
    let timer = setTimeout(() => {
      instance.status = false
      instance.text = ''
      clearTimeout(timer)
    }, duration)
  }
}
export default Toast

import Vue from 'vue'
import App from './App.vue'
import { router } from './router/index.js'
import store from './store/index.js'

// alloyfinger 手势库
import AlloyFinger from 'alloyfinger'
import AlloyFingerPlugin from 'alloyfinger/vue/alloy_finger_vue.js'
// 移动端Vue.js图片预览插件
import preview from 'vue-photo-preview'
import { InfiniteScroll, Picker, Popup } from 'mint-ui'
import Header from './components/Header'
// toast组件
import MyToast from './components/MyToast/MyToast.vue'
import vMessage from './components/Message'
import Toast from './components/Toast'

import 'vue-photo-preview/dist/skin.css'
import 'mint-ui/lib/picker/style.css'
import 'mint-ui/lib/popup/style.css'
// import 'mint-ui/lib/style.css'

Vue.component(Picker.name, Picker)
Vue.component(Popup.name, Popup)

Vue.use(InfiniteScroll)
Vue.use(Toast)
Vue.use(Header)
Vue.use(vMessage)
Vue.extend(MyToast)

Vue.use(AlloyFingerPlugin, {
  AlloyFinger
})

Vue.use(preview, { // 配置项
  fullscreenEl: false, // 控制是否显示右上角全屏按钮
  closeEl: false, // 控制是否显示右上角关闭按钮
  tapToClose: true, // 点击滑动区域应关闭图库
  shareEl: false, // 控制是否显示分享按钮
  zoomEl: false, // 控制是否显示放大缩小按钮
  counterEl: false, // 控制是否显示左上角图片数量按钮
  arrowEl: true, // 控制如图的左右箭头（pc浏览器模拟手机时）
  tapToToggleControls: true, // 点击应切换控件的可见性
  clickToCloseNonZoomable: true // 点击图片应关闭图库，仅当图像小于视口的大小时
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

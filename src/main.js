import Vue from 'vue'
import App from './App.vue'
import { router } from './router/index.js'
import store from './store/index.js'

// alloyfinger 手势库
import AlloyFinger from 'alloyfinger'
import AlloyFingerPlugin from 'alloyfinger/vue/alloy_finger_vue.js'

// 移动端Vue.js图片预览插件
import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'

// ajax
import axios from 'axios'


import { Loadmore, InfiniteScroll, Spinner, Picker, Popup } from 'mint-ui'

import Header from './components/Header'

// alert 组件
import Alert from './components/Alert/index.vue'
import vMessage from './components/Message/index'

// xbj toast组件
import Toast from './components/Toast'

// mock 数据
import './mock'

import 'mint-ui/lib/style.css'

Vue.component(Loadmore.name, Loadmore)
Vue.component(Spinner.name, Spinner)
Vue.component(Picker.name, Picker)
Vue.component(Popup.name, Popup)

Vue.use(InfiniteScroll)
Vue.use(Toast)
Vue.use(Header)
Vue.use(vMessage)
Vue.extend(Alert)

Vue.use(AlloyFingerPlugin,{
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

Vue.prototype.$http = axios
Vue.config.productionTip = false

import Vconsole from 'vconsole'
if(process.env.NODE_ENV === 'production') new Vconsole()

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

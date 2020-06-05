import Vue from 'vue'
import App from './App.vue'
import { router } from './router/index.js'
import store from './store/index.js'

// alloyfinger 手势库
import AlloyFinger from 'alloyfinger'
import AlloyFingerPlugin from 'alloyfinger/vue/alloy_finger_vue.js'

// ajax
import axios from 'axios'

// swiper 插件
import VueAwasomeSwiper from "vue-awesome-swiper"

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
import 'swiper/css/swiper.css'

Vue.component(Loadmore.name, Loadmore)
Vue.component(Spinner.name, Spinner)
Vue.component(Picker.name, Picker)
Vue.component(Popup.name, Popup)

Vue.use(InfiniteScroll)
Vue.use(Toast)
Vue.use(Header)
Vue.use(VueAwasomeSwiper)

Vue.extend(Alert)
Vue.use(vMessage)

Vue.use(AlloyFingerPlugin,{
  AlloyFinger
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

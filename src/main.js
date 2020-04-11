import Vue from 'vue'
import App from './App.vue'
import { router } from './router/index.js'
import store from './store/index.js'
import axios from 'axios'
import { Loadmore, InfiniteScroll, Spinner, Picker, Popup } from 'mint-ui'
import Header from './components/Header'
// alert 组件
import Alert from './components/Alert/index.vue'
import vMessage from './components/Message/index'
import './mock'
import 'mint-ui/lib/style.css'
Vue.component(Loadmore.name, Loadmore)
Vue.component(Spinner.name, Spinner)
Vue.component(Picker.name, Picker)
Vue.component(Popup.name, Popup)
Vue.use(InfiniteScroll)
Vue.use(Header)
Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.extend(Alert)
Vue.use(vMessage)

import Vconsole from 'vconsole'
new Vconsole()

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

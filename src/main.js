import Vue from 'vue'
import App from './App'
import store from './store/index'
import './utils/rem'
import Router from './utils/router'
import './style/reset.css'
import WucTab from './pages/components/wuc-tab/wuc-tab.vue'

Vue.component('WucTab',WucTab)
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
  ...App,
  store,
  Router
})
app.$mount()

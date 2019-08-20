import Vue from 'vue'
import App from './App'
import store from './store/index'
import { toPage } from './utils/wx'
import { log } from './utils/yunFunc/log'

Vue.config.productionTip = false
//  vuex
Vue.prototype.$store = store
Vue.prototype.$f = {
  init: () => {
    // console.log('未设置init函数')
  },
  toPage: toPage,
  // 云函数记录日志
  log: log
}
App.mpType = 'app'

const app = new Vue({
  ...App
})

app.$mount()

import Vue from 'vue'
import App from './App'
import store from './store/index'
import { toPage, log, setRequest, wxLog } from './utils/wx'
import { request, response } from './utils/project'

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
// 设置请求拦截
setRequest(request, response)
const app = new Vue({
  ...App
})
// 添加微信实时日志
let wxLogFn = wxLog()
if (wxLogFn) {
  console.log = wxLog.log
  console.error = wxLog.error
  console.warn = wxLog.warn
  console.debug = wxLog.debug
  console.setFilterMsg = wxLog.setFilterMsg
}
app.$mount()

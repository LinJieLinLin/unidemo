import Vue from 'vue'
import App from './App'
import store from './store/index'
import {
  toPage,
  log,
  setRequest,
  wxLog,
  getStorageSync,
  setStorage,
  GlobalCounter,
  getCurrentPage,
  toast
} from './utils/microApi'
import { request, response } from './utils/project'
import { safeData, hideInfo, getRegexp, sleep } from './utils/j'
import comMixin from './utils/mixins/common'
import Throttle from './utils/class/Throttle'
import Debounce from './utils/class/Debounce'
import { getObj } from './utils/struct'
import dialogMixin from './components/lj/dialog/mixin'
const throttle = new Throttle()
const debounce = new Debounce()
Vue.config.productionTip = false
//  vuex
Vue.prototype.$store = store
Vue.prototype.$f = {
  init: () => {
    console.log('未设置init函数')
  },
  // 节流 * .throttle(回调函数,等待时间,...回调函数的参数)
  te: throttle,
  // 抖动 * .debounce(回调函数,等待时间,...回调函数的参数)
  db: debounce,
  // 全局倒计时对像 开始.start() 结束.stop()
  counter: GlobalCounter,
  toPage,
  // 云函数记录日志
  log,
  toast,
  safeData,
  hideInfo,
  getRegexp,
  sleep,
  getStorageSync,
  setStorage,
  getCurrentPage,
  getObj
}
App.mpType = 'app'
// 设置请求拦截
setRequest(request, response)
// 加载mixins
Vue.mixin(comMixin.mixin)
Vue.mixin(dialogMixin)
// 初始化
const app = new Vue({
  ...App
})
// 添加微信实时日志
let wxLogFn = wxLog()
if (wxLogFn) {
  console.error = wxLogFn.error
  console.warn = wxLogFn.warn
  console.debug = wxLogFn.debug
  console.setFilterMsg = wxLogFn.setFilterMsg
  console.addFilterMsg = wxLogFn.addFilterMsg
}
app.$mount()

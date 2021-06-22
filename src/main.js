import Vue from 'vue'
import App from './App'
import store from './store/index'
import {
  toPage,
  log,
  setRequest,
  ljLog,
  getStorageSync,
  setStorage,
  getCurrentPage,
  P,
  toast,
} from './utils/microApi'
import { request, response, checkInput, GlobalCounter } from './utils/project'
import { safeData, hideInfo, sleep, loadFile, remInit } from './utils/j'
import comMixin from './utils/mixins/common'
import Throttle from './utils/class/Throttle'
import Debounce from './utils/class/Debounce'
import { getObj } from './utils/struct'
import dialogMixin from './components/lj/dialog/mixin'
const throttle = new Throttle()
const debounce = new Debounce()
Vue.config.productionTip = false
//  vuex
// #ifdef H5
Vue.prototype.$pageAni = 'fade'
// #endif
Vue.prototype.$store = store
Vue.prototype.$f = {
  init: () => {
    console.log('未设置init函数')
  },
  // 节流 * .throttle(回调函数,等待时间,...回调函数的参数)
  te: throttle,
  // 抖动 * .debounce(回调函数,等待时间,...回调函数的参数)
  db: debounce,
  // 全局倒计时对像 开始.setCount(60).start(num=>console.log(num)) 结束.stop()
  counter: GlobalCounter,
  toPage,
  // 云函数记录日志
  log,
  toast,
  safeData,
  hideInfo,
  sleep,
  getStorageSync,
  setStorage,
  getCurrentPage,
  // promise
  P,
  getObj,
  checkInput,
}
// 设置rem
if (process.env.VUE_APP_FONTREM) {
  remInit()
}
App.mpType = 'app'
// 设置请求拦截
setRequest(request, response)
// h5加载图标
// #ifdef H5
loadFile('https://at.alicdn.com/t/font_2120237_w05xu490np.js')
// #endif
// 加载mixins
Vue.mixin(comMixin.mixin)
Vue.mixin(dialogMixin)
// 初始化
const app = new Vue({
  ...App,
})
// 添加微信实时日志
// let wxLogFn = ljLog()
// if (wxLogFn) {
//   console.error = wxLogFn.error
//   console.warn = wxLogFn.warn
//   console.debug = wxLogFn.debug
//   console.setFilterMsg = wxLogFn.setFilterMsg
//   console.addFilterMsg = wxLogFn.addFilterMsg
// }
ljLog()
app.$mount()
window.APP_VERSION = APP_VERSION

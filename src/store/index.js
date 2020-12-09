import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import createPersistedState from 'vuex-persistedstate'
import { getObj } from '../utils/struct'
// import { decode, encode } from '../utils/encrypt/crypto'
import { decode, encode } from '../utils/encrypt/base64'
import { isJson } from '../utils/j'

const appConfig = getObj('config') || {}
let app = {}
if (typeof uni !== 'undefined') {
  app = uni
} else if (typeof taro !== 'undefined') {
  app = taro
} else if (typeof wx !== 'undefined') {
  app = wx
}
/**
 * @function
 * @description 获取storage的值，默认将json转为obj
 * @param {string} argKey 要获取的key
 * @param {string} argNoJson true时不自动转换JSON字符串
 * @returns {data} key对应的数据
 */
export const getStorageSync = (argKey, argNoJson) => {
  let data = app.getStorageSync(argKey)
  if (appConfig.localEncrypt) {
    data = decode(data)
  }
  // 默认转义JSON字符串
  if (!argNoJson && isJson(data)) {
    data = JSON.parse(data)
  }
  return data
}

/**
 * @function
 * @description 设置storage的值，默认将obj转为json
 * @param {string} argKey 要设置的key
 * @param {string} argData 要设置的值
 * @returns {promise} key对应的数据
 */
const setStorage = async (argKey, argData) => {
  let temData = argData
  if (appConfig.localEncrypt) {
    temData = encode(argData)
  }
  const res = await P('setStorage', { key: argKey, data: temData })
  return res.data || res || ''
}
const P = (argApi, argOptions) => {
  return new Promise(function (resolve, reject) {
    if (!argApi && argOptions.success) {
      return argOptions.success(resolve, reject)
    }
    const options = {
      success: resolve,
      fail: reject,
    }
    Object.assign(options, argOptions)
    if (app[argApi]) {
      app[argApi](options)
    } else {
      return Promise.reject('无此方法')
    }
  })
}
Vue.use(Vuex)

// 引入vuex-persistedstate，将vuex的数据持久化到本地
export default new Vuex.Store({
  state,
  mutations,
  // 用不了
  getters,
  actions,
  plugins: [
    // https://github.com/robinvdvleuten/vuex-persistedstate#readme
    createPersistedState({
      storage: {
        getItem: (key) => {
          return getStorageSync(key, true)
        },
        setItem: (argKey, argValue) => {
          return setStorage(argKey, argValue)
        },
        removeItem: () => {},
      },
      // 只储存某些字段
      reducer: (argData) => {
        const key = state.localKey || []
        let reData = {}
        key.map((v) => {
          reData[v] = argData[v] || ''
        })
        return reData
      },
    }),
  ],
})

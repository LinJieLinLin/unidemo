import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import createPersistedState from 'vuex-persistedstate'
import { getStorageSyncForVuex, setStorage } from '../utils/microApi'

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
        getItem: key => {
          return getStorageSyncForVuex(key)
        },
        setItem: (argKey, argValue) => {
          return setStorage(argKey, argValue)
        },
        removeItem: () => {}
      },
      // 只储存某些字段
      reducer: argData => {
        const key = state.localKey || []
        let reData = {}
        key.map(v => {
          reData[v] = argData[v] || ''
        })
        return reData
      }
    })
  ]
})

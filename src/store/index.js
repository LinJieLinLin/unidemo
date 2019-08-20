import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

// 引入vuex-persistedstate，将vuex的数据持久化到本地
export default new Vuex.Store({
  state,
  mutations,
  // 用不了
  getters,
  actions,
  plugins: [
    createPersistedState({
      storage: {
        getItem: key => {
          return wx.getStorageSync(key)
        },
        setItem: (key, value) => {
          // return wx.setStorageSync(, value)
          return wx.setStorage({
            key: key,
            data: value
          })
        },
        removeItem: () => {}
      }
    })
  ]
})

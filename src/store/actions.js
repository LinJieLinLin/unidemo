import { setUserInfo, mpLogin } from '@/api/common'
import { TestGet, TestPost } from '@/api/test'
const actions = {
  async TestGet({ commit }, param = {}) {
    const _result = await TestGet(param).catch((err) => {
      return Promise.reject(err)
    })
    return _result
  },
  async TestPost({ commit }, param = {}) {
    const _result = await TestPost(param).catch((err) => {
      console.log(err)
    })
    return _result
  },
  // #ifdef MP
  async MpLogin({ commit }, param = {}) {
    let action = ''
    // #ifdef MP-ALIPAY
    action = 'loginByAlipay'
    // #endif
    // #ifdef MP-WEIXIN
    action = 'loginByWeixin'
    // #endif
    param.action = action
    const _res = await mpLogin(param).catch((err) => {
      return Promise.reject(err)
    })
    commit('SetUserInfo', _res)
    return _res
  },
  // #endif
  async UpdateUser({ commit }, param = {}) {
    commit('SetUserInfo', param || {})
    let e
    const rs = await setUserInfo(param).catch((err) => {
      console.log(err)
      e = err
    })
    if (!rs) {
      return Promise.reject(e)
    }
    return rs
  },
}
export default actions

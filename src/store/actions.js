import { TestGet, TestPost } from '@/api/test'
import { login } from '@/utils/wx.js'
const actions = {
  async TestGet({ commit }, param = {}) {
    const _result = await TestGet(param).catch(err => {
      return Promise.reject(err)
    })
    return _result
  },
  async TestPost({ commit }, param = {}) {
    const _result = await TestPost(param).catch(err => {
      console.log(err)
    })
    return _result
  },
  async GetUserInfo({ commit }, rs) {
    const _result = await login().catch(err => {
      console.log(err)
    })
    if (rs) {
      // console.log('点按钮获取', rs.target)
      if (rs.target) {
        rs.target.code = _result.code
        commit('SetUserInfo', rs.target)
      }
      return rs.target
    } else {
      const _res = await new Promise(function(resolve, reject) {
        wx.getUserInfo({
          success: res => {
            return resolve(res)
          },
          fail: err => {
            return reject(err)
          }
        })
      })
      _res.code = _result.code
      commit('SetUserInfo', _res)
      return _res
    }
  },
  GetUserInfo1(state, rs) {
    if (!rs) {
      return wx.login({
        success: res => {
          // console.log(res)
          let code = res
          wx.getUserInfo({
            success: res => {
              // console.log(res)
              state.UserInfo = res.userInfo
            }
          })
        }
      })
    } else {
      // console.log(this)
      // console.log(rs)
      state.UserInfo = rs.target.userInfo
      state.UserInfo.encryptedData = rs.target.encryptedData
      state.UserInfo.iv = rs.target.iv
      state.UserInfo.signature = rs.target.signature
      state.UserInfo.encryptedData = rs.target.encryptedData
    }
    // 调用登录接口
  }
}
export default actions

import { setStorage } from '../utils/wx'
const matations = {
  /**
   * @description 获取用户信息
   * @param {object} argData 用户信息
   */
  SetUserInfo(state, argData = {}) {
    state.UserInfo = Object.assign({}, state.UserInfo, argData)
    state.UserInfo.avatarUrl =
      state.UserInfo.avatarUrl || state.UserInfo.headimgurl
    state.UserInfo.nickName = state.UserInfo.nickname || state.UserInfo.nickName
  },
  // 设置是否刷新
  SetReload(state, argData = false) {
    state.Reload = argData
  },
  // 倒计时数字
  SetCountNum(state, argData = '') {
    state.CountNum = +argData
    setStorage('CountNum', argData)
  }
}

export default matations

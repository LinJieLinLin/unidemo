import { setStorage } from '../utils/wx'
const matations = {
  /**
   * @description 获取用户信息
   * @param {object} argData 用户信息，有force时覆盖UserInfo
   */
  SetUserInfo(state, argData = {}) {
    if (argData.force) {
      delete argData.force
      state.UserInfo = argData
    } else {
      state.UserInfo = Object.assign({}, state.UserInfo, argData)
    }
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

import { setStorage, getCurrentPage } from 'lj-utils/microApi'
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
  // 记录打开场景
  SetScene(state, argData = '') {
    state.Scene = argData
  },
  // 倒计时数字
  SetCountNum(state, argData = '') {
    // console.log(argData)
    state.CountNum = +argData
    setStorage('CountNum', argData)
  },
  // 打开dialog
  OpenDialog(state, argData = {}) {
    let nowThis = getCurrentPage().$vm
    if (nowThis.DialogShow) {
      nowThis.DialogShow(argData.data, argData.options)
    }
  },
}

export default matations

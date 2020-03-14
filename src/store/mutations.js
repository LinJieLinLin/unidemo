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
  // 当前报名用户信息
  SetSignUserInfo(state, argData) {
    state.SignUserInfo = argData
  },
  // 设置是否刷新
  SetReload(state, argData = false) {
    state.Reload = argData
  },
  // 当前券信息
  SetCouponItem(state, argData) {
    if (!argData.validTimeText) {
      state.CouponItem.validTimeText = ''
    }
    state.CouponItem = Object.assign(state.CouponItem, argData)
  },
  // 当前票券信息
  SetTicketItem(state, argData) {
    state.TicketItem = Object.assign(state.TicketItem, argData)
  },
  SetShowBackIndex(state, argData = false) {
    state.ShowBackIndex = argData
  }
}

export default matations

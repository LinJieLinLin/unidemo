import { requestCloud } from 'lj-utils/microApi'
// 通用
// 微信登录
export function mpLogin(params = {}, config = {}) {
  let action = params.action
  delete params.action
  return requestCloud({
    name: 'uni-id-cf',
    params: {
      action,
      params,
    },
    config,
  })
}
export function aliLogin(params = {}, config = {}) {
  return requestCloud({
    name: 'uni-id-cf',
    params: {
      action: 'loginByAlipay',
      params,
    },
    config,
  })
}

// 更新用户信息
export function setUserInfo(params = {}, config = {}) {
  return requestCloud({
    name: 'lj-uni-id',
    params: {
      action: 'updateUser',
      params,
    },
    config,
  })
}
export function checkToken(params = {}, config = {}) {
  return requestCloud({
    name: 'uni-id-cf',
    params: {
      action: 'checkToken',
      params,
    },
    config,
  })
}

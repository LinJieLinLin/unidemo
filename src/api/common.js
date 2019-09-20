import { request } from '../utils/wx'
// 通用
export function wxLogin(params = {}, config = {}) {
  return request({
    url: '/api/custom/wechat/wechat/login',
    method: 'post',
    params,
    config
  })
}
export function saveUserinfo(params = {}, config = {}) {
  return request({
    url: '/api/custom.wechat.wechat/saveUserinfo',
    method: 'post',
    params,
    config
  })
}

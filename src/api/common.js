// 通用
export function wxLogin(params = {}, config = {}) {
  return request({
    url: '/api/custom/wechat/wechat/login',
    method: 'post',
    params,
    config
  })
}

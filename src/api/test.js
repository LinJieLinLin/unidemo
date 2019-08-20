import { request } from '@/utils/wx'
export function TestGet(params = {}, config = {}) {
  return request({
    url: 'http://yapi.demo.qunar.com/mock/9343/api/test',
    method: 'get',
    params,
    config
  })
}
export function TestPost(params = {}, config = {}) {
  return request({
    url: 'http://baidu.comapi/test',
    method: 'post',
    params,
    config
  })
}

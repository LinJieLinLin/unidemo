/*
 * @author: linj
 * @email: 993353454@qq.com
 * @Date: 2021-07-07 16:10:17
 * @description:
 */
/**
 * 公共函数
 * @module
 * @author linj
 * @description 项目公共函数
 */
/* eslint-disable no-case-declarations */
import store from '../store'
import { getRegexp, safeData, isJson, hideInfo, toFixed } from 'lj-utils'
import {
  init,
  toast,
  getStorageSync,
  setStorage,
  hideLoading,
  login,
  P,
} from 'lj-utils/microApi'
import { enBase64, deBase64 } from 'lj-utils/encrypt/base64'
import Counter from 'lj-utils/class/Counter'
import Throttle from 'lj-utils/class/Throttle'
import { getObj } from './struct'
// 函数节流
const throttle = new Throttle()
const appConfig = getObj('config') || {}
let ljCloud = ''
if (typeof uniCloud !== 'undefined' && appConfig.uniCloud) {
  ljCloud = uniCloud.init(appConfig.uniCloud)
}

init(appConfig)
export const RegexpObj = getRegexp()
/**
 * 数据变更时
 * @function
 * @date 2019-10-16
 * @param {any} argItem 要编辑的item
 * @param {any} argData 获取到的值 item
 * @returns {any} argItem 返回处理完的obj
 */
export const checkInput = (argItem, argData) => {
  try {
    if (typeof argData.value === 'string' && argItem.type !== 'textarea') {
      argData.value = argData.value.trim()
    }
    // 清空全部空格
    if (argItem.trim) {
      argData.value = argData.value.replace(/\s/g, '')
    }
    // 默认赋值
    argItem.value = argData.value
    argItem.showValue = argData.value
    argItem.isFail = false
    // 根据类型做处理
    if (!argItem.value && argItem.value !== 0) {
      if (argItem.require) {
        argItem.isFail = true
      }
      argItem.isFail = false
      return
    }
    switch (argItem.type) {
      // case 'phoneCode':
      //   break
      // case 'date':
      //   break
      // case 'selector':
      //   break
      // case 'multiSelector':
      //   break
      case 'digit':
        argItem.value = +argItem.value
        argItem.showValue = +argItem.value + ''
        // 判断最小值
        if (argItem.min >= 0 && +argItem.value < argItem.min) {
          toast(argItem.name + '最小值为：' + argItem.min)
          argItem.value = argItem.min
          argItem.showValue = argItem.min + ''
        }
        // 判断最大值
        if (argItem.max && +argItem.value > argItem.max) {
          toast(argItem.name + '最大值为：' + argItem.max)
          argItem.value = argItem.max
          argItem.showValue = argItem.max + ''
        }
        // 判断保留位数
        let temDotData = argItem.showValue.split('.')
        if (temDotData.length > 1) {
          let temLen = argItem.fixed
          if (temLen < temDotData[1].length) {
            toast('最多保留' + temLen + '位小数')
            argItem.value = +toFixed(argItem.value, temLen)
            argItem.showValue = argItem.value
          }
        }
        break
      case 'number':
        argItem.value = +argItem.value
        argItem.showValue = +argItem.value + ''
        // 判断最小值
        if (
          (argItem.min || argItem.min === 0) &&
          +argItem.value < argItem.min
        ) {
          argItem.min = argItem.min || 0
          toast(argItem.name + '最小值为：' + argItem.min)
          argItem.value = argItem.min
          argItem.showValue = argItem.min + ''
        }
        // 判断最大值
        if (
          (argItem.max || argItem.max === 0) &&
          +argItem.value > argItem.max
        ) {
          toast(argItem.name + '最大值为：' + argItem.max)
          argItem.value = argItem.max
          argItem.showValue = argItem.value + ''
        }
        break
      case 'password':
        break
      case 'idcard':
        argItem.value = argItem.value.toUpperCase()
        argItem.showValue = argItem.value.toUpperCase()
        break
      case 'text':
        break
      case 'textarea':
        break
      case 'phoneCode':
        if (
          argItem.value &&
          argItem.value ===
            hideInfo(safeData(getStorageSync('UserInfo'), 'sjhm', ''), 3, 4)
        ) {
          argItem.showValue = safeData(getStorageSync('UserInfo'), 'sjhm', '')
        }
        argItem.isFail = !RegexpObj.phone.test(argItem.showValue)
        break
      case 'imgCode':
        argItem.isFail = argItem.value && argItem.value.length < 4
        break
      // 证件号码处理 数字+字母 30位以内，具体读取maxlength字段
      case 'zjhm':
        break
      case 'select':
        break
      case 'switch':
        break
      case 'dateRange':
        // 处理年
        if (argItem.value && argItem.fields === 'year') {
          argItem.value[0] = argItem.value[0].slice(0, 7)
          argItem.value[1] = argItem.value[1].slice(0, 7)
        } else if (argItem.value && argItem.fields === 'month') {
          // 处理月
          argItem.value[0] = argItem.value[0].slice(0, 7)
          argItem.value[1] = argItem.value[1].slice(0, 7)
        }
        argItem.showValue = argItem.value
        break
      case 'date':
        // 处理年
        if (argItem.value && argItem.fields === 'year') {
          argItem.value = argItem.value.slice(0, 7)
        } else if (argItem.value && argItem.fields === 'month') {
          // 处理月
          argItem.value = argItem.value.slice(0, 7)
        }
        argItem.showValue = argItem.value.replace(/-/g, '')
        argItem.isFail = false
        break
      case 'selector':
        if (argItem.value === '') {
          argItem.value = -1
          argItem.showValue = ''
          return argItem
        }
        argItem.value = argItem.value === -1 ? 0 : argItem.value
        argItem.showValue = safeData(
          argItem,
          'range.' + argItem.value + '.value'
        )
        break
      case 'multiSelector':
        argItem.range.map((v, k) => {
          argItem.value[k] = argItem.value[k] === -1 ? 0 : argItem.value[k]
          return v
        })
        break
      default:
        break
    }
    if (argItem.value) {
      // 最小长度判断
      if (argItem.minlength) {
        argItem.isFail = ('' + argItem.value).length < argItem.minlength
      }
      // 正则表达式判断
      if (argItem.pattern) {
        argItem.isFail = !argItem.pattern.test(argItem.value)
        if (argItem.isFail && argItem.errMsg && argItem.value !== '') {
          toast(argItem.errMsg)
        }
      }
    }
    return argItem
  } catch (error) {
    console.error(error)
    return argItem
  }
}

/**
 * @function
 * @description 数据提交前检查
 * @date 2019-10-16
 * @param {any} argItem 要编辑的item
 * @param {any} argData 获取到的值 item
 * @returns {any} argItem 返回处理完的obj
 */
export const formCheck = (argList, argToast) => {
  let fail = false
  let temLen = argList.length
  for (let i = 0; i < temLen; i++) {
    let v = argList[i]
    if (v.isFail) {
      fail = true
      if (argToast) {
        toast('请正确填写' + v.name)
        console.error(v.name, v)
        return fail
      }
    }
    if (!v.value && v.value !== 0 && v.require) {
      fail = true
      if (argToast) {
        if (v.type === 'date' || v.type === 'select' || v.type === 'switch') {
          toast('请先选择' + v.name)
        } else {
          toast('请正确填写' + v.name)
          v.isFail = true
        }
        return fail
      }
    }
    let temFail = false
    switch (v.type) {
      case 'switch':
        console.error(v)
        if ((v.value === -1 || v.value === '') && v.require) {
          fail = true
          if (argToast) {
            toast('请先选择' + v.name)
            return fail
          }
        }
        break
      case 'select':
        break
      case 'selector':
        if (v.require && +v.value === -1) {
          fail = true
          if (argToast) {
            toast('请先选择' + v.name)
            return fail
          }
        }
        break
      case 'checkboxGroup':
        if (v.value.length <= 0) {
          fail = true
          if (argToast) {
            toast('请正确填写' + v.name)
            return fail
          }
        }
        break
      case 'multiSelector':
        v.value.map((v1) => {
          if (+v1 === -1) {
            temFail = true
          }
        })
        fail = temFail
        if (argToast && temFail) {
          toast('请先选择' + v.name)
          return fail
        }
        break
      case 'date':
        break
      case 'phoneCode':
        // if (v.disabled && !v.showValue) {
        //   v.isFail = true
        //   toast('请先在个人设置中绑定手机号码！')
        // }
        break
      default:
        break
    }
  }
  return fail
}

/**
 * 描述
 * @function
 * @description 设置CountNum 全局倒计时
 * @param argData 倒计秒数
 * @date 2019-09-26
 * @returns {functions}
 */
const setCountNum = (argData) => {
  store.commit('SetCountNum', argData)
}
/**
 * 描述
 * @function
 * @description 获取全局倒计时对象
 * @date 2019-09-26
 * @returns {functions}
 */
export const GlobalCounter = new Counter(
  +getStorageSync('CountNum') || 60,
  setCountNum
)
/**
 * @function
 * @description 请求参数过滤
 * @param  {object} argData 请求数据
 * @returns {object} 处理后的数据
 */
export const clearParams = (argData = {}) => {
  let params = argData
  return params
}
/**
 * @function
 * @description 请求拦截
 * @param  {object} argData 请求数据
 * @returns {object} 处理后的数据
 */
export const request = (argData) => {
  // 不显示loading
  if (argData.config.noLoading) {
    hideLoading()
  }
  argData.params = clearParams(argData.params) || {}
  // argData.params.token = getStorageSync('tk')
  argData.params.uniIdToken = getStorageSync('tk')
  console.log('req:', argData)
  // 设置header
  // argData.config.header = Object.assign(
  //   {
  //      //'content-type':'multipart/form-data',
  //     'content-type': 'application/x-www-form-urlencoded',
  //   },
  //   argData.config.header || {}
  // )
  return argData
}
/**
 * @function
 * @description 响应拦截
 * @param  {object} argData 响应数据
 * @returns {object} 处理后的数据
 */
export const response = async (argData = { config: {} }) => {
  // 返回整个argData时代表出错
  argData.reject = true
  argData.config = argData.config || {}
  argData.data = argData.data || argData.result
  if (!argData.data || typeof argData.data !== 'object') {
    if (!argData.config.noToast) {
      toast(safeData(argData, 'message', '服务器开了小差，请刷新试试！'))
    }
    return argData
  }
  console.log('res：', argData)
  switch (+argData.data.code) {
    case 0:
      if (safeData(argData, 'data.token')) {
        setStorage('tk', argData.data.token)
        setStorage('uni_id_token', argData.data.token)
        setStorage('uni_id_token_expired', argData.data.tokenExpired)
      }
      return argData.data.data || argData.data
    case 403: // 未有token
    case 30204: // 已失效
    case 30203: // 已失效
    case 30202: // 不合法
    case 30201: // 不合法
      throttle.throttle(unLogin)
      return Promise.reject(argData.data)
    case 404:
      return Promise.reject(argData.data)
    default:
      if (safeData(argData, 'data.msg') && !argData.config.noToast) {
        if (!argData.config.noToast) {
          await toast(argData.data.msg)
        }
        return Promise.reject(argData.data)
      }
      break
  }
}
/**
 * @description 未登录处理
 */
export const unLogin = async () => {
  // #ifdef MP
  // toast('登录信息失效，正在重新登录')
  let res = await login(1)
  let data = {
    code: res.code,
  }
  store.dispatch('MpLogin', data)
  // #endif
}

export const uploadImg = async (argOption) => {
  var error, filePath, file, res
  var data = {
    url: argOption.params.url,
    filePath: '',
    name: argOption.params.name || 'file',
    formData: null,
    header: {
      // tk: getStorageSync('tk'),
      // guid: getStorageSync('guid') || uuid(),
    },
  }
  filePath = argOption.params.filePath
  // file = argOption.params.file
  const uploadOne = async (argPath) => {
    data.filePath = argPath
    let res = await P('uploadFile', data).catch((err) => {
      error = err
      console.error('uploadFile error', data, err)
    })
    // #ifdef  H5
    URL.revokeObjectURL(argPath)
    // #endif
    if (res) {
      res.data = JSON.parse(res.data)
      return response(res)
    } else {
      return Promise.reject(error)
    }
  }

  delete argOption.params.url
  delete argOption.params.filePath
  delete argOption.params.file
  delete argOption.params.name

  argOption = request(argOption)
  data.formData = argOption.params
  // data.header = argOption.config.header
  // 单张上传
  if (typeof filePath === 'string') {
    return uploadOne(filePath)
  } else {
    const temUploadFn = filePath.map(uploadOne)
    res = await Promise.all(temUploadFn).catch((err) => {
      error = err
    })
    if (res) {
      return res
    } else {
      return Promise.reject(error)
    }
  }
}

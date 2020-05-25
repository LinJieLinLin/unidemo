/* eslint-disable no-case-declarations */
import store from '../store'
import { getRegexp, safeData, isJson, hideInfo, toFixed } from './j'
import { toast, getStorageSync, setStorage, hideLoading } from './microApi'
import md5 from 'md5'
import { enBase64, deBase64 } from './encrypt/crypto'
export const clearParams = (argData = {}) => {
  const isFormData =
    Object.prototype.toString.call(argData) === '[object FormData]'
  const _now = new Date()
  // const timestamp = Math.floor(+_now / 1000, 10)
  const timestamp = +_now
  let data = null
  _now.setMilliseconds(0)
  _now.setHours(0)
  _now.setMinutes(0)
  _now.setSeconds(0)
  if (typeof argData.get === 'function') {
    data = argData
  } else {
    data = JSON.parse(JSON.stringify(argData))
  }
  if (isFormData) {
    // 先去掉签名字段
    data.delete('sign')
    data.delete('___once')
    data.delete('timestamp')
    data.append('timestamp', timestamp)
  } else {
    // 先去掉签名字段
    delete data.sign
    data.timestamp = timestamp
  }
  const keys = []
  let encryptStr = ''
  if (isFormData) {
    data.forEach((v, k) => {
      // 过滤-1值
      if (v && v === '-1') {
        if (data.get(k)) {
          data.set(k, '')
          data.set(k, '')
        }
      }
      keys.push(k)
    })
    keys.sort()
    // 按照keys依次获取value
    keys.forEach((key) => {
      // 如果null 或 undefined等置为
      if (data.get(key) == null || typeof data.get(key) === 'undefined') {
        data.set(key, '')
        encryptStr += JSON.stringify(data.get(key))
      } else if (
        Object.prototype.toString.call(data.get(key)) !== '[object File]'
      ) {
        const __val = data.get(key)
        // 如果null 或 undefined等置为
        if (__val == null || typeof __val === 'undefined') {
          data.set(key, '')
          encryptStr += ''
        } else if (!isJson(__val)) {
          encryptStr += __val
        } else {
          encryptStr += JSON.stringify(data.get(key))
        }
      }
    })
  } else {
    for (const k in data) {
      // 过滤-1值
      if (data[k] && data[k] === '-1') {
        if (data[k]) {
          data[k] = ''
        }
      }
      keys.push(k)
    }
    keys.sort()
    // 按照keys依次获取value
    keys.forEach((key) => {
      const __val = data[key]
      if (__val == null || typeof __val === 'undefined') {
        // 如果null 或 undefined等置为
        data[key] = ''
        encryptStr += ''
      } else if (typeof __val === 'boolean') {
        // 如果null 或 undefined等置为
        data[key] = +__val
        encryptStr += +__val
      } else if (!isJson(__val)) {
        encryptStr += __val
      } else {
        encryptStr += JSON.stringify(data[key])
      }
    })
  }
  encryptStr = encryptStr.replace(/(\n|\t|\r)/gim, '')
  encryptStr = encryptStr.replace(/("|'|\\n|\\t|\\r|\\)/gim, '')
  // 拼接加密前的sign

  const preAccessKey1 = (_now.getTime() / 1000 + _now.getFullYear()) ^ 2
  const preAccesskey2 = preAccessKey1.toString(32) + 'by tencent Inc.(大粤网)'
  const accesskey = md5(preAccesskey2)
  const sign = encryptStr + accesskey
  if (isFormData) {
    // data.append('sign', md5(sign))
  } else {
    // data.sign = md5(sign)
  }
  return data
}

/**
 * @function
 * @description 保存token
 * @param  {object} argData 响应数据
 */
export const setToken = (argData = {}, argKey) => {
  if (!argData.tk || argData.tk === getToken('power by gddyw fe')) {
    return
  }
  if (argData.tk && argData.timestamp) {
    const accesskey = argKey
    const temTk = enBase64(accesskey + argData.tk)
    setStorage('tk', temTk)
    setStorage('delay', Date.now() - argData.timestamp * 1000)
  }
}
/**
 * @function
 * @description 获取token
 * @param  {object} argData 响应数据
 */
export const getToken = (argKey) => {
  let tk = deBase64(getStorageSync('tk'))
  const accesskey = argKey
  tk = tk.replace(accesskey, '')
  const _now = new Date()
  _now.setMilliseconds(0)
  _now.setSeconds(0)
  const timestamp = Math.floor(+_now / 1000, 10)
  tk = enBase64(md5(String(timestamp)) + tk)
  return tk
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
  argData.params = argData.params || {}
  argData.params.token = getStorageSync('tk')
  console.log('req:', argData)
  // 设置header
  argData.config.header = Object.assign(
    {
      'content-type': 'application/x-www-form-urlencoded',
    },
    argData.config.header || {}
  )
  return argData
}
/**
 * @function
 * @description 响应拦截
 * @param  {object} argData 响应数据
 * @returns {object} 处理后的数据
 */
export const response = (argData = { config: {} }) => {
  // 返回整个argData时代表出错
  argData.reject = true
  argData.config = argData.config || {}
  argData.data = argData.result
  if (!argData.data || typeof argData.data !== 'object') {
    if (!argData.config.noToast) {
      toast('服务器开了小差，请刷新试试！')
    }
    return argData
  }
  console.log('res：', argData)
  switch (+argData.data.code) {
    case 0:
      if (safeData(argData, 'data.data.token')) {
        setStorage('tk', argData.data.data.token)
      }
      return argData.data.data
    case 404:
      return {
        cb: async (resolve, reject) => {
          if (!argData.config.noToast) {
            await toast('接口404，请刷新重试！')
          } else {
            argData.msg = '接口404，请刷新重试！'
          }
          reject(argData)
        },
      }
    default:
      if (safeData(argData, 'data.msg') && !argData.config.noToast) {
        return {
          cb: async (resolve, reject) => {
            if (!argData.config.noToast) {
              await toast(argData.data.msg)
            }
            reject(argData)
          },
        }
      }
      break
  }
  return argData
}

const regRule = getRegexp()
/**
 * 数据变更时
 * @date 2019-10-16
 * @param {any} argItem 要编辑的item
 * @param {any} argData 获取到的值 item
 * @returns {any} argItem 返回处理完的obj
 */
export const checkInput = (argItem, argData) => {
  try {
    if (typeof argData.value === 'string') {
      argData.value = argData.value.trim()
    }
    argItem.value = argData.value
    argItem.saveValue = argData.value
    // 根据类型做处理
    switch (argItem.type) {
      case 'imgUploader':
      case 'IDCardUploader':
        argItem.saveValue = argData.saveValue
        break
      case 'digit':
        if (argItem.value !== '') {
          if (argItem.min >= 0 && +argItem.value < argItem.min) {
            argItem.min = argItem.min || 0
            toast(argItem.name + '最小值为：' + argItem.min)
            argItem.value = argItem.min
            argItem.saveValue = argItem.min
          }
          if (argItem.max && +argItem.value > argItem.max) {
            toast(argItem.name + '最大值为：' + argItem.max)
            argItem.value = argItem.max
            argItem.saveValue = argItem.max
          }
        }
        // eslint-disable-next-line no-case-declarations
        let temDotData = ('' + argItem.value).split('.')
        if (temDotData.length > 1) {
          let temLen = argItem.dotLength || 2
          if (temLen < temDotData[1].length) {
            toast('最多保留' + temLen + '位小数')
            argItem.value = toFixed(+argItem.value)
            argItem.saveValue = argItem.value
          }
        }
        if (argItem.saveValue) {
          argItem.isFail = !regRule.score2.test(argItem.saveValue)
        }
        break
      case 'number':
        if (argItem.value === '') {
          break
        }
        if (argItem.min >= 0) {
          argItem.min = argItem.min || 0
          argItem.isFail = argItem.min > +argItem.value
        }
        if (argItem.min >= 0 && +argItem.value < argItem.min) {
          argItem.min = argItem.min || 0
          toast(argItem.name + '最小值为：' + argItem.min)
          argItem.value = argItem.min
          argItem.saveValue = argItem.min
        }
        if (argItem.max && +argItem.value > argItem.max) {
          toast(argItem.name + '最大值为：' + argItem.max)
          argItem.value = argItem.max
          argItem.saveValue = argItem.value
        }
        break
      case 'phoneCode':
        if (
          argItem.value &&
          argItem.value ===
            hideInfo(safeData(getStorageSync('UserInfo'), 'sjhm', ''))
        ) {
          argItem.saveValue = safeData(getStorageSync('UserInfo'), 'sjhm', '')
        }
        argItem.isFail = !regRule.phone.test(argItem.saveValue)
        break
      case 'imgCode':
        argItem.isFail = argItem.value.length < 4
        break
      case 'password':
        if (argItem.value) {
          let isNumber = regRule.number.test(argItem.value)
          if (!isNumber) {
            argItem.value = ''
            argItem.saveValue = ''
            toast('请输入6位数字组合')
          }
        }
        break
      case 'idcard':
        // argItem.isFail = !argItem.value
        argItem.saveValue = argItem.value.toUpperCase()
        argItem.isFail = !regRule.idCardNormal.test(argItem.saveValue)
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
        argItem.saveValue = argItem.value
        break
      case 'date':
        // 处理年
        if (argItem.value && argItem.fields === 'year') {
          argItem.value = argItem.value.slice(0, 7)
        } else if (argItem.value && argItem.fields === 'month') {
          // 处理月
          argItem.value = argItem.value.slice(0, 7)
        }
        argItem.saveValue = argItem.value.replace(/-/g, '')
        argItem.isFail = false
        break
      case 'selector':
        if (argItem.value === '') {
          argItem.value = -1
          argItem.saveValue = ''
          return argItem
        }
        argItem.value = argItem.value === -1 ? 0 : argItem.value
        argItem.saveValue = safeData(
          argItem,
          'range.' + argItem.value + '.value'
        )
        break
      case 'multiSelector':
        argItem.range.map((v, k) => {
          argItem.value[k] = argItem.value[k] === -1 ? 0 : argItem.value[k]
        })
        break
      case 'text':
        if (!argItem.value && argItem.require) {
          argItem.isFail = true
        } else {
          argItem.isFail = false
        }
        break
      default:
        break
    }
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
      // console.log('判断正则：true为不通过', argItem.isFail)
    }
    return argItem
  } catch (error) {
    console.error(error)
    return argItem
  }
}
// 表单检查
export const formCheck = (argList) => {
  let fail = false
  // 遇到错误返回
  // let temLen = argList.length
  // for (let i = 0; i < temLen; i++) {
  //   if (argList[i].isFail) {
  //     fail = true
  //   }
  //   if (!argList[i].value && argList[i].require) {
  //     argList[i].isFail = true
  //     fail = true
  //     return
  //   }
  // }
  argList.map((v) => {
    if (v.isFail) {
      fail = true
    }
    if (v.value === '' && v.require) {
      fail = true
    }
    let temFail = false
    switch (v.type) {
      case 'select':
        break
      case 'selector':
        if (v.require && +v.value === -1) {
          fail = true
        }
        break
      case 'checkboxGroup':
        if (v.value.length <= 0) {
          fail = true
        }
        break
      case 'multiSelector':
        v.value.map((v1) => {
          if (+v1 === -1) {
            temFail = true
          }
        })
        fail = temFail
        break
      case 'date':
        break
      case 'phoneCode':
        // if (v.disabled && !v.saveValue) {
        //   v.isFail = true
        //   toast('请先在个人设置中绑定手机号码！')
        // }
        break
      default:
        break
    }
  })
  return fail
}
// 接口日期转换前端格式
export const dateCodeToText = (dateCode = '') => {
  if (!dateCode) {
    return ''
  }
  dateCode = dateCode.replace('-', '')
  let year = dateCode.slice(0, 4)
  let mounth = dateCode.slice(4, 6)
  let day = dateCode.slice(6, 8)
  if (!day) {
    return `${year}-${mounth}`
  }
  return `${year}-${mounth}-${day}`
}

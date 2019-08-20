export const getRegexp = () => {
  return {
    // 简易身份证号正则，isIdCard更为严格
    idCard: /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/,
    // 手机号
    phone: /^1\d{10}$/,
    // 邮箱
    email: /^(w)+(.w+)*@(w)+((.w+)+)$/,
    // 网址
    http: /http:\/\/|https:\/\//,
    // 分数
    score: /^[1-9]\d*|0$/,
    // 保留1位小数的分数
    score1: /^(([1-9])|([1-9]+[0-9]+)|(0)|([0-9]+.[0-9]{1}))$/,
    // 保留1位小数的分数
    score2: /^(([1-9])|([1-9]+[0-9]+)|(0)|([0-9]+.[0-9]{2}))$/,
    // 整数
    int: /^[1-9]\d*$/,
    // 正一位小数
    float1: /^(([1-9]\d*)|0|(\d+.\d{1}))$/,
    // 正两位小数
    float2: /^(([1-9]\d*)|0|(\d+.\d{2}))$/,
    // 帐号50个字内：大小写+数字+中文+'_'+'-'
    account: /^[a-zA-Z0-9_\-\u4e00-\u9fa5]{1,50}$/,
    // 中英文姓名 50个字内
    realName: /^([\u4e00-\u9fa5]{1,50}|[\u4e00-\u9fa5]{1,25}[\s][\u4e00-\u9fa5]{1,24}|[a-zA-Z_\-.]{1,50}|[a-zA-Z_\-.]{1,25}[\s][a-zA-Z_\-.]{1,24})$/
  }
}

export const setUrlParams = (argParams, noMark) => {
  let re = ''
  if (!noMark) {
    re = '?'
  }
  for (let k in argParams) {
    re += k + '=' + argParams[k] + '&'
  }
  if (argParams) {
    re = re.substring(0, re.length - 1)
  }
  return re
}

export const getUrlParam = (argName, argUrl = window.location.search) => {
  let result = argUrl.match(new RegExp('[?&]' + argName + '=([^&]+)', 'i'))
  if (!result) {
    return ''
  }
  return decodeURIComponent(result[1])
}

export const replaceUrlParam = (name, value, url = window.location.href) => {
  let reg = new RegExp('([?]|&)(' + name + '=)([^&#]*)([&]?|$)', 'img')
  let r = url.match(reg)
  let search = url.split('?')
  let strValue = url
  if (value === undefined || value === null) {
    if (r != null) {
      strValue = url.replace(reg, function() {
        if (!arguments[4] || !arguments[4].length) {
          return ''
        } else if (arguments[1] === arguments[4]) {
          return arguments[1]
        }
        return arguments[1] + arguments[4]
      })
    }
  } else if (r != null) {
    strValue = url.replace(reg, `$1$2${value}$4`)
  } else if (search.length > 1) {
    let sub = search[1].split('#')
    if (sub.length > 1) {
      if (sub[1].length) {
        strValue = `${search[0]}?${sub[0]}&${name}=${value}#${sub[1]}`
      } else {
        strValue = `${search[0]}?${sub[0]}&${name}=${value}${sub[1]}`
      }
    } else {
      strValue = `${search[0]}?${search[1]}&${name}=${value}`
    }
  } else {
    // 不存在?时,搜索hash
    let sub = url.split('#')
    if (sub.length > 1) {
      strValue = `${sub[0]}?${name}=${value}#${sub[1]}`
    } else {
      strValue = `${url}?${name}=${value}`
    }
  }
  return strValue
}

export const encodeHtml = argHtml => {
  if (!argHtml || argHtml.length === 0) {
    return ''
  }
  argHtml = argHtml.replace(/&/g, '&amp;')
  argHtml = argHtml.replace(/</g, '&lt;')
  argHtml = argHtml.replace(/>/g, '&gt;')
  argHtml = argHtml.replace(/ /g, '&nbsp;')
  argHtml = argHtml.replace(/'/g, '&#39;')
  argHtml = argHtml.replace(/"/g, '&quot;')
  argHtml = argHtml.replace(/\n/g, '<br>')
  return argHtml
}

export const decodeHtml = argHtml => {
  if (!argHtml || argHtml.length === 0) {
    return ''
  }
  argHtml = argHtml.replace(/&amp;/g, '&')
  argHtml = argHtml.replace(/&lt;/g, '<')
  argHtml = argHtml.replace(/&gt;/g, '>')
  argHtml = argHtml.replace(/&nbsp;/g, ' ')
  argHtml = argHtml.replace(/&#39;/g, '\'')
  argHtml = argHtml.replace(/&quot;/g, '"')
  argHtml = argHtml.replace(/<br>/g, '\n')
  return argHtml
}

export const safeData = (argData, argCheck, argValue) => {
  var temKey = argCheck.toString().split('.')
  var temLen = temKey.length
  if (!argData) {
    return argValue
  }
  if (temLen > 1) {
    for (var i = 0; i < temLen - 1; i++) {
      if (typeof argData[temKey[i]] !== 'object') {
        return argValue
      }
      argData = argData[temKey[i]] || {}
    }
  }
  if (typeof argValue === 'undefined') {
    return argData[temKey[temLen - 1]]
  }
  return argData[temKey[temLen - 1]] || argValue
}

export const setTitle = argTitle => {
  document.getElementsByTagName('title')[0].innerText = argTitle
}

export const rmbPrice = (argData, argRate = 1) => {
  if (typeof argData !== 'number') {
    return argData || '--'
  }
  argData = Math.round(argData)
  return '￥' + argData / argRate
}

export const formatTime = (
  date = +new Date(),
  fmt = 'YYYY-MM-DD HH:mm:ss',
  emptyTip = ''
) => {
  if (!date) {
    return emptyTip
  }
  if (typeof date === 'number') {
    date = '' + date
    if (date.length === 10) {
      date += '000'
    }
  }
  date = new Date(+date)
  var o = {
    'M+': date.getMonth() + 1,
    'D+': date.getDate(),
    'h+': date.getHours() % 12 === 0 ? 12 : date.getHours() % 12,
    'H+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'q+': Math.floor((date.getMonth() + 3) / 3),
    S: date.getMilliseconds()
  }
  var week = {
    '0': '\u65e5',
    '1': '\u4e00',
    '2': '\u4e8c',
    '3': '\u4e09',
    '4': '\u56db',
    '5': '\u4e94',
    '6': '\u516d'
  }
  if (/(Y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + '').substr(4 - RegExp.$1.length)
    )
  }
  if (/(E+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (RegExp.$1.length > 1
        ? RegExp.$1.length > 2
          ? '\u661f\u671f'
          : '\u5468'
        : '') + week[date.getDay() + '']
    )
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
      )
    }
  }
  return fmt
}

export const friendlyTime = (
  date = +new Date(),
  fmt = 'YYYY-MM-DD HH:mm:ss',
  emptyTip = ''
) => {
  if (!date && date !== 0) {
    return emptyTip
  }
  if (typeof date === 'number') {
    date = '' + date
    if (date.length === 10) {
      date += '000'
    }
  }
  date = new Date(+date)
  let diff = (new Date().getTime() - date.getTime()) / 1000
  let dayDiff = Math.floor(diff / 86400)
  let isValidDate =
    Object.prototype.toString.call(date) === '[object Date]' &&
    !isNaN(date.getTime())
  if (!isValidDate) {
    console.error('not a valid date')
  }
  if (isNaN(dayDiff) || dayDiff < 0 || dayDiff >= 31) {
    return this.formatTime(date, fmt)
  }
  return (
    (dayDiff === 0 &&
      ((diff < 60 && '刚刚') ||
        (diff < 120 && '1分钟前') ||
        (diff < 3600 && Math.floor(diff / 60) + '分钟前') ||
        (diff < 7200 && '1小时前') ||
        (diff < 86400 && Math.floor(diff / 3600) + '小时前'))) ||
    (dayDiff === 1 && '昨天') ||
    (dayDiff < 7 && dayDiff + '天前') ||
    (dayDiff < 31 && Math.ceil(dayDiff / 7) + '周前')
  )
}

export const remInit = () => {
  // 基准大小
  const baseSize = 200

  // 设置 rem 函数
  const setRem = () => {
    // 当前页面宽度相对于 750 宽的缩放比例，可根据自己需要修改。
    const scale = document.documentElement.clientWidth / 750

    // 设置页面根节点字体大小
    document.documentElement.style.fontSize =
      baseSize * Math.min(scale, 2) + 'px'
  }
  // 初始化
  setRem()

  // 改变窗口大小时重新设置 rem
  window.onresize = () => {
    setRem()
  }
}

export const isIdCard = code => {
  let city = {
    11: '北京',
    12: '天津',
    13: '河北',
    14: '山西',
    15: '内蒙古',
    21: '辽宁',
    22: '吉林',
    23: '黑龙江 ',
    31: '上海',
    32: '江苏',
    33: '浙江',
    34: '安徽',
    35: '福建',
    36: '江西',
    37: '山东',
    41: '河南',
    42: '湖北 ',
    43: '湖南',
    44: '广东',
    45: '广西',
    46: '海南',
    50: '重庆',
    51: '四川',
    52: '贵州',
    53: '云南',
    54: '西藏 ',
    61: '陕西',
    62: '甘肃',
    63: '青海',
    64: '宁夏',
    65: '新疆',
    71: '台湾',
    81: '香港',
    82: '澳门',
    91: '国外 '
  }
  let tip = ''
  let pass = true
  if (
    !code ||
    !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(
      code
    )
  ) {
    tip = '身份证号格式错误'
    pass = false
  } else if (!city[code.substr(0, 2)]) {
    tip = '地址编码错误'
    pass = false
  } else {
    // 18位身份证需要验证最后一位校验位
    if (code.length === 18) {
      code = code.split('')
      // ∑(ai×Wi)(mod 11)
      // 加权因子
      let factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
      // 校验位
      let parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2]
      let sum = 0
      let ai = 0
      let wi = 0
      for (let i = 0; i < 17; i++) {
        ai = code[i]
        wi = factor[i]
        sum += ai * wi
      }
      let last = parity[sum % 11] + ''
      if (last !== code[17]) {
        tip = '校验位错误'
        pass = false
      }
    }
  }
  // console.log(tip)
  return pass
}

export const getCookie = argName => {
  let cookie = document.cookie.split('; ')
  for (let i = 0; i < cookie.length; i += 1) {
    let name = cookie[i].split('=')
    if (argName === name[0]) {
      return unescape(name[1] || '')
    }
  }
  return ''
}

export const setCookie = (argName, argValue, argTime = 24) => {
  let now = new Date()
  let offset = 8
  let utc = now.getTime() + now.getTimezoneOffset() * 60000
  let nd = utc + 3600000 * offset
  let exp = new Date(nd)
  let domain = document.domain
  exp.setTime(exp.getTime() + argTime * 60 * 60 * 1000)
  document.cookie =
    argName +
    '=' +
    escape(argValue) +
    ';path=/;expires=' +
    exp.toGMTString() +
    ';domain=' +
    domain +
    ';'
}

export const delCookie = argName => {
  setCookie(argName, '', -1)
}

export const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export const randomInt = (min = 0, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  // 含最大值，含最小值
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const isJson = argData => {
  try {
    if (typeof JSON.parse(argData || '') === 'object') {
      return true
    }
  } catch (e) {}
  return false
}
export const getSystemInfo = () => {
  let info = {}
  if (typeof window === 'undefined') {
    if (typeof wx === 'object' && safeData(wx, 'getSystemInfoSync')) {
      info = wx.getSystemInfoSync()
      info.platform = info.platform.toLowerCase()
      info.isIos = info.platform === 'ios'
      info.isAndroid = info.platform === 'android'
      info.iosVersion = info.isIos && info.system.match(/\d./)[0]
      return info
    }
  }
  let ua = navigator.userAgent.toLowerCase()
  let platform = navigator.platform.toLowerCase()
  info = {
    ua: ua,
    platform: platform,
    isMobile: ua.match(/mobile/) && true,
    isWin: platform.match('win') && true,
    isIphone: ua.match(/iphone/) && true,
    isIpad: ua.match(/ipad/) && true,
    isMac: platform.match('mac') && true,
    isIos: platform.match('ios') && true,
    isAndroid: platform.match('android') && true,
    isSafari: ua.indexOf('safari') > -1 && ua.indexOf('chrome') < 1,
    isIE: !!window.ActiveXObject || 'ActiveXObject' in window
  }
  if (info.ua.match('msie')) {
    let IE = info.ua.match(/msie\s([0-9]*)/)
    if (IE.length >= 2) {
      info.isIe = IE[1]
    }
  }
  info.isAppleMobile =
    info.isMobile &&
    ua.toLowerCase().indexOf('applewebkit') &&
    ua.indexOf('chrome') < 1
  info = Object.assign(navigator, info)
  return info
}

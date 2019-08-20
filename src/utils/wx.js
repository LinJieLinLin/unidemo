/* eslint-disable no-constant-condition,no-undef */
import { Loading, Throttle } from './jClass'
import { sleep } from './j'

let app = {}
if (typeof uni !== 'undefined') {
  app = uni
} else if (typeof taro !== 'undefined') {
  app = taro
} else if (typeof wx !== 'undefined') {
  app = wx
}

let L = new Loading(() => {
  app.showLoading({})
}, app.hideLoading)
let throttle = new Throttle()
export const interceptors = {
  request(argData) {
    L.loading(1)
    return argData
  },
  response(argData) {
    L.loading()
    return argData
  }
}

export const setRequest = (argRequest, argResponse) => {
  if (typeof argRequest === 'function') {
    interceptors.request = argData => {
      if (!argData.config || !argData.config.hideLoading) {
        L.loading(1)
      }
      return argRequest(argData)
    }
  }
  if (typeof argResponse === 'function') {
    interceptors.response = argData => {
      L.loading()
      return argResponse(argData)
    }
  }
}

export const request = argOption => {
  argOption = interceptors.request(argOption)
  return new Promise((resolve, reject) => {
    let config = {
      url: argOption.url,
      method: argOption.method || 'GET',
      data: argOption.params,
      success(res) {
        res.noToast = argOption.config && argOption.config.noToast
        res = interceptors.response(res, resolve, reject)
        if (res && res.cb) {
          return res.cb(resolve, reject)
        }
        if (res && res.reject) {
          return reject(res.data || res)
        } else {
          return resolve(res)
        }
      },
      fail(err) {
        interceptors.response(err)
        return reject(err)
      }
    }
    Object.assign(config, argOption.config)
    app.request(config)
  })
}

export const checkUpdate = argType => {
  if (!app.getUpdateManager) {
    return
  }
  if (argType === 'day') {
    // 每天检查一次更新
    let day = +new Date().getDate()
    if (day === app.getStorageSync('day')) {
      return
    }
  }
  app.setStorage({
    key: 'day',
    data: new Date().getDate()
  })
  const updateManager = app.getUpdateManager()
  updateManager.onUpdateReady(function() {
    app.showModal({
      title: '更新提示',
      content: '新版本已经准备好，是否重启应用？',
      success: function(res) {
        if (res.confirm) {
          updateManager.applyUpdate()
        } else if (res.cancel) {
          app.setStorage({
            key: 'day',
            data: -1
          })
        }
      }
    })
  })
}

export const checkSetting = argSet => {
  app.removeStorage({ key: 'authSetting' })
  return new Promise(function(resolve, reject) {
    app.getSetting({
      success(res) {
        app.setStorage({
          key: 'authSetting',
          data: res.authSetting
        })
        if (!res.authSetting['scope.' + argSet]) {
          if (argSet === 'userInfo') {
            return reject(new Error('未授权用户信息'))
          }
          app.authorize({
            scope: 'scope.' + argSet,
            success(rs) {
              return resolve(rs)
            },
            fail(err) {
              return reject(err)
            }
          })
        } else {
          if (argSet === 'userInfo') {
            app.getUserInfo({
              success: res => {
                return resolve(res)
              },
              fail: err => {
                return reject(err)
              }
            })
          } else {
            return resolve(res)
          }
        }
      },
      fail(err) {
        return reject(err)
      }
    })
  })
}

export const getLocation = (argType = 'gcj02', argAltitude = false) => {
  let location = () => {
    return new Promise(function(resolve, reject) {
      app.getLocation({
        altitude: argAltitude,
        type: argType,
        success: res => {
          return resolve(res)
        },
        fail: err => {
          return reject(err)
        }
      })
    })
  }
  let re = async () => {
    try {
      await checkSetting('userLocation')
      let re = await location()
      return re
    } catch (err) {
      if (err.errMsg) {
        app.showToast({
          title: '您已拒绝地理位置授权,可以在设置中重新打开',
          icon: 'none'
        })
      }
      return Promise.reject(err)
    }
  }
  return re()
}

export const scrollTop = (scrollTop = 0, duration = 0) => {
  app.pageScrollTo({
    scrollTop: scrollTop,
    duration: duration
  })
}

export const toast = (argTitle, argOption = { icon: 'none' }) => {
  argOption.duration = argOption.duration || 2500
  return new Promise(function(resolve, reject) {
    Object.assign(argOption, {
      title: argTitle,
      success: () => {
        sleep(argOption.duration).then(res => {
          return resolve()
        })
      },
      fail: err => {
        return reject(err)
      }
    })
    if (argOption.delay) {
      sleep(argOption.delay).then(() => {
        return app.showToast(argOption)
      })
    } else {
      return app.showToast(argOption)
    }
  })
}

export const setTitle = argTitle => {
  app.setNavigationBarTitle({
    title: argTitle
  })
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

export const toPage = (argPage, argParams = {}, argType) => {
  let toPageFn = () => {
    console.log('now page:', argPage, setUrlParams(argParams))
    if (!argPage || argPage === 'back') {
      app.navigateBack({
        delta: argType || 1
      })
      return
    }
    if (argPage === 'index') {
      app.switchTab({
        url: '/pages/' + argPage + '/index' + setUrlParams(argParams)
      })
      return
    }
    switch (argType) {
      case 'switchTab':
        app.switchTab({
          url: '/pages/' + argPage + '/index' + setUrlParams(argParams)
        })
        break

      case 'reload':
        app.reLaunch({
          url: '/pages/' + argPage + '/index' + setUrlParams(argParams)
        })
        break

      case 'redirectTo':
        app.redirectTo({
          url: '/pages/' + argPage + '/index' + setUrlParams(argParams)
        })
        break

      case 'reLaunch':
        app.reLaunch({
          url: '/pages/' + argPage + '/index' + setUrlParams(argParams)
        })
        break

      default:
        app.navigateTo({
          url: '/pages/' + argPage + '/index' + setUrlParams(argParams)
        })
        break
    }
  }
  throttle.throttle(toPageFn)
}

export const getCurrentPage = () => {
  var pages = getCurrentPages()
  return pages[pages.length - 1]
}

export const getCurrentPageUrl = argWithParams => {
  var currentPage = getCurrentPage()
  var url = currentPage.route
  var options = currentPage.options
  if (argWithParams) {
    url += this.urlParams(options)
  }
  return url
}

export const login = argForce => {
  return new Promise(function(resolve, reject) {
    if (argForce || !app.getStorageSync('code')) {
      app.login({
        timeout: 5000,
        success: function(rs) {
          app.setStorage({
            key: 'code',
            data: rs.code
          })
          console.info('login info:', rs)
          return resolve(rs)
        },
        fail: function(err) {
          toast('请检查网络')
          return reject(err)
        }
      })
    } else {
      app.checkSession({
        success() {
          return resolve({ code: app.getStorageSync('code') })
        },
        fail() {
          app.login({
            timeout: 5000,
            success: function(rs) {
              app.setStorage({
                key: 'code',
                data: rs.code
              })
              console.info('login info:', rs)
              return resolve(rs)
            },
            fail: function(err) {
              toast('请检查网络')
              return reject(err)
            }
          })
        }
      })
    }
  })
}

export async function getUserInfo(argData) {
  L.loading(1)
  const setUserInfo = argData => {
    L.loading()
    return argData
  }
  if (argData) {
    if (argData.target) {
      argData.target.code = app.getStorageSync('code')
    }
    return setUserInfo(argData.target)
  } else {
    const _login = await login().catch(err => {
      console.log(err)
      L.loading()
    })
    const _checkSetting = await checkSetting('userInfo').catch(err => {
      console.log('未授权userInfo', err)
      L.loading()
    })

    _checkSetting.code = _login.code
    return setUserInfo(_checkSetting)
  }
}

export function navigateToMiniProgram(argData) {
  return new Promise((resolve, reject) => {
    let data = {
      success: resolve,
      fail: reject
    }
    return app.navigateToMiniProgram(Object(argData, data))
  })
}

export function getSystemInfo() {
  return app.getSystemInfoSync()
}

export const downloadImgs = async (argImgList = [], argIsLocal = false) => {
  let isAuth = true
  let res = null
  if (argImgList && typeof argImgList === 'string') {
    argImgList = [argImgList]
  }
  if (!argImgList.length) {
    console.log('参数有误！')
    return
  }
  L.loading(1)
  await checkSetting('writePhotosAlbum').catch(err => {
    console.error(err)
    isAuth = false
    L.loading()
  })
  // 拒绝授权处理
  if (!isAuth) {
    res = await P('showModal', {
      title: '提示',
      content: '需要您授权保存相册',
      showCancel: false,
      async success() {
        let res = await P('openSetting')
        if (res.authSetting['scope.writePhotosAlbum']) {
          app.showModal({
            title: '提示',
            content: '已获得权限，请重新操作！',
            showCancel: false
          })
          return true
        } else {
          app.showModal({
            title: '提示',
            content: '未获得权限，将无法保存到相册哦~',
            showCancel: false
          })
          return false
        }
      }
    })
  }
  for (const img of argImgList) {
    let tempFilePath = img
    if (!argIsLocal) {
      res = await P('downloadFile', { url: img })
      tempFilePath = res.tempFilePath
    }
    let saveFail = false
    await P('saveImageToPhotosAlbum', {
      filePath: tempFilePath
    }).catch(err => {
      saveFail = true
      console.error(err)
    })
    if (saveFail) {
      L.loading()
      toast('保存到相册失败，请重试！')
      return
    }
  }
  L.loading()
  await toast('下载完成！', { icon: 'success', delay: 320 })
}
/**
 * @function
 * @description 上传图片，返回临时图片路径
 * @param {object} argOptions 选择图片chooseImage配置
 * @param {object} argQuality 压缩质量默认80
 * @param {object} argMb 超过多少M压缩，默认1M(仅支持jpg)
 * @returns {promise} 返回临时图片路径[{tempFilePath:'临时路径',size: '不压缩时返回'}]
 */
export const uploadImgs = async (argOptions, argQuality = 80, argMb = 1) => {
  let err = ''
  let res = await P('chooseImage', {
    count: argOptions.count || 9,
    sizeType: argOptions.sizeType || ['original', 'compressed'],
    sourceType: argOptions.sourceType || ['album', 'camera']
  }).catch(error => {
    // console.error(error)
    err = error
  })
  if (!res) {
    return new Promise((resolve, reject) => {
      reject(err)
    })
  }
  // 按需压缩
  const tempFiles = res.tempFiles
  let compressImage = async argData => {
    if (argData.path.match('jpg') && argData.size > argMb * 1024 * 1024) {
      console.log('未压缩前：', argData)
      return P('compressImage', {
        src: argData.path,
        quality: argQuality
      })
    } else {
      return new Promise(resolve => {
        resolve({ tempFilePath: argData.path, size: argData.size })
      })
    }
  }
  let tempFilePathsFn = tempFiles.map(compressImage)
  let tempFilePaths = []
  tempFilePaths = await Promise.all(tempFilePathsFn).catch(error => {
    // console.error(error)
    err = error
  })
  if (!tempFilePaths) {
    return new Promise((resolve, reject) => {
      reject(err)
    })
  }
  return new Promise(resolve => {
    return resolve(tempFilePaths)
  })
}
export const P = (argApi, argOptions) => {
  return new Promise(function(resolve, reject) {
    if (!argApi && argOptions.success) {
      return argOptions.success(resolve, reject)
    }
    let options = {
      success: resolve,
      fail: reject
    }
    Object.assign(options, argOptions)
    wx[argApi](options)
  })
}

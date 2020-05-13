import { safeData } from './j'

export const getObj = (argKey, argData = {}) => {
  let obj = {
    // 配置
    config: {
      // 本地缓存加密
      localEncrypt: false,
      uniCloud: {
        provider: 'aliyun',
        spaceId: '5bd69b81-b875-4ce7-9b9a-9832134deda8',
        clientSecret: 'Ac3DqITt8A18CHrdWpZ1XQ=='
      }
    },
    dialog: {
      su: {
        show: false,
        maskClose: false,
        hideCancel: true,
        hideHeader: true,
        title: '提示',
        content: '',
        cancelText: '',
        confirmText: '',
        key: 'su'
      },
      err: {
        show: false,
        hideCancel: true,
        title: '错误',
        // maskClose: false,
        content: '',
        cancelText: '',
        confirmText: '',
        key: 'err'
      },
      info: {
        show: false,
        maskClose: false,
        hideHeader: false,
        hideBody: false,
        hideFooter: false,
        hideCancel: false,
        hideConfirm: false,
        clickHide: false,
        confirmNoHide: false,
        title: '提示',
        content: '',
        cancelText: '',
        confirmText: '',
        key: 'info'
      },
      tip: {
        show: false,
        maskClose: false,
        hideHeader: false,
        hideBody: false,
        hideFooter: false,
        hideCancel: true,
        hideConfirm: false,
        clickHide: false,
        confirmNoHide: false,
        title: '提示',
        content: '',
        cancelText: '',
        confirmText: '',
        key: 'tip'
      }
    }
  }
  return Object.assign(safeData(obj, argKey, {}), argData)
}

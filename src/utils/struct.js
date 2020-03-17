import { safeData } from './j'

export const getObj = (argKey, argData = {}) => {
  let obj = {
    // 配置
    config: {
      uniCloud: {
        provider: 'aliyun',
        spaceId: '5bd69b81-b875-4ce7-9b9a-9832134deda8',
        clientSecret: 'Ac3DqITt8A18CHrdWpZ1XQ=='
      }
    },
    dialog: {
      err: {
        show: false,
        hideCancel: true,
        title: '错误',
        // maskClose: false,
        content: '',
        cancelText: '',
        confirmText: '',
        key: 'err'
      }
    }
  }
  return Object.assign(safeData(obj, argKey, {}), argData)
}

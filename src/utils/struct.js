/* eslint-disable no-fallthrough */
import { safeData, getRegexp } from 'lj-utils/j'

let RegexpObj = getRegexp()
export const getObj = (argKey, argData = {}) => {
  let obj = {
    // 配置
    config: {
      // 本地缓存加密
      localEncrypt: false,
      uniCloud: {
        provider: 'aliyun',
        spaceId: '52e7cdfc-4bd0-4b8a-b36d-c11515a194a4',
        clientSecret: 'soCoLndgN0InAVLBEjVo+g==',
      },
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
        type: 'su',
      },
      err: {
        show: false,
        hideCancel: true,
        title: '错误',
        // maskClose: false,
        content: '',
        cancelText: '',
        confirmText: '',
        type: 'err',
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
        type: 'info',
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
        type: 'tip',
      },
    },
    inputObj: {
      // 显示名称
      name: '',
      // 字段名
      key: '',
      // 保存值
      value: '',
      // 显示值
      showValue: '',
      // 表单类型 text,number,digit,idcard,password,phoneCode,,date,selector,multiSelector, textarea
      type: 'text',
      // 要添加的class
      class: '',
      // 正则表达式
      pattern: '',
      // placeholder
      placeholder: '',
      // 是否校验不通过
      isFail: false,
      // 是否必填
      require: false,
      // 是否禁用
      disabled: false,
      isHide: false,
      // 显示在showValue后面的单位
      unit: '',
      // 额外细分类型 imgCode：图片验证码
      extType: '',
      // multiSelector 特有
      // joinText: '',
      // date
      // 开始日期
      // startDate: '',
      // 结束日期
      // endDate: '',
      // 日期类型 year month day
      // fields: 'day',
    },
  }
  if (argKey === 'inputObj') {
    obj.inputObj.placeholder = '请输入' + argData.name
    switch (argData.type) {
      // case 'phoneCode':
      //   break
      // case 'date':
      //   break
      // case 'selector':
      //   break
      // case 'multiSelector':
      //   break
      case 'digit':
        // 保留小数点位数默认2位
        obj.inputObj.fixed = 2
        // 最大长度,不填默认100
        obj.inputObj.maxlength = 100
        // 最小长度
        obj.inputObj.minlength = 0
        // 最大值
        obj.inputObj.max = 100000000
        // 最小值
        obj.inputObj.min = 0
        break
      case 'number':
        // 最大长度，不填默认100
        obj.inputObj.maxlength = 100
        // 最小长度
        obj.inputObj.minlength = 0
        // 最大值
        obj.inputObj.max = 100000000
        // 最小值
        obj.inputObj.min = 0
        break
      case 'idcard':
        // 最大长度，不填默认100
        obj.inputObj.maxlength = 18
        // 最小长度
        obj.inputObj.minlength = 0
        // 最大值
        obj.inputObj.max = 100000000
        // 最小值
        obj.inputObj.min = 0
        obj.inputObj.pattern = RegexpObj.idCard
        break
      case 'password':
        // 最大长度，不填默认100
        obj.inputObj.maxlength = 30
        // 最小长度
        obj.inputObj.minlength = 6
        // 最大值
        obj.inputObj.max = 100000000
        // 最小值
        obj.inputObj.min = 0
        obj.inputObj.hideReset = true
        obj.inputObj.placeholder += ',长度6~30位'
        break
      case 'text':
        // trim为true时，清空所有空格
        // obj.inputObj.trim = false
        // 最大长度，不填默认100
        obj.inputObj.maxlength = 100
        // 最小长度
        obj.inputObj.minlength = 0
        break
      case 'textarea':
        // 最大长度，不填默认100
        obj.inputObj.maxlength = 100
        // 最小长度
        obj.inputObj.minlength = 0
        // 最大值
        obj.inputObj.max = 100000000
        // 最小值
        obj.inputObj.min = 0
        // 设置键盘右下角按钮的文字，仅在 type="text" 时生效。
        // obj.inputObj.confirmType = ''
        break
      default:
        break
    }
  }
  return Object.assign(safeData(obj, argKey, {}), argData)
}

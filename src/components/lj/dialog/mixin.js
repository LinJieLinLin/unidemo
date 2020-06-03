/*
 * @Author: linj
 * @Email: 993353454@qq.com
 * @Date: 2020-05-13 11:26:47
 * @Description:
 */
let mixin = {
  data() {
    return {
      DialogC: {
        key: 'DialogC',
        show: false,
      },
    }
  },
  methods: {
    // 显示dialog
    DialogShow(argData = {}, argOptions = {}) {
      let temKey = argOptions.key || 'DialogC'
      if (this.$f.safeData(this, temKey)) {
        if (this[temKey].show) {
          return
        }
        Object.assign(
          this[temKey],
          this.$f.getObj('dialog.' + (argOptions.type || 'tip'))
        )
        this[temKey].show = true
        this[temKey].content = argData.msg
        this[temKey].confirmFn = ''
        this[temKey].cancelFn = ''
        Object.assign(this[temKey], argOptions)
      } else {
        console.error('缺少参数:dialogKey或数据不存在')
      }
    },
  },
}
export default mixin

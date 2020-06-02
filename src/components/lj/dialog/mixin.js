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
        dialogKey: 'DialogC',
        show: false,
        changeFn: 'DialogChange',
      },
    }
  },
  methods: {
    DialogChange(argData = { key: 'DialogC', show: false }) {
      this[argData.key].show = argData.show || false
    },
    // 显示dialog
    DialogShow(argData = {}, argOptions = {}) {
      console.log(argData, argOptions)
      if (!argOptions.dialogKey) {
        argOptions.dialogKey = 'DialogC'
      }
      if (this.$f.safeData(this, argOptions.dialogKey)) {
        if (this[argOptions.dialogKey].show) {
          return
        }
        Object.assign(
          this[argOptions.dialogKey],
          this.$f.getObj('dialog.' + (argOptions.key || 'tip'))
        )
        this[argOptions.dialogKey].show = true
        this[argOptions.dialogKey].content = argData.msg
        this[argOptions.dialogKey].confirmFn = ''
        this[argOptions.dialogKey].cancelFn = ''
        Object.assign(this[argOptions.dialogKey], argOptions)
        console.log(this[argOptions.dialogKey], argOptions.dialogKey)
      } else {
        console.error('缺少参数:dialogKey或数据不存在')
      }
    },
  },
}
export default mixin

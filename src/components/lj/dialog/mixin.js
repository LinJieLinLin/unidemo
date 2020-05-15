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
        show: false
      }
    }
  },
  methods: {
    DialogChange(argData) {
      this.DialogC.show = argData
    },
    async DialogCancel() {
      if (this.DialogC.cancelFn) {
        this[this.DialogC.cancelFn]()
        this.DialogC.cancelFn = ''
      }
    },
    async DialogConfirm() {
      if (this.DialogC.confirmFn) {
        this[this.DialogC.confirmFn]()
        this.DialogC.confirmFn = ''
      }
    },
    // 显示dialog
    DialogShow(argData, argOptions = {}) {
      if (this.DialogC.show) {
        return
      }
      this.DialogC = this.$f.getObj('dialog.' + (argOptions.key || 'tip'))
      this.DialogC.show = true
      this.DialogC.content = argData.msg
      this.DialogC.confirmFn = ''
      this.DialogC.cancelFn = ''
      Object.assign(this.DialogC, argOptions)
    }
  }
}
export default mixin

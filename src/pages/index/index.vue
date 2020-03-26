<template>
  <div>
    index
    <div @click="$f.toPage('p1/demo')">分包</div>
    <button @click="login">登录</button>
    <popup-dialog :c="dialogC"
      @change="dialogChange"
      @cancel="dialogCancel"
      @confirm="dialogConfirm"></popup-dialog>
  </div>
</template>

<script>
import { login } from '../../utils/wx'
import { wxLogin } from '../../api/common'
import { getObj } from '../../utils/struct'
export default {
  components: {
  },
  props: {},
  onLoad(argData) { },
  onShow() { },
  onReady() { },
  onUnload() { },
  onShareAppMessage(argData) { },
  async onPullDownRefresh() {
    // console.log('下拉')
    uni.stopPullDownRefresh()
  },
  async onReachBottom() {
    // console.log('上拉')
  },
  data() {
    return {
      dialogSu: getObj('dialogSu'),
      dialogC: {
        show: false,
      },
    }
  },
  computed: {},
  methods: {
    dialogChange(argData) {
      this.dialogC.show = argData
    },
    dialogCancel() {
      if (this.dialogC.cancleFn) {
        this[this.dialogC.cancleFn]()
        this.dialogC.cancleFn = ''
      }
    },
    async dialogConfirm() {
      if (this.dialogC.confirmFn) {
        this[this.dialogC.confirmFn]()
        this.dialogC.confirmFn = ''
      }
    },
    async login() {
      this.dialogSu.show = true
      this.dialogSu.content = 'test'
      this.dialogC = this.dialogSu
      // let res = await login()
      // res = await wxLogin(res)
      // console.log(1111)
      // console.log(res)
    }
  }
}
</script>

<style lang="scss"></style>

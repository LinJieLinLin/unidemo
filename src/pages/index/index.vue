<template>
  <div>
    index
    <div @click="$f.toPage('p1/demo')">to分包</div>
    <button @click="login">登录</button>
    <button @click="toWebview">webview</button>
    <button @click="$f.toPage('my')">my</button>
    <lj-dialog :c="dialogC"
      @mixinChange="ComChange"></lj-dialog>
  </div>
</template>

<script>
import { login } from '../../utils/microApi'
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
      dialogSu: getObj('dialog.su'),
      dialogC: {
        show: false,
      },
    }
  },
  computed: {},
  methods: {
    toWebview() {
      this.$f.toPage('webview', { url: 'http://localhost:8001/#/pages/p1/demo/index' })
    },
    dialogChange(argData) {
      console.log(argData)
      this.dialogC.show = argData
    },
    async login() {
      this.dialogSu.show = true
      this.dialogSu.content = 'test'
      this.dialogSu.changeFn = 'dialogChange'
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

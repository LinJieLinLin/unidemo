<template>
  <div>
    index
    <div @click="$f.toPage('p1/demo')">to分包</div>
    <button @click="login">登录</button>
    <button @click="toWebview">webview</button>
    <button @click="$f.toPage('my')">my</button>
    <lj-dialog :c="DialogC"
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
    }
  },
  computed: {},
  methods: {
    toWebview() {
      this.$f.toPage('webview', { url: 'http://localhost:8001/#/pages/p1/demo/index' })
    },
    async login() {
      this.DialogShow({ msg: 'test' })
    }
  }
}
</script>

<style lang="scss"></style>

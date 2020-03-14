<template>
  <div>
    index
    <div @click="$f.toPage('p1/demo')">分包</div>
    <button @click="login">登录</button>
  </div>
</template>

<script>
import { login } from '../../utils/wx'
import { wxLogin } from '../../api/common'
export default {
  components: {},
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
    return {}
  },
  computed: {},
  methods: {
    async login() {
      let res = await login()
      res = await wxLogin(res)
      console.log(1111)
      console.log(res)
    }
  }
}
</script>

<style lang="scss"></style>

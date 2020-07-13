<!--
 * @Author: linj
 * @Email: 993353454@qq.com
 * @Date: 2020-03-30 16:44:05
 * @Description:webview页面
 params{
   url:'页面链接'
 }
-->
<template>
  <web-view :src="src"
    v-if="src"
    @message="message"
    @error="fail"
    @load="success"></web-view>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { getRegexp } from '@/utils/j.js'
let temSrc = ''
export default {
  components: {},
  props: {},
  data() {
    return {
      src: null,
    }
  },
  computed: {},
  onLoad(argOption) {
    // console.log(argOption)
    temSrc = decodeURIComponent(argOption.url) || ''
    this.init()
  },
  onShow() {
    this.$f.init = this.init
  },
  onUnload(argData) {
    console.error(argData)
    this.src = null
  },
  destroyed() { },
  methods: {
    init() {
      if (!temSrc) {
        this.$f.toast('url有误！')
      }
      console.error(temSrc)
      if (!getRegexp().http.test(temSrc)) {
        temSrc = 'https://' + temSrc
      }
      this.src = temSrc
    },
    message(argData) {
      // console.log('get message', argData)
    },
    success() {
      // console.log('su')
    },
    fail(err) {
      this.$f.toast('页面加载失败！')
      console.log('fail', err)
    }
  },
}
</script>

<style lang="scss">
</style>

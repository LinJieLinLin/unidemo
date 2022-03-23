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
  <web-view v-if="viewUrl"
    :src="viewUrl"
    @message="message"
    @error="fail"
    @load="success"></web-view>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { getRegexp } from 'lj-utils'
export default {
  components: {},
  props: {},
  data() {
    return {
    }
  },
  computed: {
    viewUrl() {
      var url = ''
      if (!this.Params.url) {
        // this.$f.toast('url有误')
        return ''
      }
      if (!getRegexp().http.test(this.Params.url)) {
        url = 'https://' + this.Params.url
      }
      return url || this.Params.url
    }
  },
  onLoad(argOption) {
  },
  onShow() {
    this.$f.init = this.init
  },
  onUnload(argData) {
    this.src = null
  },
  destroyed() { },
  methods: {
    init() {
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

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
    temSrc = argOption.url || ''
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
  onShareAppMessage(argData) {
    if (argData.from === 'button') {
      // 来自页面内转发按钮
      // console.log(argData.target)
    }
    if (argData.from === 'menu') {
      // 来自右上角转发按钮
      // console.log(argData.target)
    }
    let params = this.$f.getCurrentPage().options
    return {
      title: '南山文体通，提升公共文体惠民服务，打造文体惠民活动盛宴',
      imageUrl: 'https://sznswtt.gdtengnan.com/uploads/program/custom/share.png',
      path: 'pages/index/main?isShare=1'
    }
  },
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

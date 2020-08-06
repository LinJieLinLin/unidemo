<!--
 * @Author: linj
 * @Email: 993353454@qq.com
 * @Date: 2020-07-15 10:32:28
 * @Description: 智能客服
-->
<template>
  <div>
    <!-- 引入微信小程序原生组件 -->
    <!-- #ifdef MP-WEIXIN -->
    <!-- <custom></custom> -->
    <view style="height: 100vh">
      <chat-flow id="chatflow"></chat-flow>
    </view>
    <!-- #endif -->
  </div>
</template>

<script>
export default {
  props: {},
  components: {},
  onLoad(argData) {
    console.error(this.$refs, this.$refs.test)
  },
  onShow() { },
  onReady() {
    // #ifdef MP-WEIXIN
    var chatFlow = requirePlugin('customer-service')
    // 开启日志
    chatFlow.setDebugEnable(false)
    // 0-正式环境；1-体验环境 2-测试环境
    chatFlow.setEnvironment(1)
    // TODO
    chatFlow.init({
      appKey: '50d451a022a911e99de5fd23e7a63e9f',
      accessToken: '272460e14fd2493893c34d4f9a46bed9',
      serialNum: 'test'
    })
    // #endif
  },
  onUnload() { },
  onShareAppMessage(argData) { },
  async onPullDownRefresh() {
    // console.log('下拉')
    uni.stopPullDownRefresh()
  },
  async onReachBottom() {
    // console.log('上拉')
  },
  computed: {},
  data() {
    return {
    }
  },
  methods: {
    tvsFail(res) {
      console.error(res)
    },
    tvsSuccess(res) {
      console.log(res)
    },
    tvsComplete(res) {
      console.log('tvsComplete')
      // this.TvsManager.appendText('识别失败哦')
      this.TvsManager.stop()
      if (res.errMsg) {
        this.$f.toast(res.errmsg)
      }
      console.log(res)
    },
    sendMsg(event) {
      // this.chatflow.addTextMessage({
      //   messageId: event.detail.reqId,
      //   needPortrait: true, // 是否显示头像
      //   mySelf: true, // 是否用户发送的消息
      //   content: event.detail.text
      // })
      console.log(event)
    },
    replyMsg(event) {
      // let data = event.detail.directives
      // data.map(v => {
      //   if (v.header.name === 'SpeakText') {
      //     this.chatflow.addTextMessage({
      //       messageId: v.header.messageId,
      //       needPortrait: true, // 是否显示头像
      //       mySelf: false, // 是否用户发送的消息
      //       content: v.payload.text
      //     })
      //   }
      // })
      console.log(event)
    },
    onPictureSelect(event) {
      console.log('_onPictureSelect', event)
    },
    // 点击选择文件菜单
    onFileSelect(event) {
      console.log('_onFileSelect', event)
    }
  }
}
</script>

<style lang="scss"></style>

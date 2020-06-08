<template>
  <div class="index">
    <view class="uni-margin-wrap">
      <swiper class="swiper"
        circular
        indicator-dots
        :autoplay="autoplay"
        :interval="interval"
        :duration="duration">
        <swiper-item>
          <image class="image"
            mode="aspectFill"
            src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png" />
        </swiper-item>
        <swiper-item>
          <image class="image"
            mode="aspectFill"
            src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png" />
        </swiper-item>
        <swiper-item>
          <image class="image"
            mode="aspectFill"
            src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png" />
        </swiper-item>
      </swiper>
    </view>
    <view class="example-body">
      <uni-notice-bar :scrollable="true"
        :single="true"
        text="我的ui组件库!" />
    </view>
    <!-- <div @click="$f.toPage('p1/demo')">to分包</div> -->
    <view class="pd-lr20">
      <button @click="login">登录</button>
      <button @click="toWebview">打开webview</button>
      <button @click="$f.toPage('my','','switchTab')">我的</button>
    </view>
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
      autoplay: true,
      interval: 2000,
      duration: 1000
    }
  },
  computed: {},
  methods: {
    toWebview() {
      this.$f.toPage('webview', { url: ('https://mp.weixin.qq.com/s/pBT383HTpQ-DDrlWL0h_kA') })
    },
    async login() {
      this.DialogShow({ msg: 'test' })
    }
  }
}
</script>

<style lang="scss">
.index {
  .image {
    width: 100%;
    height: 150px;
  }
}
</style>

<template>
  <div class="index bg-w-full">
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
      <!-- #ifdef MP-WEIXIN -->
      <button @click="$f.toPage('testPackage/customer')">腾讯云小微</button>
      <!-- #endif -->
      <button @click="$f.toPage('my','','switchTab')">我的</button>
      <label>
        <checkbox value="cb"
          color=""
          checked="true" />选中
      </label>
    </view>
    <lj-dialog :c="DialogC"
      @mixinChange="ComChange"></lj-dialog>
  </div>
</template>

<script>
import { login, setStorage } from '../../utils/microApi'
import { wxLogin } from '../../api/common'
import { getObj } from '../../utils/struct'
import { getStorageSync } from '../../store'
import { loadFile, sleep } from '../../utils/j'
export default {
  components: {
  },
  props: {},
  onShow() { },
  onReady() {
  },
  onUnload() { },
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
    // #ifdef MP-WEIXIN
    jumpPlugin(argUrl) {
      wx.navigateTo({
        url: argUrl
      })
    },
    // #endif
    async login() {
      this.DialogShow({ msg: 'test' })
    },
    async init() {
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

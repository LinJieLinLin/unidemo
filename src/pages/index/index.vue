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
            src="https://img.lj4.top/test/1.jpg" />
        </swiper-item>
        <swiper-item>
          <image class="image"
            mode="aspectFill"
            src="https://img.lj4.top/test/2.jpg" />
        </swiper-item>
        <swiper-item>
          <image class="image"
            mode="aspectFill"
            src="https://img.lj4.top/test/3.jpg" />
        </swiper-item>
      </swiper>
    </view>
    <!-- <view class="example-body">
      <uni-notice-bar :scrollable="true"
        :single="true"
        text="我的ui组件库!" />
    </view> -->
    <!-- <div @click="$f.toPage('p1/demo')">to分包</div> -->
    <view class="pd-lr20">
      <button class="mg-t20"
        @click="hiTip">
        欢迎使用
      </button>
      <button class="mg-t20"
        @click="toWebview">
        打开webview！
      </button>
      <button class="mg-t20"
        @click="toCase">
        项目列表
      </button>
      <button class="mg-t20"
        @click="$f.toPage('my','','switchTab')">
        我的
      </button>
      <button class="mg-t20"
        @click="upload()">
        上传
      </button>
    </view>
    <lj-dialog :c="DialogC"
      @mixinChange="ComChange"></lj-dialog>
  </div>
</template>

<script>
import { P } from 'lj-utils/microApi'
import { uploadImg } from '@/utils/project'
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
      this.$f.toPage('webview', { url: ('http://unidemo.lj4.top/lj-utils/0.1.5/index.html') })
    },
    toCase() {
      this.$f.toPage('case/case')
    },
    // #ifdef MP-WEIXIN
    jumpPlugin(argUrl) {
      wx.navigateTo({
        url: argUrl
      })
    },
    // #endif
    async hiTip() {
      this.DialogShow({ msg: '这里是linjielinlin的组件库！' })
    },
    async upload() {
      let err
      let res = await P('chooseImage', {
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
      }).catch((error) => {
        err = error
      })
      let data = {
        // file: res.tempFiles[0]
        params: {
          url: 'http://kaide.gdtengnan.com/api/upload/uploadImage',
          filePath: res.tempFilePaths[0],
          file: res.tempFiles[0]
        },
        config: {}
      }
      console.error('chooseImage', res)
      res = await uploadImg(data).catch(err => {
        console.error(err)
      })
      if (!res) {
        return false
      }
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

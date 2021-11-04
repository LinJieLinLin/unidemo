/* eslint-disable */
<!-- #ifdef H5 -->
<!--
<template>
  <view>
    <transition :name="$pageAni">
      <router-view />
    </transition>
  </view>
</template>
-->
<!-- #endif -->
<script>
import { login, setStorage } from 'lj-utils/microApi'
import { mapActions } from 'vuex'
import { checkToken } from './api/common'
export default {
  // 全局数据 eg:getApp().globalData.text
  globalData: {
    text: 'text'
  },
  onError(err) {
    console.log('捕捉错误：', err)
    this.$f.log(err)
  },
  async onLaunch(argData) {
    console.warn('version:', APP_VERSION || this.$store.state.Version)
    console.info('env:', process.env)
    console.log('params:', argData)
    let res
    // #ifdef  MP-WEIXIN
    // try {
    //   wx.cloud.init({
    //     traceUser: true
    //   })
    // } catch (err) {
    //   console.error(err)
    // }
    this.$store.commit('SetScene', argData.scene)
    // #endif
    // 记录首次加载打开参数
    setStorage('openPage', argData.path)
    setStorage('openQuery', argData.query)
    if (!this.$f.getStorageSync('tk')) {
      // #ifdef MP
      res = await login(1)
      let data = {
        code: res.code
      }
      res = await this.MpLogin(data)
      // #endif
    } else {
      res = await checkToken().catch(err => {
        console.error(err)
      })
    }
    console.log('登录信息', res)
    // #ifdef H5
    if (
      process.env.NODE_ENV === 'development' ||
      window.location.port === '8001'
    ) {
      var VConsole = require('vconsole')
      // eslint-disable-next-line no-undef
      var vConsole = new VConsole()
      console.log('vconsole开启')
    }
    // #endif
  },
  // 只有app.vue的onshow有参数
  onShow(argData) {
    console.log('App Show params:', argData)
  },
  onHide() {
    console.log('App Hide')
  },
  methods: {
    // #ifdef  MP
    ...mapActions(['MpLogin'])
    // #endif
  },
}
</script>

<style lang="scss">
@import './scss/base';
// iconf
page,
body {
  .i {
    font-size: inherit;
  }
  /* #ifdef APP-PLUS */
  .uni-list {
    .uni-list-item__container {
      border-top-width: 0;
    }
  }
  /* #endif */
}
// icon处理 大于10K图标放static/icon下或在css中引入
.i-del {
  @include iIcon(i-del, 20);
}
.i-add {
  @include iIcon(i-add, 30);
}
</style>

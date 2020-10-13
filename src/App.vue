/* eslint-disable */
<script>
import { setStorage } from './utils/microApi'
export default {
  // 全局数据 eg:getApp().globalData.text
  globalData: {
    text: 'text'
  },
  onError(err) {
    console.log('捕捉错误：', err)
    this.$f.log(err)
  },
  onLaunch(argData) {
    console.warn('version:', this.$store.state.Version)
    console.info('env:', process.env)
    console.log('params:', argData)
    // #ifdef  MP-WEIXIN
    try {
      wx.cloud.init({
        traceUser: true
      })
    } catch (err) {
      console.error(err)
    }
    // #endif
    // 记录首次加载打开参数
    setStorage('openPage', argData.path)
    setStorage('openQuery', argData.query)
    // #ifdef H5
    if (
      process.env.NODE_ENV === 'development' ||
      window.location.host.match('gzgjjtest.gdtengnan.com') ||
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
  }
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

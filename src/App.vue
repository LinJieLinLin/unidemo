/* eslint-disable */
<script>
import { setStorage } from './utils/microApi'
export default {
  onError(err) {
    console.log('捕捉错误：', err)
    this.$f.log(err)
  },
  onLaunch(argData) {
    console.log('onLaunch', process.env)
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
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  }
}
</script>

<style lang="scss">
@import './scss/settings';
@import './scss/base';
// icon处理
.i-del {
  @include iIcon(i-del, 20);
}
.i-add {
  @include iIcon(i-add, 30);
}
</style>

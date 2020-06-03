<script>
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
    // 记录首次打开参数
    uni.setStorage({
      key: 'openPage',
      data: argData.path
    })
    uni.setStorage({
      key: 'openQuery',
      data: JSON.stringify(argData.query || {})
    })
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

<script>
export default {
  onError (err) {
    console.log('捕捉错误：', err)
    this.$f.log(err)
  },
  onLaunch (argData) {
    console.log('App Launch')
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
</style>

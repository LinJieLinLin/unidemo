<script>
export default {
  onError(err) {
    console.log('捕捉错误：', err)
    this.$f.log(err)
  },
  onLaunch(argData) {
    console.log('App Launch')
    try {
      wx.cloud.init({
        traceUser: true
      })
    } catch (err) {
      console.error(err)
    }
    // 记录首次打开参数
    wx.setStorage({
      key: 'openPage',
      data: argData.path
    })
    wx.setStorage({
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
@import "./scss/settings";
@import "./scss/base";
</style>

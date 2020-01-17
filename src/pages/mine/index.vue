<template>
  <div>
    index
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  onLoad (argData) {},
  onShow () {},
  onReady () {},
  onUnload () {},
  onShareAppMessage (argData) {},
  async onPullDownRefresh () {
    // console.log('下拉')
    wx.stopPullDownRefresh()
  },
  async onReachBottom () {
    // console.log('上拉')
  },
  data () {
    return {}
  },
  computed: {},
  methods: {}
}
</script>

<style lang="scss"></style>

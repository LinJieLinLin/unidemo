<template>
  <div>
    index
    <div @click="$f.toPage('p1/demo')">分包</div>
  </div>
</template>

<script>
export default {
  props: {},
  components: {},
  onLoad(argData) {},
  onShow() {},
  onReady() {},
  onUnload() {},
  onShareAppMessage(argData) {},
  async onPullDownRefresh() {
    // console.log('下拉')
    uni.stopPullDownRefresh()
  },
  async onReachBottom() {
    // console.log('上拉')
  },
  computed: {},
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss"></style>

<template>
  <div>
    index
    <div @click="$f.toPage('p1/demo')">分包</div>
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
    uni.stopPullDownRefresh()
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

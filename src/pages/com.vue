<template>
  <div>
    <lj-dialog :c="DialogC"
      @mixinChange="ComChange"></lj-dialog>
    <div>fuck</div>
    <div>123</div>
    <div>{{ DialogC }}</div>
    <button class="mg-t20"
      @click="login">
      登录
    </button>
  </div>
</template>

<script>
export default {
  props: {

  },
  components: {

  },
  onLoad(argData) {

  },
  onShow() {

  },
  onReady() {

  },
  onUnload() {

  },
  async onPullDownRefresh() {
    // console.log('下拉')
    uni.stopPullDownRefresh()
  },
  async onReachBottom() {
    // console.log('上拉')
  },
  computed: {

  },
  data() {
    return {

    }
  },
  methods: {
    async login() {
      console.error(123)
      this.DialogShow({ msg: 'test' })
      console.error(this)
    },
  },
}
</script>

<style lang="scss">
</style>

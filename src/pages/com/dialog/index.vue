<!--
 * @Author: linj
 * @Email: 993353454@qq.com
 * @Date: 2020-05-13 10:00:18
 * @Description:
 -->
<template>
  <div>
    <div class="pd-lr20">
      <button class="mg-t10"
        @click="dialogShow()">
        提示
      </button>
      <button class="mg-t10"
        @click="dialogShow('info')">
        信息
      </button>
    </div>
    <lj-dialog :c="DialogC"
      @change="DialogChange"
      @cancel="DialogCancel"
      @confirm="DialogConfirm"></lj-dialog>
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
  onShareAppMessage(argData) {

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
    dialogShow(argType) {
      this.DialogShow({ msg: '信息提示' }, { key: argType })
    }
  },
}
</script>

<style lang="scss">
</style>

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
      <button class="mg-t10"
        @click="dialogShow('info',1)">
        富文本
      </button>
      <button class="mg-t10"
        @click="dialogShowCc('info',1)">
        插槽
      </button>
    </div>
    <lj-dialog :c="DialogC"
      @change="DialogChange"
      @cancel="DialogCancel"
      @confirm="DialogConfirm">
    </lj-dialog>
    <lj-dialog :c="dialogC"
      @change="dialogChange"
      @cancel="DialogCancel"
      @confirm="DialogConfirm">
      <template v-slot:header>
        <h1>Here might be a page header</h1>
      </template>
      <template v-slot:body>
        <h1>Here might be a page body</h1>
      </template>
      <template v-slot:footer>
        <h1>Here might be a page footer</h1>
      </template>
    </lj-dialog>
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
      dialogC: {
        show: false
      }
    }
  },
  methods: {
    dialogShow(argType, argMsgType) {
      switch (argMsgType) {
        case 1:
          this.DialogShow({ msg: `<div>我是<span style="color:red">富文本</span></div>` }, { key: argType })
          break
        default:
          this.DialogShow({ msg: '信息提示' }, { key: argType })
          break
      }
    },
    dialogShowCc(argType, argMsgType) {
      this.dialogC = this.$f.getObj('dialog.info')
      this.dialogC.show = true
    },
    dialogChange(argData) {
      this.dialogC.show = argData
    }
  },
}
</script>

<style lang="scss">
</style>

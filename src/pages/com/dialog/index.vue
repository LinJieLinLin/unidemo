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
        富文本,带回调
      </button>
      <button class="mg-t10"
        @click="dialogShowCc('info',1)">
        插槽
      </button>
      <button class="mg-t10"
        @click="byStore">
        通过store打开
      </button>
    </div>
    <lj-dialog :c="DialogC"
      @mixinChange="ComChange">
    </lj-dialog>
    <lj-dialog :c="dialogC"
      @mixinChange="ComChange">
      <template v-slot:header>
        <h1>Here might be a page header</h1>
      </template>
      <template v-slot:body>
        <h1>Here might be a page body</h1>
      </template>
      <template v-slot:footer>
        <h1 @click="dialogChange()">Here might be a page footer</h1>
      </template>
    </lj-dialog>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
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
        show: false,
        changeFn: 'dialogChange',
      }
    }
  },
  methods: {
    ...mapMutations(['OpenDialog']),
    dialogShow(argType, argMsgType) {
      switch (argMsgType) {
        case 1:
          let msg = '<div>我是<span style="color:red">富文本</span></div>'
          for (let i = 0; i < 5; i++) {
            msg += msg
          }
          this.DialogShow({ msg: msg }, {
            key: argType,
            confirmFn: 'dialogSu',
            cancelFn: 'dialogErr',
            confirmNoHide: true
          })
          break
        default:
          this.DialogShow({ msg: '信息提示' }, { key: argType })
          break
      }
    },
    async dialogSu() {
      this.$f.toast('点了确定3S后关闭')
      await this.$f.sleep(3000)
      this.DialogChange()
    },
    dialogErr() {
      this.$f.toast('点了取消')
    },
    dialogShowCc(argType, argMsgType) {
      Object.assign(this.dialogC, this.$f.getObj('dialog.info'))
      this.dialogC.show = true
    },
    dialogChange(argData = false) {
      this.dialogC.show = argData
    },
    byStore() {
      this.OpenDialog({
        data: { msg: '信息提示' },
        options: { key: 'info' }
      })
    }
  },
}
</script>

<style lang="scss">
</style>

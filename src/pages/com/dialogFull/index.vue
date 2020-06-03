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
        @click="selectShow">
        打开弹窗
      </button>
    </div>
    <lj-dialog-full :c="dialogC"
      @mixinChange="ComChange">
      <template v-slot:body>
        <lj-drag-list :ref="dragListC.id"
          :list="list"
          :c="dragListC"
          @change="onDragSortChange"></lj-drag-list>
      </template>
    </lj-dialog-full>
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
    this.init()
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
      list: [
        {
          name: 'a'
        },
        {
          name: 'b'
        },
        {
          name: 'c'
        },
        {
          name: 'd'
        },
        {
          name: 'e'
        },
        {
          name: 'f'
        },
        {
          name: 'g'
        },
        {
          name: 'h'
        },
        {
          name: 'i'
        },
        {
          name: 'j'
        }, {
          name: 'k'
        },
        {
          name: 'l'
        },
        {
          name: 'm'
        },
        {
          name: 'n'
        },
        {
          name: 'o'
        }, {
          name: 'p'
        },
        {
          name: 'q'
        },
        {
          name: 'r'
        },
        {
          name: 's'
        },
        {
          name: 't'
        }
      ],
      dragListC: {
        id: 'dragList0',
        listKey: 'name'
      },
      dialogC: {
        key: 'dialogC',
        show: false,
        cancelFn: 'selectSu',
        confirmFn: 'selectSu'
      }
    }
  },
  methods: {
    onDragSortChange(argData) {
      console.log(argData)
      this.temList = argData.data
    },
    async selectShow() {
      this.dialogC.show = true
      await this.$f.sleep(50)
      this.$refs[this.dragListC.id].init()
    },
    selectSu(argData) {
      console.log(argData)
    },
    init() {

    }
  },
}
</script>

<style lang="scss">
.item {
  width: 103px;
}
</style>

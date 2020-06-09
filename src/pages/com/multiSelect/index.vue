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
        打开多选
      </button>
      <uni-section title="已选择"
        type="line"></uni-section>
      <div class="flex-row-between flex-wrap">
        <lj-item-key @click.native="keysClick(item)"
          class="mg-t10"
          is-select
          :item="item"
          v-for="(item, index) in list"
          :key="index"></lj-item-key>
        <div class="item"></div>
      </div>
    </div>
    <lj-multi-select :list="list"
      :c="selectC"
      @mixinChange="ComChange">
    </lj-multi-select>
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
        { name: '地中海', isSelect: false },
        { name: '死海', isSelect: false },
        { name: '天崖', isSelect: false },
        { name: '我是一个很长的', isSelect: false }
      ],
      selectC: {
        key: 'selectC',
        listName: 'list',
        show: false,
        cancelFn: null,
        confirmFn: 'selectSu'
      }
    }
  },
  methods: {
    selectShow() {
      this.selectC.show = true
    },
    keysClick(argData) {
      console.log(argData)
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

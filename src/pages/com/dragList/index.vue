<!--
 * @Author: linj
 * @Email: 993353454@qq.com
 * @Date: 2020-05-18 14:43:59
 * @Description:
-->
<template>
  <div class="drag page flex-column">
    <div class="flex1 of-a">
      <lj-drag-list :list="list"
        :c="dragListC"
        @change="onDragSortChange"></lj-drag-list>
    </div>
    <div class="flex0 flex-row-around bg-w">
      <button class="flex1">取消</button>
      <button class="flex1"
        @click="submit()">
        确定
      </button>
    </div>
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
      dragListC: {
        id: 'dragList0',
        listKey: 'name'
      },
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
      temList: [],
    }
  },
  methods: {
    onDragSortChange(argData) {
      this.temList = argData
    },
    submit() {
      let temArr = []
      this.temList.map((v, k) => {
        temArr[v.index] = v
      })
      console.log('更新后数据为：', temArr)
    },
    async init() {
      console.log('init')
    }
  },
}
</script>

<style lang="scss">
</style>

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
      console.log(argData)
      this.temList = argData.data
      console.log('fuck')
      console.error(this.temList)
    },
    dragChange(argData) {

    },
    submit() {
      console.log(this.temList)
      let temList = this.temList.map(v => {
        return {
          ...v
        }
      })
      console.log(temList.sort((a, b) => a.index - b.index))
    },
    async init() {
      console.log('init')
    }
  },
}
</script>

<style lang="scss">
.drag {
  /deep/.drag-item {
    width: 103px;
    height: 103px;
    margin-bottom: 10px;
    .img-item {
      width: 103px;
      height: 103px;
      image {
        border-radius: 4px;
        width: 103px;
        height: 103px;
      }
    }
  }
}
</style>

<!--
 * @Author: linj
 * @Email: 993353454@qq.com
 * @Date: 2020-07-29 17:14:29
 * @Description:
-->
<template>
  <div class="svg-icon">
    <view class="flex pd-t20">
      <div class="item flex-column flex-y-center"
        :style="{color: item.color}"
        v-for="(item,index) in list"
        :key="index">
        <lj-icon class="fs-20"
          :i="item.icon"></lj-icon>
        <text>{{ item.name }}</text>
      </div>
    </view>
  </div>
</template>

<script>
import { getRandomColor } from '../../../utils/j'
export default {
  props: {

  },
  components: {

  },
  onLoad(argData) {
    this.init()
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
      imgs: {
        noData: require('@assets/img/no-data.png')
      },
      list: [{
        icon: 'i-car',
        name: 'car'
      }, {
        icon: 'i-home',
        name: 'home'
      }, {
        icon: 'i-search',
        name: 'search'
      }, {
        icon: 'i-add',
        name: 'add'
      }, {
        icon: 'i-all',
        name: 'all'
      }, {
        icon: 'i-del',
        name: 'del'
      }]
    }
  },
  methods: {
    init() {
      this.list.map(v => {
        v.color = getRandomColor()
      })
    }
  },
}
</script>

<style lang="scss">
.svg-icon {
  .item {
    width: 50px;
    height: 50px;
  }
}
</style>

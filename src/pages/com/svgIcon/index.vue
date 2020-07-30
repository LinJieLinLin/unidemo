<!--
 * @Author: linj
 * @Email: 993353454@qq.com
 * @Date: 2020-07-29 17:14:29
 * @Description:
-->
<template>
  <div class="svg-icon"
    :style="{backgroundImage:'url('+imgs.noData+')'}">
    <view class="flex">
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
var getRandomColor = function () {
  return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).substr(-6)
}
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
        name: '拼车'
      }, {
        icon: 'i-account',
        name: '拼车'
      }, {
        icon: 'i-del',
        name: '拼车'
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

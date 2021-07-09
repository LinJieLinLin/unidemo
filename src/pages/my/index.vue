<template>
  <div>
    <lj-user-info class="flex-center"
      @click="getUserInfo">
      <top :c="UserInfo"></top>
    </lj-user-info>
    <view class="m-list mg-lr10 of-h">
      <div v-for="(item,index) in lists"
        :key="index">
        <lj-item-list :item="item"
          :c="listC"
          @click="itemClick(item)"></lj-item-list>
      </div>
    </view>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import top from './c/top'
// import { uniList, uniListItem } from '@dcloudio/uni-ui'
export default {
  props: {

  },
  components: {
    top,
    // uniList,
    // uniListItem
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
    ...mapState(['UserInfo'])
  },
  data() {
    return {
      listC: {

      },
      lists: [{
        name: '系统设置',
        url: 'myPkg/setting'
      },
      ]
    }
  },
  methods: {
    getUserInfo(argData) {
      if (argData && this.UserInfo.nickName) {
        this.$f.toast('信息更新成功！')
      }
    },
    switchChange(argData) {
      console.log(argData)
    },
    async scanCode() {
      let res = await this.$f.P('scanCode').catch(err => {
        console.log(err)
      })
      this.qrcodeInfo = JSON.stringify(res)
    },
    itemClick(argItem) {
      this.$f.toPage(argItem.url)
    },
    init() {

    },
  },
}
</script>

<style lang="scss">
.m-list {
  border-radius: 8px;
}
</style>

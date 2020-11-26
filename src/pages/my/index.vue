<template>
  <div>
    <top :c="UserInfo"></top>
    <view class="m-list mg-lr10 of-h">
      <!-- #ifdef MP-WEIXIN -->
      <uni-section title="小程序特有"
        type="line"></uni-section>
      <!-- <uni-list>
        <uni-list-item :show-extra-icon="true"
          :extra-icon="extraIcon1">
          <button class="btn-none"
            open-type="contact">
            客服会话
          </button>
        </uni-list-item>
        <uni-list-item :show-extra-icon="true"
          :extra-icon="extraIcon1">
          <button class="btn-none"
            open-type="openSetting">
            授权设置
          </button>
        </uni-list-item>
      </uni-list> -->
      <!-- #endif -->
      <!-- <uni-list>
        <uni-list-item @click="scanCode"
          :show-extra-icon="true"
          :extra-icon="extraIcon1"
          title="扫码">
        </uni-list-item>
        <uni-list-item :show-arrow="false"
          title="列表文字"
          note="列表描述信息" />
        <uni-list-item :disabled="true"
          :show-arrow="false"
          title="列表禁用状态" />
      </uni-list> -->
      <!-- <uni-list>
        <uni-list-item title="列表右侧带箭头"
          right-text="右侧文字" />
        <uni-list-item :show-badge="true"
          title="列表右侧带箭头 + 角标"
          badge-text="12" />
        <uni-list-item title="列表左侧带略缩图"
          thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png" />
        <uni-list-item :show-extra-icon="true"
          :extra-icon="extraIcon1"
          title="列表左侧带扩展图标" />
        <uni-list-item :show-extra-icon="true"
          :extra-icon="extraIcon1"
          :show-switch="true"
          title="列表右侧带 switch"
          @switchChange="switchChange" />
        <uni-list-item :disabled="true"
          :show-extra-icon="true"
          :extra-icon="extraIcon2"
          :show-switch="true"
          :switch-checked="true"
          title="禁用状态"
          @switchChange="switchChange" />
      </uni-list> -->
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
      qrcodeInfo: '未有值',
      extraIcon1: {
        color: '#007aff',
        size: '22',
        type: 'gear-filled'
      },
      extraIcon2: {
        color: '#4cd964',
        size: '22',
        type: 'image'
      }
    }
  },
  methods: {
    switchChange(argData) {
      console.log(argData)
    },
    async scanCode() {
      let res = await this.$f.P('scanCode').catch(err => {
        console.log(err)
      })
      this.qrcodeInfo = JSON.stringify(res)
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

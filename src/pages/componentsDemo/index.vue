<template>
  <view class="uni-container">
    <!-- #ifdef H5||APP-PLUS -->
    <view class="mg-t50"></view>
    <!-- #endif -->
    <view class="uni-hello-text">
      <uni-list>
        <uni-list-item v-for="(item,index) in lists"
          :key="index"
          :title="item.name"
          @click.native="toComponents(item)" />
        <uni-list-item :disabled="true"
          :show-arrow="false"
          title="列表禁用状态" />
      </uni-list>
    </view>
  </view>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  created: function () { console.log(1) },
  components: {
  },
  data() {
    return {
      navigateFlag: false,
      lists: [{
        name: '弹窗',
        url: 'com/dialog'
      },
      {
        name: 'drag 图片拖拽',
        url: 'com/dragImg'
      },
      {
        name: '全屏弹窗',
        url: 'com/dialogFull'
      },
      {
        name: 'drag 竖向列表拖拽',
        url: 'com/dragList'
      },
      {
        name: 'editor',
        url: 'com/editor'
      },
      {
        name: 'multi-select',
        url: 'com/multiSelect'
      },
      {
        name: 'svg-icon',
        url: 'com/svgIcon'
      },
      {
        name: 'form',
        url: 'com/form'
      },
      {
        name: 'transition',
        url: 'com/transition'
      },
      ]
    }
  },
  computed: {
    ...mapState(['BaseUrl'])
  },
  onShow() {
    // 检测是否要重载
    this.CheckReload()
  },
  onLoad(argData) {
  },
  onReady() { },
  onNavigationBarButtonTap(e) {
    uni.navigateTo({
      url: '/pages/about/about'
    })
  },
  methods: {
    toComponents(argData) {
      this.$f.toPage(argData.url)
    },
    init() {
      console.log('当前页面init')
    }
  }
}
</script>

<style>
</style>
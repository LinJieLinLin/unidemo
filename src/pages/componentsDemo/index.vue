<template>
  <view>
    <view class="mg-t10">
      <div v-for="(item,index) in lists"
        :key="index">
        <lj-item-list :item="item"
          :c="listC"
          @click="toComponents(item)"></lj-item-list>
      </div>
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
      listC: {
      },
      swiperC: {
        autoplay: true,
        interval: 3000,
        duration: 3000
      },
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
      // #ifndef MP-TOUTIAO
      {
        name: 'drag 竖向列表拖拽',
        url: 'com/dragList'
      },
      // #endif
      // #ifdef APP-PLUS||H5||MP-WEIXIN
      {
        name: 'editor',
        url: 'com/editor'
      },
      // #endif
      {
        name: 'multi-select',
        url: 'com/multiSelect'
      },
      {
        name: 'svg-icon',
        url: 'com/svgIcon'
      },
      // #ifndef MP
      {
        name: 'poster',
        url: 'com/poster'
      },
      {
        name: 'copy&qrcode&countdown',
        url: 'com/copyQrcode'
      },
      {
        name: 'scrollX directive for PC',
        url: 'com/scrollX'
      },
      // #endif
      // #ifdef MP
      {
        name: 'posterCanvas',
        url: 'com/posterWx'
      },
      // #endif
      {
        name: '实验室',
        url: '',
        hideArrow: true,
        disabled: true
      },

      {
        name: 'indexed',
        url: 'com/indexed'
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
      if (argData.disabled) {
        return
      }
      this.$f.toPage(argData.url)
    },
    init() {
      console.log('当前页面init')
    }
  }
}
</script>

<style lang="scss">
.swiper {
  height: 200px;
  image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
}
</style>
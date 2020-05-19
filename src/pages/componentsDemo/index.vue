<template>
  <view class="uni-container">
    <view class="uni-hello-text">
      <uni-list>
        <uni-list-item v-for="item in lists"
          :key="item.url"
          :title="item.name"
          @click="toComponents(item)" />
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
        name: 'drag 拖拽',
        url: 'com/drag'
      },
      {
        name: '---以下未做---',
        url: 'test'
      },
      {
        name: 'Card 卡片',
        url: 'card'
      },
      {
        name: 'Collapse 折叠面板',
        url: 'collapse'
      },
      {
        name: 'Combox 组合框',
        url: 'combox'
      },
      {
        name: 'Countdown 倒计时',
        url: 'countdown'
      },
      {
        name: 'Drawer 抽屉',
        url: 'drawer'
      },
      {
        name: 'Fab 悬浮按钮',
        url: 'fab'
      },
      {
        name: 'Fav 收藏按钮',
        url: 'fav'
      },
      {
        name: 'GoodsNav 商品导航',
        url: 'goods-nav'
      },
      {
        name: 'Grid 宫格',
        url: 'grid'
      },
      {
        name: 'Icons 图标',
        url: 'icons'
      },
      {
        name: 'IndexedList 索引列表',
        url: 'indexed-list'
      },
      {
        name: 'Link 超链接',
        url: 'link'
      },
      {
        name: 'List 列表',
        url: 'list'
      },
      {
        name: 'LoadMore 加载更多',
        url: 'load-more'
      },
      {
        name: 'NavBar 自定义导航栏',
        url: 'nav-bar'
      },
      {
        name: 'NoticeBar 通告栏',
        url: 'notice-bar'
      },
      {
        name: 'NumberBox 数字输入框',
        url: 'number-box'
      },
      {
        name: 'Pagination 分页器',
        url: 'pagination'
      },
      {
        name: 'PopUp 弹出层',
        url: 'popup'
      },
      {
        name: 'Rate 评分',
        url: 'rate'
      },
      {
        name: 'SearchBar 搜索栏',
        url: 'search-bar'
      },
      {
        name: 'SegmentedControl 分段器',
        url: 'segmented-control'
      },
      {
        name: 'Steps 步骤条',
        url: 'steps'
      },
      {
        name: 'SwipeAction 滑动操作',
        url: 'swipe-action'
      },
      {
        name: 'SwiperDot 轮播图指示点',
        url: 'swiper-dot'
      },
      {
        name: 'Tag 标签',
        url: 'tag'
      },
      {
        name: 'Transition 过渡动画',
        url: 'transition'
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
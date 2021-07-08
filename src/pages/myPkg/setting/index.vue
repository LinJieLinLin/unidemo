<!--
 * @author: linj
 * @email: 993353454@qq.com
 * @Date: 2021-07-06 09:59:58
 * @description:
-->
<template>
  <div class="mg-lr10 mg-t10">
    <div v-for="(item,index) in lists"
      :key="index">
      <lj-item-list :item="item"
        :c="listC"
        @click="$f.toPage(item.url)"></lj-item-list>
    </div>
    <lj-item-list :c="listC"
      @click="h5Click">
      <template #body>
        <button class="flex1 btn-none fs-14"
          open-type="contact">
          联系客服
        </button>
      </template>
    </lj-item-list>
    <lj-item-list :c="listC"
      @click="h5Click">
      <template #body>
        <button class="flex1 btn-none fs-14"
          open-type="openSetting">
          授权设置
        </button>
      </template>
    </lj-item-list>
  </div>
</template>

<script>
import { setTitle } from 'lj-utils/microApi'
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
      listC: {

      },
      lists: [{
        name: '系统信息',
        url: 'myPkg/info'
      },
      ]
    }
  },
  methods: {
    h5Click() {
      // #ifndef MP-WEIXIN
      this.$f.toast('请在微信小程序打开！')
      // #endif
    },
    init() {
      setTitle('系统设置')
    }
  },
}
</script>

<style lang="scss">
</style>

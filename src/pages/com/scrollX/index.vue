<!--
 * @author: linj
 * @email: 993353454@qq.com
 * @Date: 2021-12-03 15:33:27
 * @description: no
-->
<template>
  <div class="of-a scroll"
    v-scroll-x>
    <div class="imgs">
      <img :src="'https://img.lj4.top/test/'+(index+1)+'.jpg'"
        v-for="(item,index) in 10"
        :key="index"
        alt="">
    </div>
    <view v-scroll-x
      id="a"
      style="height:100px;width: 100vw;background:grey;overflow: auto;">
      <div style="height:100px;width: 200vw;background:grey">test text</div>
    </view>
  </div>
</template>

<script>
import scrollX from 'lj-utils/directive/scrollX'
export default {
  directives: {
    scrollX: scrollX
  },
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

    }
  },
  methods: {

  },
}
</script>

<style scoped lang="scss">
.scroll {
  overflow: auto;
}
.imgs {
  width: max-content;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
  }
  img {
    width: 200px;
    height: 100px;
    object-fit: cover;
  }
}
</style>

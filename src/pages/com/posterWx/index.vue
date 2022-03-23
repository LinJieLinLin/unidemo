<!--
 * @author: linj
 * @email: 993353454@qq.com
 * @Date: 2021-01-19 15:47:03
 * @description:
-->
<template>
  <div class="pd-lr16 pd-t16">
    <canvas v-if="showCanvas"
      class="canvas-poster"
      canvas-id="poster"
      id="poster"></canvas>
    <div class="poster">
      <image v-if="posterImg"
        class="poster"
        show-menu-by-longpress
        mode="aspectFill"
        @error="imgError"
        :src="posterImg"></image>
    </div>
    <div class="fs-12 c-font ta-c mg-t10">长按保存图片分享给好友</div>
  </div>
</template>

<script>
import { getSystemInfo, hideLoading, P, showLoading } from 'lj-utils/microApi'
import { sleep } from 'lj-utils'
import CanvasClass from 'lj-utils/class/CanvasClass'
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
      img: {
        posterBg: require('@/assets/img/poster-bg.jpg'),
        logo: require('@/assets/img/wepay.png'),
        code: require('@/assets/img/code.jpg'),
      },
      showCanvas: false,
      imgList: [],
      posterImg: ''
    }
  },
  methods: {
    imgError(e) {
      console.error('imgError', e)
    },
    async drawPoster() {
      this.showCanvas = true
      await sleep(100)
      showLoading()
      const canvas = {
        width: 345,
        height: 509.5
      }
      const context = uni.createCanvasContext('poster')
      const info = getSystemInfo()
      const ctx = new CanvasClass(context, info.windowWidth)
      ctx.drawImage(this.img.posterBg, 0, 0, canvas.width, canvas.height)
      ctx.drawImage(this.img.posterBg, 268, 61, 35, 'circle')
      ctx.drawImage(this.img.logo, 10, 450, 50, 'circle')
      ctx.drawImage(this.img.code, 285, 450, 50, 'circle')
      console.error('context', context)
      // ctx.drawImage('#ffffff', 268, 61, 35, 'circleColor')
      // text
      context.setFillStyle('#FDE3A3')
      context.font = ctx.getScale(13) + 'px sans-serif'
      ctx.fillText('欣然科技', 70, 469)
      context.font = ctx.getScale(10) + 'px sans-serif'
      ctx.fillText('快来扫码给好友送祝福吧！', 70, 489)
      // this.posterImg = await ctx.draw(1, canvas.width, canvas.height).catch(err => console.error(err))
      this.posterImg = await ctx.draw(1).catch(err => console.error(err))
      console.error('su:', this.posterImg)
      hideLoading()
      // 手动创建
      // this.posterImg = await ctx.creatPoster(canvas.width, canvas.height)
      // console.error('su:', this.posterImg)
    },
    async init() {
      this.drawPoster()
    }
  },
}
</script>

<style lang="scss">
.canvas-poster {
  position: absolute;
  left: -100%;
  width: 345px;
  height: 509.5px;
  letter-spacing: 4px;
}
.poster {
  width: 345px;
  height: 509.5px;
  letter-spacing: 2px;
}
</style>

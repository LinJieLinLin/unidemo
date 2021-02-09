<!--
 * @author: linj
 * @email: 993353454@qq.com
 * @Date: 2021-01-22 14:37:39
 * @description:
-->
<template>
  <div :class="c.class">
    <canvas class="canvas-poster"
      :id="c.id||'poster'"
      :canvas-id="c.id||'poster'"></canvas>
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
import { getSystemInfo, P } from '@/utils/microApi'
import { sleep } from '@/utils/j'
export default {
  props: {
    c: {
      type: Object,
      default: () => {
        return {}
      },
      required: true
    },
    list: {
      type: Array,
      default: () => { }
    }
  },
  components: {

  },
  mounted() {
    this.init()
  },
  computed: {

  },
  data() {
    return {
      posterImg: '',
    }
  },
  methods: {
    imgError(e) {
      console.error('imgError', e)
    },
    canvasError(e) {
      console.error('canvasError', e)
    },
    async drawPoster() {
      await sleep(1000)
      const context = uni.createCanvasContext(this.c.id || 'poster')
      const sys = getSystemInfo()
      const width = sys.windowWidth
      const height = sys.windowHeight
      const ratio = sys.pixelRatio
      const baseWith = this.c.baseWith || (375 / 2)
      const scale = (data) => {
        let temData = (data / baseWith) * width
        return Math.round(temData)
      }
      context.height = context.height || '100'
      console.error(context, context.font)
      // context.fillStyle = 'rgb(200,0,0)'
      // context.fillRect(10, 10, 55, 50)

      // context.fillStyle = 'rgba(0, 0, 200, 0.5)'
      // context.fillRect(0, 0, 10, 10)
      context.save()
      context.setFillStyle('#FDE3A3')
      context.fillText(
        'sbb',
        scale(10),
        scale(10)
      )
      context.restore()

      context.draw(true, async (res) => {
        console.error(123231)
        await sleep(300)
        const imgRes = await P('canvasToTempFilePath', {
          x: 0,
          y: 0,
          width: scale(345) * 2,
          height: scale(509.5) * 2,
          destWidth: scale(345) * 2,
          destHeight: scale(509.5) * 2,
          canvasId: 'poster',
          quality: 1,
          fileType: 'jpg'
        })
        console.error('poster', imgRes)
        this.posterImg = imgRes.tempFilePath
      })
      console.error('fuck')
    },
    init() {
      this.drawPoster()
    }
  },
}
</script>

<style scoped lang="scss">
.canvas-poster {
  position: absolute;
  left: 0%;
  top: 0;
  width: 750px;
  height: 1019px;
  letter-spacing: 4px;
}
.poster {
  width: 345px;
  height: 509.5px;
  letter-spacing: 2px;
}
</style>

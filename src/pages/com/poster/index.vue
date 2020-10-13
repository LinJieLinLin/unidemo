<template>
  <div>
    <lj-poster :ref="posterC.id"
      :c="posterC"
      @mixinChange="ComChange">
      <div>
        我是海报内容
        <h1>我是海报内容</h1>
        <h2>我是海报内容</h2>
        <h3>我是海报内容</h3>
        <h3>我是海报内容</h3>
        <h3>我是海报内容</h3>
        <h3>我是海报内容</h3>
        <h3>我是海报内容</h3>
        <h3>我是海报内容</h3>
        <h3>我是海报内容</h3>
        <h3>我是海报内容</h3>
        <h3>我是海报内容</h3>
        <h3>我是海报内容</h3>
        <h3>我是海报内容</h3>
        <h3>我是海报内容</h3>
        <h3>我是海报内容</h3>
        <h3>我是海报内容</h3>
        <h3>我是海报内容</h3>
        <h3>我是海报内容</h3>
        <h3>我是海报内容</h3>
        <h3>我是海报内容</h3>
        <h3>我是海报内容</h3>
        <h3>我是海报内容</h3>
        <h3>我是海报内容</h3>
        <h3>我是海报内容</h3>
        <h3>我是海报内容</h3>
        <h3>我是海报内容</h3>
        <h3>我是海报内容</h3>
        <h3>我是海报内容</h3>
        <h3>我是海报内容</h3>
        <h3>我是海报内容</h3>
        <h3>我是海报内容</h3>
        <h3>我是海报内容</h3>
        <image class="wepay"
          :src="img.wepay"></image>
      </div>
    </lj-poster>
    <button class="mg-t20 mg-lr20"
      @click="posterC.createPoster">
      显示海报
    </button>
  </div>
</template>

<script>
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
        wepay: require('@/assets/img/wepay.png')
      },
      posterC: {
        id: 'poster0',
        createPoster: null,
        showPoster: true,
        posterImg: null
      }
    }
  },
  methods: {

  },
}
</script>

<style lang="scss">
.wepay {
  width: 100px;
  height: 100px;
}
</style>

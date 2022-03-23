<!--
 * @author: linj
 * @email: 993353454@qq.com
 * @Date: 2021-03-12 18:14:48
 * @description:
-->
<template>
  <div>
    <div class="mg-t10 pd-lr20 pd-tb20 bg-w">
      <input type="text"
        placeholder="请输入url"
        v-model="url">
      <button class="mg-t20"
        @click="copy">
        复制
      </button>
      <div class="flex-center mg-t20">
        <qr-code :text="url"
          :size="200"
          color="#f1c40f"
          bg-color="#3498db"></qr-code>
      </div>
      <div class="flex-center pd-f20 fs-20">{{ countdown }}</div>
      <div class="flex-center pd-f20 fs-20">{{ countdown1 }}</div>
      <div class="flex-center pd-f20 fs-20">{{ countdown2 }}</div>
    </div>
  </div>
</template>

<script>
import { setTitle } from 'lj-utils/microApi'
import qrCode from 'vue-qrcode-component'
// #ifdef H5
import VueClipboard from 'vue-clipboard2'
import Vue from 'vue'
import { secondToTime } from 'lj-utils'
import Counter from 'lj-utils/class/Counter'
Vue.use(VueClipboard)
// #endif
export default {
  props: {

  },
  components: {
    qrCode
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
      url: 'https://www.baidu.com',
      countdown: '倒计时',
      countdown1: '倒计时',
      countdown2: '',
    }
  },
  methods: {
    async copy() {
      let res
      // #ifdef H5
      res = await this.$copyText(this.url).catch(err => {
        console.error(err)
      })
      // #endif
      // #ifdef MP
      res = await this.$f.P('setClipboardData', { data: this.url }).catch(err => {
        console.error(err)
      })
      // #endif
      if (!res) {
        return
      }
      this.$f.toast('复制成功！')
    },
    init() {
      setTitle('二维码生成')
      let count = new Counter(1 + 60 + 60 + 60 * 60 + 24 * 60 * 60 - 2)
      count.start(t => {
        this.countdown = secondToTime(t, 'M')
        this.countdown1 = secondToTime(t, 'd')
        this.countdown2 = secondToTime(t, 'y')
        // this.countdown2 = secondToTime(t, 'h')
      })
    },
  },
}
</script>

<style lang="scss">
</style>

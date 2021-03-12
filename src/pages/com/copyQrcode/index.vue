<!--
 * @author: linj
 * @email: 993353454@qq.com
 * @Date: 2021-03-12 18:14:48
 * @description:
-->
<template>
  <div>
    <div class="mg-t10 pd-lr20 pd-tb10 bg-w">
      <input type="text"
        placeholder="请输入url"
        v-model="url">
    </div>
  </div>
</template>

<script>
import { setTitle } from '@/utils/microApi'
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
      url: 'https://www.baidu.com',
    }
  },
  methods: {
    init() {
      setTitle('二维码生成')
    }
  },
}
</script>

<style lang="scss">
</style>

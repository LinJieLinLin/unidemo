<!--
 * @author: linj
 * @email: 993353454@qq.com
 * @Date: 2021-06-25 16:16:12
 * @description:
-->
<template>
  <view class="pd-tb10">
    <div v-for="(item,index) in dataList"
      :key="index">
      <lj-item-list :item="item"
        :c="listC"
        @click="toWebview(item)"></lj-item-list>
    </div>
  </view>
</template>

<script>
import { getDb, getStorageSync, setStorage, setTitle } from '@/utils/microApi'
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
      dataList: [{
        name: 'lj-utils',
        desc: '',
        url: 'https://linjielinlin.github.io/utils/lj-utils/0.1.5/index.html'
      },
      {
        name: '禁毒H5',
        desc: '',
        url: 'http://unidemo.lj4.top/jdh5/index.html'
      },
      {
        name: '粤商通',
        desc: '',
        url: 'http://unidemo.lj4.top/yst/index.html'
      },
      {
        name: 'unidemo',
        desc: '',
        url: 'http://unidemo.lj4.top/unidemo/index.html'
      },
      ]
    }
  },
  methods: {
    toWebview(argData) {
      this.$f.toPage('webview', { url: argData.url })
    },
    async getData() {
      const dbCollectionName = 'lj-link'
      let res = await getDb().collection(dbCollectionName).get().catch(err => {
        console.error(err)
        console.error(err.code, err.message)
        if (err.message.match('30203')) {
          console.error('relogin')
        }
      })
      this.dataList = this.$f.safeData(res, 'result.data', [])
      setStorage('caseList', this.dataList)
    },
    init() {
      this.dataList = getStorageSync('caseList') || []
      setTitle('项目列表')
      this.getData()
    }
  },
}
</script>

<style lang="scss">
</style>

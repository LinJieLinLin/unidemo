<!--
 * @author: linj
 * @email: 993353454@qq.com
 * @Date: 2021-06-25 16:16:12
 * @description:
-->
<template>
  <view class="pd-tb10 case">
    <div v-for="(item,index) in dataList"
      :key="index">
      <lj-item-list :item="item"
        :c="listC"
        @click="toWebview(item)"></lj-item-list>
    </div>
    <lj-dialog :c="dialogC"
      @mixinChange="ComChange">
      <image show-menu-by-longpress
        class="d-img"
        :src="dialogC.img"></image>
      <lj-icon class="d-close"
        @click.native="close"
        i="i-close"></lj-icon>
    </lj-dialog>
  </view>
</template>

<script>
import { getDb, getStorageSync, P, setStorage, setTitle } from '@/utils/microApi'
import { isJson } from '@/utils/j'
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
      dialogC: {
        key: 'dialogC',
        show: false,
        img: '',
      },
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
    async toWebview(argData) {
      console.error(argData)
      switch (argData.type) {
        case 'h5':
          if (this.$f.safeData(argData, 'params.target') === 'blank') {
            window.open(argData.url)
            return
          }
          this.$f.toPage('webview', { url: argData.url, params: argData.params })
          break
        case 'mp':
          // #ifdef MP-WEIXIN
          // await P('navigateToMiniProgram', argData.params).catch(err => {
          //   console.error(err)
          //   this.$f.toast(err)
          // })
          // #endif
          // #ifdef H5||MP-WEIXIN
          this.dialogC.img = argData.img
          this.dialogC.show = true
          // #endif
          break
      }
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
      this.dataList = this.$f.safeData(res, 'result.data', []).map(v => {
        if (isJson(v.params)) {
          v.params = JSON.parse(v.params)
        }
        return v
      })
      setStorage('caseList', this.dataList)
    },
    close() {
      console.error(123)
      this.dialogC.show = false
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
.case {
  .d-img {
    margin-top: -20vw;
    width: 72vw;
    height: 72vw;
    display: block;
    img {
      width: 72vw;
      height: 72vw;
    }
  }
  .d-close {
    position: absolute;
    bottom: -15vw;
    color: #fff;
    left: 50%;
    transform: translate(-50%, 0);
    font-size: 40px;
  }
}
</style>

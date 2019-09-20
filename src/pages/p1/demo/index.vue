
<template>
  <div class="">
    <div class="pd-x40">
      <section>
        <div>
          <div class="usermotto">
          </div>
          <img :src="codeImg"
            style="width: 300rpx;height:300rpx;"
            alt="">
          <p>Vuex counter：{{ count }}</p>
          <img lazy-load
            class="userinfo-avatar"
            src="/static/img/1.png"
            background-size="cover" />
          <form class="form-container">
            <input type="text"
              class="form-control"
              v-model="motto"
              placeholder="v-model" />
            <input type="text"
              class="form-control"
              v-model.lazy="motto"
              placeholder="v-model.lazy" />
          </form>
          <i class="image-i-ly"></i>
          <i class="image-i-gm"></i>
          <a href="/pages/logs/main"
            class="counter">去往log示例页面</a>
          <button @click="$f.toPage('packageA/test')"
            class="mg-t20"
            type="primary">分包test</button>
          <button class="mg-t20"
            type="primary"
            open-type="openSetting">授权设置</button>
          <button class="mg-t20"
            type="primary"
            open-type="contact">客服会话</button>
          <button class="mg-t20"
            type="primary"
            @click="testHttp">测试超时</button>
          <div class="mg-t20">
            <scan-code :c="cfSc"></scan-code>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
// components
export default {
  async onPullDownRefresh() {
    // to doing..
    // console.log('下拉')
    wx.stopPullDownRefresh()
  },
  async onReachBottom() {
    // console.log('上拉')
  },
  data() {
    return {
      motto: 'Hello World',
      codeImg: '',
      cfSc: {
        plain: false,
        type: 'primary',
        onlyFromCamera: true,
        cb: this.qrcode
      }
    }
  },
  components: {
  },
  onShareAppMessage(argData) {
    if (argData.from === 'button') {
      // 来自页面内转发按钮
      // console.log(argData.target)
    }
    if (argData.from === 'menu') {
      // 来自右上角转发按钮
      // console.log(argData.target)
    }
    let params = this.$f.getPage().options
    return {
      title: '南山文体通，提升公共文体惠民服务，打造文体惠民活动盛宴',
      imageUrl: 'https://sznswtt.gdtengnan.com/uploads/program/custom/share.png',
      path: 'pages/index/main?isShare=1'
    }
  },
  methods: {
    ...mapActions(['TestGet', 'TestPost']),
    testGet() {
      this.TestGet().then(res => {
        // console.log(res)
      }).catch(() => {
        // console.log('err:', err)
      })
    },
    qrcode(res) {
      wx.showToast({ title: res.result, icon: 'none' })
    },
    async testHttp() {
      let res = await wx.cloud
        .callFunction({
          name: 'getMinorCode',
          data: {
            scene: 8,
            page: 'pages/stadium/detail/main',
          }
        })
        .catch(err => {
          console.error(err)
          this.$f.log(err)
        })
      this.codeImg = 'data:image/png;base64,' + wx.arrayBufferToBase64(res.result.buffer)
      // this.testGet()
    }
  },
  computed: {
    ...mapState(['page', 'count'])
  },
  created() {
  },
  async onShow() {

  }
}
</script>

<style scoped lang="scss">
</style>
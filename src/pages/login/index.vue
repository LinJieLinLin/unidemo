<template>
  <div class="page lg-bg flex-center">
    <button class="login "
      open-type="getUserInfo"
      @getuserinfo="checkUserInfo">
      登录
    </button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { getUserInfo, login } from '../../utils/microApi'
import { saveUserinfo } from '../../api/common.js'
export default {
  components: {},
  data() {
    return {
      logs: []
    }
  },
  computed: {
    ...mapState(['UserInfo'])
  },
  methods: {
    ...mapMutations(['SetUserInfo']),
    async checkUserInfo(rs) {
      console.log(rs)
      const userInfo = await getUserInfo(rs).catch(err => {
        // console.log('出错啦')
        console.log(err)
      })
      let data = {
        signature: userInfo.signature,
        encryptedData: userInfo.encryptedData,
        iv: userInfo.iv,
        rawData: userInfo.rawData,
        code: userInfo.code
      }
      console.log(userInfo)
      if (userInfo.iv) {
        let res
        // res = await saveUserinfo(data).catch(err => {
        //   console.log('登录失败:', err)
        // })
        res = {}
        login(1)
        if (!res) {
          return
        }
        this.SetUserInfo(userInfo.userInfo)
        this.SetUserInfo(res.wechatinfo)
        let temPath = (wx.getStorageSync('openPage') || '')
          .replace('pages/', '')
          .replace('/main', '')
        let temQuery = JSON.parse(wx.getStorageSync('openQuery') || '{}')
        wx.setStorage({
          key: 'openPage',
          data: ''
        })
        wx.setStorage({
          key: 'openQuery',
          data: '{}'
        })
        console.log('参数', temPath, temQuery)
        if (temPath && temPath !== 'index') {
          console.log('跳转path:', temPath)
          this.$f.toPage(temPath, temQuery, 'reLaunch')
        } else {
          this.$f.toPage('index', temQuery)
        }
      } else {
        // this.$f.toast('获取不到用户信息，请删除小程序重试！')
        wx.clearStorageSync()
        login(1)
      }
    }
  },
  mounted() {
    // 挂载
  },
  onLoad() {
    // #ifdef MP
    uni.showShareMenu({
      withShareTicket: true,
      title: '自定义转发标题1',
      query: 'a=1&b=2',
      imageUrl: '',
      menus: ['shareAppMessage', 'shareTimeline']
    })
    // #endif
  },
  onShow() {
    // 活动时
    login()
    this.$f.init = () => { }
    console.log('当前是login页面')
  }
}
</script>

<style scope lang="scss">
.login {
  width: 50vw;
  // height: 100vh;
  padding: 0;
  margin: 0;
  border-radius: 8px;
  border: 0 solid #fff;
  box-sizing: unset;
}
.lg-bg {
  background-color: c(theme);
}
</style>

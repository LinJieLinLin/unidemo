<template>
  <div>
    <button class="login" open-type="getUserInfo" @getuserinfo="checkUserInfo">
      <img class="login-bg" src="/static/img/login-bg.jpg" alt="" />
    </button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { getUserInfo, login } from '../../utils/wx.js'
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
      imageUrl:
        'https://sznswtt.gdtengnan.com/uploads/program/custom/share.png',
      path: 'pages/index/main?isShare=1'
    }
  },
  methods: {
    ...mapMutations(['SetUserInfo', 'SetNeedAuth']),
    async checkUserInfo(rs) {
      // console.log(rs)
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
      if (userInfo.iv) {
        saveUserinfo(data)
          .then(res => {
            login(1)
            if (!res) {
              return
            }
            this.SetUserInfo(userInfo.userInfo)
            this.SetUserInfo(res.wechatinfo)
            this.SetNeedAuth(-1)
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
          })
          .catch(err => {
            console.log('登录失败:', err)
            login(1)
          })
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
  onShow() {
    // 活动时
    login()
    this.$f.init = () => {}
    console.log('当前是login页面')
  }
}
</script>

<style scope lang="scss">
.login {
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
  border-radius: 0;
  border: 0 solid #fff;
  box-sizing: unset;
}
.login-bg {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translate(0, -50%);
  width: 100vw;
  height: 1624px;
}
</style>

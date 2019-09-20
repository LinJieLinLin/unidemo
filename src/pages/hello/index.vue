<template>
  <view class="page ta-c"
    @click="$f.toPage('index')">
    <image class="logo"
      src="/static/logo.png"></image>
    <view>
      <text class="title">{{title}}</text>
    </view>
  </view>
</template>

<script>
import { getStorage, setStorage, toPage, login } from '../../utils/wx'
import { wxLogin } from '../../api/common';
const data = {
  showTime: 2000,
  showDone: false,
  requestDone: false,
  page: 'index'
}
export default {
  computed: {
  },
  data() {
    return {
    }
  },
  async onLoad(argData) {
    data.showDone = false
    data.requestDone = false
    console.log('页面数据:', getCurrentPages())
    this.checkLogin()
  },
  onReady() {
    setTimeout(async () => {
      data.showDone = true
      toPage('index')
    }, data.showTime);
  },
  methods: {
    async checkLogin() {
      let res = await login(1)
      res = await wxLogin({ code: res.code })
      console.log(res)
    }
  }
}
</script>

<style>
.logo {
  height: 60px;
  width: 60px;
  margin-top: 100px;
}

.title {
  font-size: 36px;
  color: #8f8f94;
}
</style>

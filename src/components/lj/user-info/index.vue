<!--
 * @Author: linj
 * @Email: 993353454@qq.com
 * @Date: 2020-09-08 18:14:25
 * @Description:微信小程序获取用户信息组件
 name:按钮显示文字
 click: 返回用户信息
 eg:
 <lj-user-info @click="getUserInfo">
</lj-user-info>
-->
<template>
  <button class="btn-none"
    open-type="getUserInfo"
    @getuserinfo="checkUserInfo">
    <slot>
      {{ name||'确定' }}
    </slot>
  </button>
</template>

<script>
import { mapMutations } from 'vuex'
import { setUserInfo } from '../../../api/common'
import { getUserInfo, login } from '../../../utils/microApi'
export default {
  props: {
    name: {
      type: String,
      default: '',
    }
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
  computed: {

  },
  data() {
    return {

    }
  },
  methods: {
    ...mapMutations(['SetUserInfo']),
    async checkUserInfo(rs) {
      const userInfo = await getUserInfo(rs).catch(err => {
        console.log(err)
      })
      console.info('userInfo:', userInfo)
      if (userInfo.iv) {
        this.SetUserInfo(userInfo.userInfo)
        let res = await setUserInfo(userInfo.userInfo)
        console.error('setUserInfo', res)
        this.$emit('click')
      } else {
        console.error('请先同意授权!')
      }
      login(1)
    },
  },
}
</script>

<style lang="scss">
</style>

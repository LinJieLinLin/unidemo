<template>
  <div class="flex-column flex-y-center pd-y20 fs-20"
    @click="login">
    <div class="round avatar mg-b10">
      <!--  #ifdef  MP-WEIXIN -->
      <open-data v-if="!c.avatar"
        type="userAvatarUrl"
        class=""></open-data>
      <!--  #endif -->
      <!--  #ifdef  H5 -->
      <img :src="c.avatar||img.avatar"
        alt="" />
      <!--  #endif -->
    </div>
    <!--  #ifdef  MP-WEIXIN -->
    <text v-if="!c.nickName"
      class="c-theme">
      登录
    </text>
    <template v-else>
      <open-data type="userNickName"
        lang="zh_CN"></open-data>
    </template>
    <!--  #endif -->
    <!--  #ifdef  H5 -->
    <text class="c-theme">{{ c.nickName || '登录' }}</text>
    <!--  #endif -->
  </div>
</template>

<script>
export default {
  props: {
    c: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  components: {

  },
  mounted() {

  },
  computed: {

  },
  data() {
    return {
      img: {
        avatar: require('@/static/logo.png')
      }
    }
  },
  methods: {
    login() {
      if (!this.c.nickName) {
        this.$f.toPage('login')
      }
    }
  },
}
</script>

<style scoped lang="scss">
.avatar {
  overflow: hidden;
  width: 80px;
  height: 80px;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>

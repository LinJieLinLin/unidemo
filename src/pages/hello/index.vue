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
import { toPage } from '../../utils/wx'
export default {
  data() {
    return {
      title: 'Hello'
    }
  },
  onLoad() {

  },
  methods: {

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

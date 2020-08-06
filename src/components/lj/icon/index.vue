/**
iconfont的symbol引用,不支持小程序
i:图标名称
eg: <lj-icon i="i-maoshan"></lj-icon>
纯H5应用开启在index.html添加<script src="./static/iconfont.js"></script>
 */
<template>
  <block>
    <!-- #ifdef H5 -->
    <svg class="lj-icon"
      :class="i"
      aria-hidden="true">
      <use :xlink:href="'#'+i"></use>
    </svg>
    <!-- #endif -->
    <!-- #ifndef H5 -->
    <view>
      <i class="i"
        :class="i"></i>
    </view>
    <!-- #endif -->
  </block>
</template>

<script>
export default {
  props: {
    i: {
      type: String,
      required: true
    }
  },
  computed: {
  }
}
</script>

<style>
/* #ifndef H5 */
@import './iconfont.css';
/* #endif */
.lj-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
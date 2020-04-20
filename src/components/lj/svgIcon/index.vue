/**
iconfont的symbol引用,不支持小程序
i:图标名称
eg: <svg-icon i="i-maoshan"></svg-icon>
纯H5应用开启在index.html添加<script src="./static/iconfont.js"></script>
 */
<template>
  <svg class="svg-icon"
    aria-hidden="true">
    <use :xlink:href="'#'+i"></use>
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
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
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
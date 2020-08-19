<!--
 * @Author: linj
 * @Email: 993353454@qq.com
 * @Date: 2020-08-11 10:23:26
 * @Description:表单组件
 eg: <lj-form :list="data.list" :c="formC"></lj-form>
-->
<template>
  <div class="lj-form"
    :class="item.class">
    <!-- 必填显示星星 -->
    <view class="i-require"
      v-show="item.require&&!c.isView">
      *
    </view>
    <!-- 左侧信息 -->
    <div v-show="item.name"
      class="mg-r8 f-title flex0"
      :style="titleStyle">
      {{ item.name }}
    </div>
    <view class="flex1">
      <!-- 中间表单 -->
      <lj-item-input :item="item"
        :c="c"
        @change="formChange($event,item)"></lj-item-input>
    </view>
    <!-- 右边功能 -->
    <view class="flex0">
    </view>
    <div class="t-line"></div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: function () {
        return {}
      }
    },
    c: {
      type: Object,
      default: function () {
        return {}
      }
    },
  },
  components: {
  },
  mounted() {

  },
  computed: {
    titleStyle() {
      let temStyle = ''
      // #ifdef MP
      for (let k in this.c.titleStyle) {
        temStyle += k + ':' + this.c.titleStyle[k] + ';'
      }
      // #endif
      // #ifndef MP
      temStyle = this.c.titleStyle
      // #endif
      return temStyle
    }
  },
  data() {
    return {
    }
  },
  methods: {
    // 重置数据
    formChange(argData, argItem) {
      this.$emit('formChange', argData)
    }
  },
}
</script>

<style lang="scss">
$pdlr: 18px;
.lj-form {
  position: relative;
  background-color: #fff;
  color: #3c3838;
  min-height: 40px;
  padding: 0 $pdlr;
  @include iFlex(flex-middle);
  .t-line {
    height: 1px;
    position: absolute;
    left: 0px;
    right: 0;
    left: $pdlr;
    right: $pdlr;
    top: -1px;
    background-color: #eeebeb;
  }
  .i-require {
    position: absolute;
    left: 8px;
    top: 50%;
    transform: translate(0, -50%);
    font-size: 16px;
    color: $error;
    height: 10px;
    line-height: 1;
  }
  .f-title {
    min-width: 30px;
    max-width: 50%;
    font-size: 14px;
  }
}
</style>

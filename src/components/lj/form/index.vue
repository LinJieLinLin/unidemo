<!--
 * @Author: linj
 * @Email: 993353454@qq.com
 * @Date: 2020-08-11 10:23:26
 * @Description:表单组件
 eg: <lj-form :list="data.list" :c="formC"></lj-form>
-->
<template>
  <div class="lj-form"
    v-if="!item.isHide"
    :class="item.class">
    <block v-if="!c.hideLeft">
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
    </block>
    <view class="flex1">
      <!-- 中间表单 -->
      <lj-item-input :item="item"
        :c="c"
        @change="formChange($event,item)"></lj-item-input>
    </view>
    <!-- 右边功能 -->
    <view class="flex0"
      v-if="!c.isView">
      <view class=""
        v-if="item.extType==='imgCode'">
        <div class="img-code flex-center">
          <image :src="item.img"
            @click="imgCodeClick"
            alt=""></image>
        </div>
      </view>
      <view class="flex0 pd-tb8 pd-l4 c-warn"
        @click="showTip(item)"
        v-if="item.tips">
        <lj-icon i="i-help"></lj-icon>
      </view>
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
    if (this.$f.safeData(this.item, 'extType')) {
      switch (this.item.extType) {
        case 'imgCode':
          break
      }
    }
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
      // this.$emit('formChange', argData)
      this.$emit('mixinChange', { fn: this.$f.safeData(this.c, 'fn.formChange', 'formChange'), data: argData })
    },
    // 显示提示
    showTip(argItem) {
      this.$emit('mixinChange', { fn: this.$f.safeData(this.c, 'fn.showTip', 'showTip'), data: argItem.tips })
    },
    // 图片验证码点击切换
    imgCodeClick() {
      this.$emit('mixinChange', { fn: this.$f.safeData(this.c, 'fn.imgCodeClick', 'imgCodeClick') })
      this.$emit('mixinChange', { fn: this.$f.safeData(this.c, 'fn.formChange', 'formChange'), data: { value: '' } })
    },
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
  // input组件图片验证码样式
  .img-code {
    margin-left: 8px;
    width: 120px;
    height: 40px;
    border-radius: 4px;
    overflow: hidden;
    img,
    image {
      min-height: 34px;
      width: 120px;
      height: 40px;
      border-radius: 4px;
    }
  }
}
</style>

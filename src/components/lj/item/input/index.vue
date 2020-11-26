<template>
  <div class="c-i-input"
    :class="{'i-error':item.isFail&&!c.isView}">
    <block v-if="c.isView">
      <div class="w-b pd-tb10">
        {{ item.showValue||'--' }}{{ item.unit }}
      </div>
    </block>
    <block v-else>
      <!-- 数字或手机号 -->
      <input v-if="item.type=='number'"
        type="number"
        class="flex1 input"
        v-model.number="item.value"
        @blur="inputBlur"
        @input="inputChange"
        :disabled="item.disabled"
        :placeholder="item.disabled ? '--' : item.placeholder"
        :maxlength="item.maxlength||100">
      <!-- 带小数点数字 -->
      <input v-else-if="item.type=='digit'"
        type="digit"
        class="flex1 input"
        v-model.number="item.value"
        @blur="inputBlur"
        @input="inputChange"
        :disabled="item.disabled"
        :placeholder="item.disabled ? '--' : item.placeholder"
        :maxlength="item.maxlength||15">
      <!-- 身份证 -->
      <input v-else-if="item.type=='idcard'"
        type="idcard"
        class="flex1 input"
        v-model="item.value"
        @blur="inputBlur"
        @input="inputChange"
        :disabled="item.disabled"
        :placeholder="item.disabled ? '--' : item.placeholder"
        :maxlength="item.maxlength||100">
      <!-- 密码 -->
      <input v-else-if="item.type=='password'&&!showPwd"
        type="password"
        class="flex1 input"
        v-model="item.value"
        @blur="inputBlur"
        @input="inputChange"
        :disabled="item.disabled"
        :placeholder="item.disabled ? '--' : item.placeholder"
        :maxlength="item.maxlength||100">
      <!-- 普通文本 -->
      <input v-else
        type="text"
        class="flex1 input"
        v-model="item.value"
        @blur="inputBlur"
        @input="inputChange"
        :disabled="item.disabled"
        :confirm-type="item.confirmType"
        :placeholder="item.disabled ? '--' : item.placeholder"
        :maxlength="item.maxlength||100">
      <view class="flex0 pd-tb8 pd-l4 c-info"
        @click="reset(item)"
        v-if="!item.hideReset&&item.value">
        <lj-icon i="i-error"></lj-icon>
      </view>
      <view class="flex0 pd-tb8 pd-l4 c-info"
        v-if="item.type==='password'"
        @click="changeShowPwd">
        <lj-icon v-if="showPwd"
          i="i-openeye"></lj-icon>
        <lj-icon v-if="!showPwd"
          i="i-closeeye"></lj-icon>
      </view>
    </block>
  </div>
</template>

<script>
import { getSystemInfo } from '../../../../utils/microApi'
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

  },
  data() {
    return {
      showPwd: false,
      test: 'font-size:30px'
    }
  },
  methods: {
    changeShowPwd() {
      this.showPwd = !this.showPwd
    },
    inputBlur(argData) {
      // #ifdef  H5
      if (getSystemInfo().isAppleMobile) {
        window.scrollTo(0, 0)
      }
      // #endif
      let data = {}
      data.value = this.$f.safeData(argData, 'detail.value')
      this.$emit('change', data)
    },
    inputChange(argData) {
      if (this.item.onChange) {
        let ichange = (argData) => {
          let data = {}
          data.value = this.$f.safeData(argData, 'detail.value')
          this.$emit('change', data)
        }
        this.$f.db.debounce(ichange, 500, argData)
      }
    },
    reset(argData) {
      this.$emit('change', { value: '' })
    },
  },
}
</script>

<style scoped lang="scss">
.c-i-input {
  @include iFlex(flex-middle);
  .input {
    min-height: 40px;
    font-size: inherit;
  }
  &.i-error {
    position: relative;
    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      right: 0;
      left: 0;
      z-index: 1;
      height: 1px;
      background-color: #ff9999;
    }
  }
}
</style>

<!--
 * @Author: linj
 * @Email: 993353454@qq.com
 * @Date: 2020-05-13 09:51:19
 * @Description:
 * @version:0.0.1

/** DialogC: {
// Dialog在this下的路径
key: 'DialogC',
// 显示隐藏
show: false,
// 背景是否可点击
maskClose: false,
// 头部是否隐藏
hideHeader: false,
// 内容是否隐藏
hideBody: false,
// 功能按钮是否隐藏
hideFooter: false,
// 取消是否隐藏
hideCancel: false,
// 确认是否隐藏
hideConfirm: false,
// 是否点弹窗任意位置关闭
clickHide: false,
// 确认按钮点击是否保持弹窗
confirmNoHide: false,
// 取消按钮点击是否保持弹窗
cancelNoHide: false,
title: '标题',
// 内容 （默认居中）
content:
'告知当前状态，信息和解决方法，文字换行状态',
cancelText: '取消文字',
cancelFn: '点取消调用的函数',
confirmText: '确定文字',
confirmFn: '点确定调用的函数',
changeFn: '改变时回调函数',
 }, eg:
<lj-dialog :c="DialogC" @mixinChange="ComChange">

*/
-->
<template>
  <popup ref="popup"
    type="center"
    :show="c.show"
    @change="change"
    :mask-click="c.maskClose || false"
    custom>
    <view @click.stop="clickModal">
      <slot>
        <view class="modal">
          <slot name="header">
            <view class="m-header"
              v-if="!c.hideHeader">
              {{ c.title }}
            </view>
          </slot>
          <slot name="body">
            <view class="m-body"
              v-if="!c.hideBody">
              <div v-html="c.content"
                class="w-b"></div>
            </view>
          </slot>
          <slot name="footer">
            <view class="m-footer"
              v-if="!c.hideFooter">
              <view class="m-btn"
                v-if="!c.hideCancel"
                @click.stop="cancel()">
                {{ c.cancelText || '取消' }}
              </view>
              <block v-if="!c.hideConfirm">
                <view class="m-btn"
                  v-if="!c.getUserInfo"
                  @click.stop="confirm()">
                  {{ c.confirmText || '确定' }}
                </view>
                <!-- #ifdef MP-WEIXIN -->
                <lj-user-info v-else
                  class="m-btn"
                  @click="confirm()"></lj-user-info>
                <!-- #endif -->
              </block>
            </view>
          </slot>
        </view>
      </slot>
    </view>
  </popup>
</template>

<script>
import popup from './popup'
export default {
  props: {
    c: {
      type: Object,
      default: function () {
        return { show: false }
      },
    },
  },
  components: {
    popup,
  },
  mounted() { },
  computed: {},
  watch: {},
  data() {
    return {}
  },
  methods: {
    clickModal() {
      if (this.c.clickHide) {
        this.change({ show: false })
      }
    },
    change(argData) {
      let isH5
      // #ifndef MP
      isH5 = true
      // #endif
      if (isH5) {
        this.c.show = argData.show
      } else {
        this.$emit('mixinChange', { key: this.c.key + '.show', data: argData.show })
      }
    },
    cancel(argData) {
      if (!this.c.cancelNoHide) {
        this.change({ show: false })
      }
      console.log(1)
      this.$emit('mixinChange', { fn: this.c.cancelFn })
    },
    confirm(argData) {
      if (!this.c.confirmNoHide) {
        this.change({ show: false })
      }
      this.$emit('mixinChange', { fn: this.c.confirmFn, data: argData })
    },
  },
}
</script>

<style scoped lang="scss">
.modal {
  width: 270px;
  background-color: #f1f1f1;
  border-radius: 12px;
  font-size: 16px;
}
.m-header {
  padding-top: 20px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
}
.m-body {
  text-align: center;
  padding: 20px 15px;
  max-height: 70vh;
  overflow: auto;
}
.m-footer {
  height: 42px;
  display: flex;
  border-top: 1px solid #dad7d7;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  overflow: hidden;
}
.m-btn {
  flex: 1;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  // color: c(theme);
  @include iBtnBgColor(#f1f1f1);
  &:nth-child(2) {
    border-left: 1px solid #dad7d7;
  }
}
</style>

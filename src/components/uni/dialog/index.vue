/** modalC: { show: false, maskClose: false, hideHeader: false, hideBody: false,
hideFooter: false, hideCancel: false, hideConfirm: false, clickHide: false,
confirmNoHide: false, title: '标题', content:
'告知当前状态，信息和解决方法，文字换行状态', cancelText: '取消文字',
confirmText: '确定文字', }, eg:
<popup-dialog
  :c="dialogC"
  @change="dialogChange"
  @cancel="dialogCancel"
  @confirm="dialogConfirm"
></popup-dialog>
*/

<template>
  <uni-popup ref="popup"
    type="center"
    @change="change"
    :mask-click="c.maskClose||false"
    custom>
    <view class="modal"
      @click.stop="clickModal">
      <slot>
        <view class="m-header"
          v-if="!c.hideHeader">
          {{ c.title }}
        </view>
        <view class="m-body"
          v-if="!c.hideBody">
          <div v-html="c.content"
            class="w-b"></div>
        </view>
        <view class="m-footer"
          v-if="!c.hideFooter">
          <view class="m-btn"
            v-if="!c.hideCancel"
            @click.stop="cancel()">
            {{ c.cancelText || '取消' }}
          </view>
          <view class="m-btn"
            v-if="!c.hideConfirm"
            @click.stop="confirm()">
            {{ c.confirmText || '确定' }}
          </view>
        </view>
      </slot>
    </view>
  </uni-popup>
</template>

<script>
import uniPopup from './popup'
export default {
  props: {
    c: {
      type: Object,
      default: function () {
        return { show: false }
      }
    }
  },
  components: {
    uniPopup
  },
  mounted() { },
  computed: {},
  watch: {
    'c.show'(n, o) {
      if (n) {
        this.$refs.popup.open()
      } else {
        this.$refs.popup.close()
      }
    }
  },
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
      this.$emit('change', argData.show)
    },
    cancel(argData) {
      this.change({ show: false })
      this.$emit('cancel')
    },
    confirm() {
      if (!this.c.confirmNoHide) {
        this.change({ show: false })
      }
      this.$emit('confirm')
    }
  }
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
  color: $theme;
  @include iBtnBgColor(#f1f1f1);
  &:nth-child(2) {
    border-left: 1px solid #dad7d7;
  }
}
</style>

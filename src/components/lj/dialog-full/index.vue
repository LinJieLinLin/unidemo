<!--
 * @Author: linj
 * @Email: 993353454@qq.com
 * @Date: 2020-06-02 11:25:30
 * @Description:
-->
<!--
 * @Author: linj
 * @Email: 993353454@qq.com
 * @Date: 2020-05-29 14:27:38
 * @Description: 全屏弹窗

list: []数组,

/** modalC: {
listName: list在this下的路径',
// 显示隐藏
show: false,
// 取消是否隐藏
hideCancel: false,
// 确认是否隐藏
hideConfirm: false,
// 确认按钮点击是否保持弹窗
confirmNoHide: false,
// 取消按钮点击是否保持弹窗
cancelNoHide: false,
list:[],
cancelText: '取消文字',
confirmText: '确定文字', }, eg:
<lj-multi-select :c="dialogC" @change="dialogChange" @cancel="dialogCancel" @confirm="dialogConfirm"></lj-multi-select>
// 控制弹窗显示隐藏
dialogChange(argData) {
this.dialogC.show = argData
},
// 点击取消回调
async dialogCancel() {
if (this.dialogC.cancelFn) {
this[this.dialogC.cancelFn]()
this.dialogC.cancelFn = ''
}
},
// 点击确定回调
async dialogConfirm() {
if (this.dialogC.confirmFn) {
this[this.dialogC.confirmFn]()
this.dialogC.confirmFn = ''
}
},
*/
-->
<template>
  <lj-transition class="dialog-full"
    v-if="c.show"
    :duration="300"
    :mode-class="['slide-bottom']"
    :show="c.show"
    @change="change">
    <view class="modal flex-column">
      <slot>
        <view class="flex1 of-a">
          <slot name="body">
            <view class="m-body"
              v-if="!c.hideBody">
              <div v-html="c.content"
                class="w-b"></div>
            </view>
          </slot>
        </view>
        <slot name="footer">
          <view class="flex0 m-footer"
            v-if="!c.hideFooter">
            <view class="m-btn bg-w"
              v-if="!c.hideCancel"
              @click.stop="cancel()">
              {{ c.cancelText || '取消' }}
            </view>
            <view class="m-btn bg-theme"
              v-if="!c.hideConfirm"
              @click.stop="confirm()">
              {{ c.confirmText || '确定' }}
            </view>
          </view>
        </slot>
      </slot>
    </view>
  </lj-transition>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: function () {
        return []
      }
    },
    c: {
      type: Object,
      default: function () {
        return {
          show: false
        }
      }
    }
  },
  components: {
  },
  mounted() { },
  computed: {},
  watch: {},
  data() {
    return {
    }
  },
  methods: {
    clickModal() {
      if (this.c.clickHide) {
        this.change({
          detail: false
        })
      }
    },
    change(argData) {
      this.c.show = argData.detail
      if (this.c.key) {
        this.$emit('mixinChange', { key: this.c.key + '.show', data: argData.detail })
      }
    },
    cancel(argData) {
      if (!this.c.cancelNoHide) {
        this.change({ detail: false })
      }
      this.$emit('mixinChange', { fn: this.c.cancelFn })
    },
    confirm() {
      if (!this.c.confirmNoHide) {
        this.change({ detail: false })
      }
      this.$emit('mixinChange', { fn: this.c.confirmFn, data: this.list })
    },
    keysClick(argItem) {
      argItem.isSelect = !argItem.isSelect
      if (this.c.key) {
        this.$emit('mixinChange', { key: this.c.listName, data: this.list })
      }
    },
  }
}
</script>
<style scoped lang="scss">
.dialog-full {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 998;
  .modal {
    width: 100%;
    height: 100vh;
    // #ifdef H5
    // padding-top: 44px;
    // #endif
    background-color: #f1f1f1;
    box-sizing: border-box;
    font-size: 14px;
  }

  .m-footer {
    height: 40px;
    display: flex;
    overflow: hidden;
  }

  .m-btn {
    flex: 1;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
  }
  .item {
    width: 103px;
  }
}
</style>

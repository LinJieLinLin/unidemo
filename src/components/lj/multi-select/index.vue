<!--
 * @Author: linj
 * @Email: 993353454@qq.com
 * @Date: 2020-05-29 14:27:38
 * @Description: 上弹多选

list: []数组,

/** modalC: {
key: 'codalC在this下的路径',
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
cancelText: '取消文字',
confirmText: '确定文字', }, eg:
<lj-multi-select :c="dialogC" @change="dialogChange" @cancel="dialogCancel" @confirm="dialogConfirm"></lj-multi-select>
-->
<template>
  <uni-transition class="multi-select"
    v-if="c.show"
    :duration="300"
    :mode-class="['slide-bottom']"
    :show="c.show"
    @change="change">
    <view class="modal flex-column">
      <view class="flex1 of-a">
        <view class="flex-row-between flex-wrap"
          v-if="list&&list.length">
          <lj-item-key @click.native="keysClick(item)"
            class="mg-t10"
            :item="item"
            v-for="(item, index) in list"
            :key="index"></lj-item-key>
          <div class="item"></div>
        </view>
        <view v-else
          class="ta-c mg-t20">
          暂无数据
        </view>
      </view>
      <view class="flex0 m-footer"
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
    </view>
  </uni-transition>
</template>

<script>
// import popup from '../dialog/popup'
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
.multi-select {
  position: fixed;
  top: 0;
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
    padding-left: 10px;
    padding-right: 10px;
    font-size: 14px;
  }

  .m-footer {
    margin-top: 10px;
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
    color: $theme;
    @include iBtnBgColor(#f1f1f1);
  }
  .item {
    width: 103px;
  }
}
</style>

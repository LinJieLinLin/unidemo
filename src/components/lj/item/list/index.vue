<!--
 * @Author: linj
 * @Email: 993353454@qq.com
 * @Date: 2020-11-26 17:01:01
 * @Description:
-->
<template>
  <div class="item-list flex"
    :class="{'disabled':item.disabled}"
    @click="itemClick()">
    <slot name="header">
      <div class="flex0 text-l-1">
        <div>{{ item.name }}</div>
      </div>
    </slot>
    <slot name="body">
      <div class="flex1">
      </div>
    </slot>
    <slot name="footer">
      <lj-icon i="i-arrow-right"
        v-if="!c.hideArrow&&!item.hideArrow"
        class="fs-20 flex0"></lj-icon>
    </slot>
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
    }
  },
  components: {

  },
  mounted() {

  },
  computed: {

  },
  data() {
    return {

    }
  },
  methods: {
    itemClick() {
      if (!this.item.disabled) {
        this.$emit('click', this.item)
      }
    }
  },
}
</script>

<style scoped lang="scss">
.item-list {
  position: relative;
  padding-left: 16px;
  padding-right: 16px;
  height: 44px;
  @include iFlex();
  @include iFlex(flex-middle);
  @include iBtnBgColor(#fff);
  &::before {
    content: '';
    height: 1px;
    position: absolute;
    left: 10px;
    right: 0;
    top: -1px;
    background-color: #eeebeb;
  }
}
</style>

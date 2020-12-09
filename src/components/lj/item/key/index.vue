<!--
 * @Author: linj
 * @Email: 993353454@qq.com
 * @Date: 2020-05-29 15:04:42
 * @Description: 关键字选择
 showSelect:只显示已选择
itemKey：要显示的字段，默认 name
item: item obj
-->
<template>
  <div class="item-key flex-center pd-lr4 pd-tb4"
    v-if="!showSelect||item.isSelect"
    :class="{ active: item.isSelect }">
    {{ item[itemKey] }}
  </div>
</template>

<script>
export default {
  props: {
    'showSelect': {
      type: Boolean,
      default: false
    },
    itemKey: {
      type: String,
      default: 'name'
    },
    item: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  components: {},
  mounted() { },
  computed: {},
  data() {
    return {}
  },
  methods: {
  }

}
</script>

<style scoped lang="scss">
.item-key {
  width: 103px;
  border-radius: 8px;
  background: rgba(246, 246, 246, 1);
  font-size: 14px;
  min-height: 26px;
  text-align: center;
  box-sizing: border-box;
  &.active {
    background-color: c(theme);
    // #ifdef MP
    background-color: $theme;
    // #endif
    color: #fff;
  }
}
</style>

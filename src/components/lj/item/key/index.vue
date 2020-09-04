<!--
 * @Author: linj
 * @Email: 993353454@qq.com
 * @Date: 2020-05-29 15:04:42
 * @Description:
-->
<template>
  <div class="item-key flex-center pd-lr4 pd-tb4"
    :class="{ active: item.isSelect,'hide':isSelect&&!item.isSelect }">
    {{ item[itemKey] }}
  </div>
</template>

<script>
export default {
  props: {
    'isSelect': {
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
    color: #fff;
  }
}
</style>

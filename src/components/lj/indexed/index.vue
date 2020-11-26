<!--
 * @Author: linj
 * @Email: 993353454@qq.com
 * @Date: 2020-11-20 14:53:51
 * @Description: indexed
 /**
 * IndexedList 索引列表
 * @description 用于展示索引列表
 * @property {Boolean} showSelect = [true|false] 展示模式
 * @value true 展示模式
 * @value false 选择模式
 * @property {Object} options 索引列表需要的数据对象
 * @event {Function} click 点击列表事件 ，返回当前选择项的事件对象
 * @example <lj-indexed-list list="" showSelect="false" @click=""></lj-indexed-list>
 */
-->
<template>
  <view class="lj-indexed-list"
    ref="list"
    id="list">
    <scroll-view :scroll-into-view="scrollViewId"
      class="lj-indexed-list__scroll"
      scroll-y>
      <view v-for="(items, idx) in lists"
        :key="idx"
        :id="'lj-indexed-list-' + idx">
        <!-- {{ items.key }}
        <div v-for="(item,index) in items.items"
          :key="index">
          {{ item.name }}
        </div> -->
        <lj-item-indexed :list="items"
          :loaded="loaded"
          :idx="idx"
          :show-select="showSelect"
          @itemClick="onClick"></lj-item-indexed>
      </view>
    </scroll-view>
    <view :class="touchmove ? 'lj-indexed-list__menu--active' : ''"
      @touchstart="touchStart"
      @touchmove.stop.prevent="touchMove"
      @touchend="touchEnd"
      class="lj-indexed-list__menu">
      <view v-for="(item, key) in lists"
        :key="key"
        class="lj-indexed-list__menu-item">
        <text class="lj-indexed-list__menu-text"
          :class="touchmoveIndex == key ? 'lj-indexed-list__menu-text--active' : ''">
          {{ item.key }}
        </text>
      </view>
    </view>
    <view v-if="touchmove"
      class="lj-indexed-list__alert-wrapper">
      <text class="lj-indexed-list__alert">{{ lists[touchmoveIndex].key }}</text>
    </view>
  </view>
</template>
<script>
// #ifdef APP-PLUS
function throttle(func, delay) {
  var prev = Date.now()
  return function () {
    var context = this
    var args = arguments
    var now = Date.now()
    if (now - prev >= delay) {
      func.apply(context, args)
      prev = Date.now()
    }
  }
}

function touchMove(e) {
  let pageY = e.touches[0].pageY
  let index = Math.floor((pageY - this.winOffsetY) / this.itemHeight)
  if (this.touchmoveIndex === index) {
    return false
  }
  let item = this.lists[index]
  if (item) {
    this.scrollViewId = 'lj-indexed-list-' + index
    this.touchmoveIndex = index
  }
}
const throttleTouchMove = throttle(touchMove, 40)
// #endif
export default {
  name: 'LjIndexedList',
  components: {
  },
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    },
    showSelect: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      lists: [],
      winHeight: 0,
      itemHeight: 0,
      winOffsetY: 0,
      touchmove: false,
      touchmoveIndex: -1,
      scrollViewId: '',
      touchmoveTimeout: '',
      loaded: false
    }
  },
  watch: {
    options: {
      handler: function () {
        this.setList()
      },
      deep: true
    }
  },
  mounted() {
    setTimeout(() => {
      this.setList()
    }, 50)
    setTimeout(() => {
      this.loaded = true
    }, 300)
  },
  methods: {
    setList() {
      let index = 0
      this.lists = []
      this.list.forEach((value, index) => {
        if (value.data.length === 0) {
          return
        }
        let indexBefore = index
        let items = value.data.map(item => {
          let obj = {}
          obj.key = value.letter
          obj.name = item
          obj.itemIndex = index
          index++
          obj.checked = item.checked ? item.checked : false
          return obj
        })
        this.lists.push({
          title: value.letter,
          key: value.letter,
          items: items,
          itemIndex: indexBefore
        })
      })
      uni.createSelectorQuery()
        .in(this)
        .select('#list')
        .boundingClientRect()
        .exec(ret => {
          this.winOffsetY = ret[0].top
          this.winHeight = ret[0].height
          this.itemHeight = this.winHeight / this.lists.length
        })
    },
    touchStart(e) {
      this.touchmove = true
      let pageY = e.touches[0].pageY
      let index = Math.floor((pageY - this.winOffsetY) / this.itemHeight)
      let item = this.lists[index]
      if (item) {
        this.scrollViewId = 'lj-indexed-list-' + index
        this.touchmoveIndex = index
      }
    },
    touchMove(e) {
      let pageY = e.touches[0].pageY
      let index = Math.floor((pageY - this.winOffsetY) / this.itemHeight)
      if (this.touchmoveIndex === index) {
        return false
      }
      let item = this.lists[index]
      if (item) {
        this.scrollViewId = 'lj-indexed-list-' + index
        this.touchmoveIndex = index
      }
      // #ifdef APP-PLUS
      throttleTouchMove && throttleTouchMove.call(this, e)
      // #endif
    },
    touchEnd() {
      this.touchmove = false
      this.touchmoveIndex = -1
    },
    onClick(e) {
      let {
        idx,
        index
      } = e
      let obj = {}
      for (let key in this.lists[idx].items[index]) {
        obj[key] = this.lists[idx].items[index][key]
      }
      let select = []
      if (this.showSelect) {
        this.lists[idx].items[index].checked = !this.lists[idx].items[index].checked
        this.lists.forEach((value, idx) => {
          value.items.forEach((item, index) => {
            if (item.checked) {
              let obj = {}
              for (let key in this.lists[idx].items[index]) {
                obj[key] = this.lists[idx].items[index][key]
              }
              select.push(obj)
            }
          })
        })
      }
      this.$emit('click', {
        item: obj,
        select: select
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.lj-indexed-list {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: row;
}

.lj-indexed-list__scroll {
  flex: 1;
}

.lj-indexed-list__menu {
  width: 24px;
  background-color: lightgrey;
  display: flex;
  flex-direction: column;
}

.lj-indexed-list__menu-item {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
}

.lj-indexed-list__menu-text {
  line-height: 20px;
  font-size: 12px;
  text-align: center;
  color: #aaa;
}

.lj-indexed-list__menu--active {
  background-color: rgb(200, 200, 200);
}

.lj-indexed-list__menu-text--active {
  color: #007aff;
}

.lj-indexed-list__alert-wrapper {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.lj-indexed-list__alert {
  width: 80px;
  height: 80px;
  border-radius: 80px;
  text-align: center;
  line-height: 80px;
  font-size: 35px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>

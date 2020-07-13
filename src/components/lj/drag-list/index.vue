<!--
 * @Author: linj
 * @Email: 993353454@qq.com
 * @Date: 2020-05-18 14:42:40
 * @Description: item拖拽插件
 * @version:0.0.1

 list:[]图片数组
 c:{
   id:'ref&id',
   listKey:'list显示名称',
   outSideInit:'是否外部触发init',
   changeFn:'',
 }
 eg:
<lj-drag-list :ref="dragListC.id"
      :c="dragListC"
      :list="list"
      @mixinChange="ComChange">
    </lj-drag-list>
-->
<template>
  <movable-area class="drag-list"
    :style="{height: currentListLength + 'px'}"
    :id="c.id">
    <view id="dlItem"
      class="drag-list-item hide-v"></view>
    <movable-view v-for="(item, index) in currentList"
      :key="index"
      :x="0"
      :y="item.y"
      direction="vertical"
      disabled
      damping="20"
      :animation="active !== index"
      class="drag-list-item"
      :id="'item-'+index"
      :class="{'active': active === index, 't-1px': item.index > 0}">
      <view class="item">{{ item[c.listKey] }}</view>
      <view class="touch-tight">
        <view class="drag-icon"></view>
      </view>
    </movable-view>
    <movable-view class="touch"
      :x="750"
      @touchstart="touchstart"
      @touchmove="touchmove"
      @touchend="touchend"></movable-view>
  </movable-area>
</template>

<script>
export default {
  name: 'DragList',
  mixins: [],
  components: {},
  data() {
    return {
      // 高度
      itemHeight: null,
      currentList: [],
      // 当前激活的item
      active: -1,
      // 当前激活的item的原index
      itemIndex: 0,
      // 距离顶部的距离
      topY: 0,
      // 偏移量
      deviationY: 0
    }
  },
  computed: {
    currentListLength() {
      console.error(this.currentList.length * this.itemHeight)
      return this.currentList.length * this.itemHeight
    }
  },
  props: {
    list: {
      type: Array,
      default: () => {
        return []
      }
    },
    c: {
      type: Object,
      default: () => {
        return {
          listKey: 'name',
        }
      }
    }
  },
  watch: {
    list(val) {
      this.onUpdateCurrentList()
    }
  },
  created() {
  },
  mounted() {
    this.init()
  },
  updated() { },
  filters: {},
  methods: {
    onUpdateCurrentList() {
      let arr = []
      this.list.map((v, k) => {
        arr.push({
          ...v,
          index: k,
          y: k * this.itemHeight
        })
      })
      this.currentList = arr
    },
    touchstart(e) {
      // 计算y轴点击位置
      var query = uni.createSelectorQuery().in(this)
      query.select('#' + this.c.id).boundingClientRect()
      query.exec((res) => {
        this.topY = res[0].top
        let touchY = e.mp.touches[0].clientY - res[0].top
        this.deviationY = touchY % this.itemHeight
        // console.log(touchY)
        for (const key in this.currentList) {
          if ((this.currentList[key].index * this.itemHeight < touchY) && ((this.currentList[key].index + 1) * this.itemHeight > touchY)) {
            this.active = Number(key)
            this.itemIndex = this.currentList[key].index
            break
          }
        }
      })
    },
    touchmove(e) {
      if (this.active < 0) return
      let touchY = (e.mp.touches[0].clientY - this.topY) - this.deviationY
      // console.log(touchY)
      this.currentList[this.active].y = touchY
      for (const key in this.currentList) {
        // 跳过当前操作的item
        if (this.currentList[key].index !== this.currentList[this.active].index) {
          if (this.currentList[key].index > this.currentList[this.active].index) {
            if (touchY > this.currentList[key].index * this.itemHeight - this.itemHeight / 2) {
              this.currentList[this.active].index = this.currentList[key].index
              this.currentList[key].index = this.currentList[key].index - 1
              this.currentList[key].y = this.currentList[key].index * this.itemHeight
              break
            }
          } else {
            if (touchY < this.currentList[key].index * this.itemHeight + this.itemHeight / 2) {
              this.currentList[this.active].index = this.currentList[key].index
              this.currentList[key].index = this.currentList[key].index + 1
              this.currentList[key].y = this.currentList[key].index * this.itemHeight
              break
            }
          }
        }
      }
    },
    touchend(e) {
      if ((this.itemIndex !== this.currentList[this.active].index) && (this.active > -1)) {
        this.$emit('change', this.currentList)
        if (this.$f.safeData(this.c, 'changeFn')) {
          this.$emit('mixinChange', {
            fn: this.c.changeFn,
            // 操作值
            data: this.currentList,
          })
        }
      }
      this.currentList[this.active].y = this.currentList[this.active].index * this.itemHeight
      this.active = -1
    },
    async init() {
      let temRes = await this.GetDom('#dlItem')
      console.error('drag-list init', temRes)
      this.itemHeight = temRes.height
      this.onUpdateCurrentList()
    }
  }
}
</script>

<style lang='scss' scoped>
.drag-list {
  width: 100%;
}
.drag-list-item {
  position: absolute !important;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0;
  margin: 0;
  background: #fff;
  padding: 0 15px;
  box-sizing: border-box;
  height: 50px;
  .item {
    flex: 1;
  }
  .touch-tight {
    width: 24px;
    display: flex;
    justify-content: center;
  }
}
.touch {
  height: 100%;
  width: 50px;
}
.drag-icon {
  display: inline-block;
  width: 24px;
  height: 12px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAYCAYAAAC8/X7cAAAAAXNSR0IArs4c6QAAAEtJREFUWAnt1cEJACAMA0B1/506moIr5FEK51+Jl0d2Vd01+JzB2X90H5jeoPwECBDIBLYlzgDj25Y4JvQAAQIERgtY4u76LHF3Aw8rGQnK3sYAXQAAAABJRU5ErkJggg==)
    0 0 no-repeat;
  background-size: 100% auto;
}
.active {
  box-shadow: 0 0 20px #dddddd;
  z-index: 99;
}
</style>

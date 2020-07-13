<!--
 * @Author: linj
 * @Email: 993353454@qq.com
 * @Date: 2020-05-18 14:42:40
 * @Description: item拖拽插件
 * @version:0.0.1

 list:[]图片数组
 c:{
   id:'ref&id',
   listName:'list在this下的路径',
   listKey:'图片对应obj下标',
   isView:'查看模式',
   maxlength:'list最大长度',
   outSideInit:'是否外部触发init',
   changeFn:'',
 }
 eg:
<lj-drag :ref="dragC.id"
      :c="dragC"
      :list="list"
      @mixinChange="ComChange">
    </lj-drag>
-->
<template>
  <view @touchmove.stop.prevent="moveHandle">
    <movable-area class="c-drag"
      inertia
      :ref="c.id||'dragBox'"
      :id="c.id||'dragBox'">
      <movable-view class="drag-item p-r"
        v-for="(item, index) in list"
        :key="index"
        :id="'item-' + index"
        :class="{'mg-r16':(index+1)%3}"
        @touchstart="touchstart($event,index)"
        @touchmove="touchmove"
        @touchend="touchend">
        <view class="img-item">
          <block v-if="c.listKey">
            <image :src="item[c.listKey]"
              mode="aspectFill"
              :class="(hoverImgIndex==='item-'+index)?'select':''"></image>
          </block>
          <block v-else>
            <image :src="item"
              mode="aspectFill"
              :class="(hoverImgIndex==='item-'+index)?'select':''"></image>
          </block>
        </view>
        <i class="i-del"
          v-if="!c.isView"
          @click.stop="deleteImg(index)"></i>
      </movable-view>
      <slot name="add-item">
        <!--  上传图片 -->
        <div class="drag-item add-item flex-center"
          v-show="list.length < c.maxlength && !c.isView"
          @click.stop="addImg(c.maxlength)">
          <i class="i-add"></i>
        </div>
      </slot>
      <movable-view v-if="moveItem"
        :animation="false"
        class="move-item drag-item"
        :x="x"
        :y="y"
        direction="all"
        @change="onChange">
        <view class="img-item">
          <block v-if="c.listKey">
            <image :src="moveItem[c.listKey]"
              mode="aspectFill"></image>
          </block>
          <block v-else>
            <image :src="moveItem"
              mode="aspectFill"></image>
          </block>
        </view>
      </movable-view>
    </movable-area>
  </view>
</template>

<script>
import { uploadImgs } from '../../../utils/microApi'
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
        return {}
      }
    }
  },
  components: {},
  data() {
    return {
      isMove: false,
      imgSize: 0,
      itemList: [],
      // 整个可移动区域元素
      boxDom: {},
      x: 0,
      y: 0,
      nowIndex: 0,
      moveItem: '',
      areaBoxTop: 0,
      // 当前移动到的index
      hoverImgIndex: '',
      // 在item内坐标
      inBoxXY: {}
    }
  },
  methods: {
    moveHandle() {

    },
    onChange(e) {
      // console.log(e.detail)
    },
    async touchstart(argEvent, argIndex) {
      if (this.c.isView) {
        return
      }
      if (!this.c.outSideInit) {
        await this.init()
      }
      // 保存当前所选择的图片索引
      this.nowIndex = argIndex
      // 获取拖拽区域的上边距和下边距
      let areaBoxTop = this.boxDom.top
      let areaBoxLeft = this.boxDom.left
      // console.log(this.boxDom)

      // 设置可移动方块的初始位置为当前所选中图片的位置坐标
      this.x = this.$f.safeData(this.itemList, argIndex, { x: 0, y: 0 }).x
      this.y = this.$f.safeData(this.itemList, argIndex, { x: 0, y: 0 }).y
      // 显示可移动方块
      this.moveItem = this.list[argIndex]
      var x = argEvent.changedTouches[0].clientX - areaBoxLeft
      var y = argEvent.changedTouches[0].clientY - areaBoxTop
      // 保存鼠标在图片内的坐标
      this.inBoxXY = {
        x: x - this.$f.safeData(this.itemList, argIndex, { x: 0, y: 0 }).x,
        y: y - this.$f.safeData(this.itemList, argIndex, { x: 0, y: 0 }).y,
      }
    },
    touchmove(e) {
      if (this.c.isView) {
        return
      }
      this.isMove = true
      let areaBoxTop = this.boxDom.top
      let areaBoxLeft = this.boxDom.left
      let imgSize = this.imgSize
      // 重置为以拖拽盒子左上角为坐标原点
      var x = e.changedTouches[0].clientX - areaBoxLeft
      var y = e.changedTouches[0].clientY - areaBoxTop
      this.x = x - this.inBoxXY.x
      this.y = y - this.inBoxXY.y

      this.itemList.map(async (v, k) => {
        if (x > v.x && x < v.x + imgSize && y > v.y && y < v.y + imgSize) {
          this.hoverImgIndex = 'item-' + k
        }
      })
    },
    touchend(e) {
      console.log('end')
      if (this.c.isView) {
        return
      }
      // 必须有移动才触发结束
      if (!this.isMove) {
        setTimeout(() => {
          this.moveItem = ''
          this.hoverImgIndex = ''
        }, 10)
        return
      }
      this.isMove = false
      let areaBoxTop = this.boxDom.top
      let areaBoxLeft = this.boxDom.left
      let imgSize = this.imgSize
      // 重置为以拖拽盒子左上角为坐标原点
      var x = e.changedTouches[0].clientX - areaBoxLeft
      var y = e.changedTouches[0].clientY - areaBoxTop

      let temLen = this.list.length
      for (let i = 0; i < temLen; i++) {
        let v = this.itemList[i]
        if (x > v.x && x < v.x + imgSize && y > v.y && y < v.y + imgSize) {
          let temItem = this.list[this.nowIndex]
          this.list[this.nowIndex] = this.list[i]
          this.list[i] = temItem
        }
      }
      // 移动结束隐藏可移动方块
      this.moveItem = ''
      this.hoverImgIndex = ''
      this.$emit('mixinChange', { key: this.c.listName, data: this.list })
    },
    async addImg() {
      // todo
      this.list.push('/static/img/1.jpg')
      let res = await uploadImgs()
      console.error(res)
      // this.$emit('mixinChange', { key: this.c.listName, data: this.list })
    },
    deleteImg(argIndex) {
      this.list.splice(argIndex, 1)
      this.$emit('mixinChange', { key: this.c.listName, data: this.list })
    },
    async init() {
      let res = await this.GetDom('#' + this.c.id)
      this.boxDom = res
      console.log('drag init:', res)
      // 设置区域内所有item的左上角坐标
      this.list.map(async (v, k) => {
        let temRes = await this.GetDom('#item-' + k)
        this.imgSize = temRes.width
        if (!this.itemList[k]) {
          this.itemList[k] = { x: 0, y: 0 }
        }
        this.itemList[k].x = temRes.left - res.left
        this.itemList[k].y = temRes.top - res.top
      })
    }
  },
  mounted() {
    this.init()
  }
}
</script>

<style lang="scss">
.c-drag {
  width: 100%;
  height: 100%;
  @include iFlex(flex-wrap);
  .drag-item {
    width: 103px;
    height: 103px;
    margin-bottom: 10px;
    box-sizing: border-box;
    .img-item {
      width: 103px;
      height: 103px;
      overflow: hidden;
      image {
        border-radius: 4px;
        width: 103px;
        height: 103px;
        transition: all 0.5s;
        vertical-align: center;
      }
    }
  }
  .add-item {
    @include iBorder1px(#8e8e93);
  }
  .move-item {
    opacity: 0.8;
    z-index: 1;
  }

  .select {
    transform: scale(1.3);
  }
  .i-del {
    position: absolute;
    z-index: 2;
    padding: 8px;
    top: -16px;
    right: -16px;
  }
}
</style>

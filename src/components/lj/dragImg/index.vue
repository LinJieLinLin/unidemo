<template>
  <view>
    <movable-area class="movarea">
      <!-- <view class="imgBox">
        <image :style="{width: imgSize+'px',height:imgSize+'px'}"
          :ref="'img'+idx"
          v-for="item,idx in imgList"
          :src="item.url"
          mode="aspectFit"
          @touchstart="tstr(idx,$event)"
          @touchmove="tsmo"
          @touchend="toend"></image>
      </view> -->
      <movable-view v-if="moveSrc"
        :animation="false"
        class="moveV"
        :x="x"
        :y="y"
        direction="all"
        @change="onChange">
        <image :src="moveSrc"
          mode="aspectFit"
          :style="{width: imgSize+'px',height:imgSize+'px'}"></image>
      </movable-view>
    </movable-area>
  </view>
</template>

<script>
export default {
  props: {
    imgList: {
      type: Array,
      default: function () {
        return []
      }
    },
    imgSize: {
      type: Number,
      default: function () {
        return 80
      }
    },
  },
  components: {

  },
  data() {
    return {
      x: 0,
      y: 0,
      idx: 0,
      moveSrc: ''
    }
  },
  methods: {
    onChange(e) {
      // console.log(e.detail)
    },
    tstr(e, s) {
      // console.log(this)
      this.imgList.forEach((item, idx) => {
        // console.log(item,idx)
        item.x = this.$refs['img' + idx][0].$el.getBoundingClientRect().x
        item.y = this.$refs['img' + idx][0].$el.getBoundingClientRect().y - this.$refs['img0'][0].$el.getBoundingClientRect()
          .top
        // console.log(this.$refs['img' + idx][0].$el.getBoundingClientRect())
      })
      var x = s.changedTouches[0].pageX
      var y = s.changedTouches[0].pageY
      // console.log(x, y, 0)
      this.x = x - 40
      this.y = y - 40
      this.moveSrc = this.imgList[e].url
      this.idx = e
    },
    tsmo(e) {
      const _this = this
      var x = e.changedTouches[0].pageX
      var y = e.changedTouches[0].pageY
      this.x = x - 40
      this.y = y - 40
      // console.log(x, y, 1)
      this.imgList.forEach((item, idx) => {
        if (x > item.x && x < item.x + _this.imgSize && y > item.y && y < item.y + _this.imgSize) {
          _this.$refs['img' + idx][0].$el.style.transform = 'scale(1.2)'
          _this.$refs['img' + idx][0].$el.style.zIndex = '2'
        } else {
          _this.$refs['img' + idx][0].$el.style.transform = 'scale(1)'
          _this.$refs['img' + idx][0].$el.style.zIndex = '1'
        }
      })
    },
    toend(e) {
      const _this = this
      var x = e.changedTouches[0].pageX
      var y = e.changedTouches[0].pageY
      // console.log(x, y, 2);
      this.imgList.forEach((item, idx) => {
        if (x > item.x && x < item.x + _this.imgSize && y > item.y && y < item.y + _this.imgSize) {
          _this.imgList[_this.idx].url = _this.imgList[idx].url
          _this.imgList[idx].url = _this.moveSrc
          _this.$refs['img' + idx][0].$el.style.transform = 'scale(1)'
        }
      })
      this.moveSrc = ''
      this.x = 0
      this.y = 0
      this.$emit('moveEndList', this.imgList)
    }
  },
  mounted() {
    // console.log(this)
  }
}
</script>

<style lang="less">
page {
  box-sizing: border-box;
  height: 100%;
}

.movarea {
  width: 100%;
  height: 200px;
  background-color: #0901ff;
  display: flex;
  flex-direction: row;
}

.imgBox {
  width: 100%;
  height: 160px;
  background-color: #09bb07;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  image {
    width: 80px;
    height: 80px;
    transition: all 0.5s;
  }
}

.moveV {
  // width: 80px;
  // height: 80px;
  box-shadow: 0 0 20px 12px #00000060;
  opacity: 0.8;
  z-index: 9999;
  // background-color: #ff576d;
  image {
    width: 80px;
    height: 80px;
  }
}
</style>

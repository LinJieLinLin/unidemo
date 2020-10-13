<!--
 * @Author: linj
 * @Email: 993353454@qq.com
 * @Date: 2020-09-08 18:14:25
 * @Description:生成海报插件
 posterC:{
   createPoster: 调用生成函数
   posterImg: 生成的图片base64,
   showPoster: true时，调用createPoster会显示海报
 }
 eg: <lj-poster :ref="posterC.id"
      :c="posterC"
      @mixinChange="ComChange">
    </lj-poster>
-->

<template>
  <div>
    <div class="poster"
      @click="createPoster"
      :ref="refId">
      <slot></slot>
    </div>
    <div class="poster-view slide-up-enter-active"
      :class="{'flex-center':!isTooHeight}"
      v-if="showPoster"
      @click.stop="closePoster">
      <div class="p-r"
        v-if="!isTooHeight">
        <div class="close flex-center"
          @click.stop="closePoster">
          &#215;
        </div>
        <image :src="c.posterImg"
          alt=""></image>
        <div class="ta-c b-info">长按保存或发送给朋友吧！</div>
      </div>
      <block v-else>
        <div class="close flex-center flex"
          @click.stop="closePoster">
          &#215;
        </div>
        <image class="image-view"
          :src="c.posterImg"
          alt=""></image>
        <div class="ta-c b-info"
          :class="{fixed:isTooHeight}">
          长按保存或发送给朋友吧！!
        </div>
      </block>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import html2canvas from "html2canvas";
import { getSystemInfo, hideLoading, showLoading } from '@utils/microApi';
export default {
  props: {
    c: {
      type: Object,
      default: () => {
        return {};
      },
      required: true
    }
  },
  components: {},
  mounted() {
    this.c.createPoster = this.createPoster;
  },
  computed: {},
  data() {
    return {
      refId: "poster" + Date.now(),
      showPoster: false,
      isTooHeight: false,
    };
  },
  methods: {
    closePoster() {
      this.showPoster = false;
    },
    async createPoster() {
      if (this.c.posterImg && this.c.showPoster) {
        this.showPoster = true;
        return;
      }
      showLoading()
      this.showPoster = false;
      let scale = window.devicePixelRatio || 1;
      let posterBody = this.$refs[this.refId].firstChild;
      if (posterBody.scrollHeight > getSystemInfo().windowHeight) {
        this.isTooHeight = true
      }
      let option = {
        imageTimeout: this.c.imageTimeout || 30000,
        allowTaint: true,
        backgroundColor: this.c.backgroundColor || null,
        height: posterBody.scrollHeight,
        width: posterBody.scrollWidth,
        y: document.documentElement.scrollTop || 0,
        scrollY: document.documentElement.scrollTop || 0,
        scale: scale,
        useCORS: true
      };
      let canvas = await html2canvas(posterBody, option).catch(error => {
        console.error(error);
      });
      console.log(option);

      hideLoading()
      if (canvas) {
        this.c.posterImg = canvas.toDataURL("image/png");
        this.$emit('change', this.c.posterImg)
        if (this.c.posterImg && this.c.showPoster) {
          this.showPoster = true
        }
      } else {
        console.error('生成海报失败')
      }
    }
  }
};
</script>

<style scoped lang="scss">
.poster {
  position: fixed;
  z-index: 1;
  left: 100%;
  // left: 50%;
  // left: 0%;
  width: 100%;
  top: 0;
  height: 100vh;
  right: 0;
  overflow: auto;
}
.poster-view {
  position: fixed;
  z-index: 2;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  overflow: auto;
  .close {
    position: absolute;
    width: 40px;
    height: 40px;
    font-size: 26px;
    top: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 1000px;
    z-index: 2;
    &.fixed {
      position: fixed;
    }
  }
  img {
    width: 100%;
    height: auto;
    display: block;
  }
  .b-info {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 4px 0;
    background-color: rgba(0, 0, 0, 0.3);
    &.fixed {
      position: fixed;
    }
  }
}
</style>

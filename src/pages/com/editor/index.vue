<!--
 * @Author: linj
 * @Email: 993353454@qq.com
 * @Date: 2020-05-27 17:08:16
 * @Description:
-->
<template>
  <view class="pd-lr10">
    <view class="page flex-column pd-lr10">
      <input class="pd-f10 mg-tb10 flex0 bg-w"
        maxlength="100"
        v-model="data.title"
        confirm-type="done"
        placeholder="请输入标题" />
      <editor class="flex1 ql-editor"
        id="editor"
        placeholder="请输入内容"
        @ready="eReady"
        show-img-toolbar></editor>
      <view class="tool-bar flex flex0 mg-b10 c-theme">
        <div class="item"
          @click="addImg">
          <lj-icon i="i-img"
            class="fs-18"></lj-icon>
          图片
        </div>
        <div class="item"
          @click="undo">
          <lj-icon i="i-redo"
            class="fs-18 undo"></lj-icon>
          撤销
        </div>
        <div class="item"
          @click="redo">
          <lj-icon i="i-redo"
            class="fs-18"></lj-icon>
          重做
        </div>
        <div class="item"
          @click="submit">
          <lj-icon i="i-save"
            class="fs-18"></lj-icon>
          保存
        </div>
        <div class="item">要改为组件</div>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {

  },
  components: {

  },
  onLoad(argData) {

  },
  onShow() {

  },
  onReady() {
    this.init()
  },
  onUnload() {

  },
  onShareAppMessage(argData) {

  },
  async onPullDownRefresh() {
    // console.log('下拉')
    uni.stopPullDownRefresh()
  },
  async onReachBottom() {
    // console.log('上拉')
  },
  computed: {

  },
  data() {
    return {
      useDom: false,
      editorHeight: '',
      editorCtx: null,
      data: {
        title: '',
        content: '<p>demo</p>',
      }
    }
  },
  methods: {
    // 撤销
    undo() {
      this.editorCtx.undo()
    },
    redo() {
      this.editorCtx.redo()
    },
    // 初始化完成
    async eReady(argData) {
      let res = await this.GetDom('#editor')
      this.editorCtx = res.context
      this.editorCtx.setContents({ html: this.data.content })
    },
    submit() {
      console.log('submit')
    },
    // 添加图片
    async addImg() {
      let res = await this.$f.P('chooseImage', {
        count: 9
      })
      res.tempFilePaths.map(v => {
        let imgData = {
          src: v,
          width: '100%',
          alt: '',
          extClass: '',
          success: res => {
            console.log(res)
          }
        }
        this.editorCtx.insertImage(imgData)
      })
    },
    async init() {
    }
  },
}
</script>

<style lang="scss">
.ql-editor {
  padding: 10px 8px;
  background-color: #c0c0c0;
}
.tool-bar {
  background-color: #fff;
  .item {
    height: 40px;
    padding: 10px;
    box-sizing: border-box;
    @include iBtnBgColor(#fff);
    @include iFlex('flex-center');
  }
  .undo {
    transform: rotateY(180deg);
  }
}
</style>

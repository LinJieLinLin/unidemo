<!--
 * @Author: linj
 * @Email: 993353454@qq.com
 * @Date: 2020-05-27 17:08:16
 * @Description:
-->
<template>
  <view class="pd-lr10">
    <block v-if="useDom">
      <view class="pd-lr10">
        <input id="title"
          class="pd-tb10 mg-b10"
          maxlength="100"
          v-model="data.title"
          confirm-type="done"
          placeholder="请输入标题" />
        <editor :style="{height:editorHeight+'px'}"
          class="flex11 ql-editor"
          id="editor"
          placeholder="请输入内容"
          @ready="eReady"
          show-img-toolbar></editor>
      </view>
    </block>
    <view v-else
      class="page flex-column pd-lr10">
      <input class="pd-tb10 mg-b10 flex0"
        maxlength="100"
        v-model="data.title"
        confirm-type="done"
        placeholder="请输入标题" />
      <editor class="flex1 ql-editor"
        id="editor"
        placeholder="请输入内容"
        @ready="eReady"
        show-img-toolbar></editor>
      <view class="tool-bar flex flex0 mg-t10">
        <div class="item"
          @click="addImg">
          图片
        </div>
        <div class="item"
          @click="undo">
          撤销
        </div>
        <div class="item"
          @click="redo">
          重做
        </div>
        <div class="item"
          @click="submit">
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
      console.log('init')
      let res = await this.$f.P('getSystemInfo')
      let titleDom = await this.GetDom('#title')
      this.editorHeight = res.windowHeight - titleDom.height
    }
  },
}
</script>

<style lang="scss">
.ql-editor {
  background-color: #c0c0c0;
}
.tool-bar {
  .item {
    height: 30px;
    padding: 10px;
    box-sizing: border-box;
    @include iFlex('flex-center');
  }
}
</style>

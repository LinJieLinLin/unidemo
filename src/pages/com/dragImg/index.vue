<!--
 * @Author: linj
 * @Email: 993353454@qq.com
 * @Date: 2020-05-18 14:43:59
 * @Description:
-->
<template>
  <div class="drag pd-lr16">
    <uni-section title="图片为普通数组"
      type="line"></uni-section>
    <lj-drag-img class="pd-t20"
      :c="dragC"
      :list="list"
      :d="list"
      @mixinChange="ComChange">
    </lj-drag-img>
    <uni-section title="图片obj数组，slot添加"
      type="line"></uni-section>
    <lj-drag-img class="pd-t20"
      :ref="dragC1.id"
      :c="dragC1"
      :list="listObj"
      @mixinChange="ComChange">
      <template v-slot:add-item>
        自定义
      </template>
    </lj-drag-img>
    <uni-section title="仅查看"
      type="line"></uni-section>
    <lj-drag-img class="pd-t20"
      :ref="dragC.id"
      :c="dragC2"
      :list="list"
      @mixinChange="ComChange">
    </lj-drag-img>
    <button class="mg-t10"
      @click="DialogShow({msg:'调用了弹窗'})">
      提示
    </button>
    <lj-dialog :c="DialogC"
      @mixinChange="ComChange">
    </lj-dialog>
  </div>
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
      list: [
        'http://static.gdtn.io/imgs/1.jpg',
        'http://static.gdtn.io/imgs/2.jpg',
        'http://static.gdtn.io/imgs/3.jpg',
        'http://static.gdtn.io/imgs/4.jpg',
        'http://static.gdtn.io/imgs/5.jpg',
        'http://static.gdtn.io/imgs/6.jpg',
      ],
      listObj: [
        { url: '/static/img/1.jpg', },
        { url: '/static/img/2.jpg', },
        { url: '/static/img/3.jpg', },
        { url: '/static/img/4.jpg', },
        { url: '/static/img/5.jpg', },
        { url: '/static/img/6.jpg', },
        { url: '/static/img/7.jpg', },
      ],
      dragC: {
        id: 'drag0',
        maxlength: 9,
        listName: 'list',
      },
      dragC1: {
        id: 'drag0',
        listKey: 'url',
        maxlength: 9,
        listName: 'listObj',
      },
      dragC2: {
        id: 'drag2',
        isView: true,
        listName: 'list',
      }
    }
  },
  methods: {
    onDragSortChange(e) {
      console.log(e)
      // frontData 插到谁后面
      // data 操作的数据
    },
    dragChange(argData) {
      console.log(argData)
    },
    async init() {
      console.log('init')
      await this.$f.sleep(1000)
      this.$refs[this.dragC.id].init()
    }
  },
}
</script>

<style lang="scss">
.drag {
  /deep/.drag-item {
    width: 103px;
    height: 103px;
    margin-bottom: 10px;
    .img-item {
      width: 103px;
      height: 103px;
      image {
        border-radius: 4px;
        width: 103px;
        height: 103px;
      }
    }
  }
}
</style>

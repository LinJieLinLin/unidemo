<!--
 * @Author: linj
 * @Email: 993353454@qq.com
 * @Date: 2020-05-18 14:43:59
 * @Description:
-->
<template>
  <div class="drag pd-lr16">
    <div class="b fs-18 pd-tb8">图片为普通数组</div>
    <lj-drag-img class="pd-t20"
      :c="dragC"
      :list="list"
      :d="list"
      @mixinChange="ComChange">
    </lj-drag-img>
    <div class="b fs-18 pd-tb8">图片obj数组，slot添加</div>
    <lj-drag-img class="pd-t20"
      :ref="dragC1.id"
      :c="dragC1"
      :list="listObj"
      @mixinChange="ComChange">
      <template #add-item>
        <div class="drag-item add-item flex-center"
          v-show="listObj.length < dragC1.maxlength && !dragC1.isView"
          @click.stop="addImg(dragC1.maxlength)">
          <i class="i-add"></i>
          自定义
        </div>
      </template>
    </lj-drag-img>
    <div class="b fs-18 pd-tb8">仅查看</div>
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
import { uploadImgs } from '../../../utils/microApi'
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
        'https://img.lj4.top/test/1.jpg',
        'https://img.lj4.top/test/2.jpg',
        'https://img.lj4.top/test/3.jpg',
        'https://img.lj4.top/test/4.jpg',
        'https://img.lj4.top/test/5.jpg',
        'https://img.lj4.top/test/6.jpg',
      ],
      listObj: [
        { url: 'https://img.lj4.top/test/1.jpg', },
        { url: 'https://img.lj4.top/test/2.jpg', },
        { url: 'https://img.lj4.top/test/3.jpg', },
        { url: 'https://img.lj4.top/test/4.jpg', },
        { url: 'https://img.lj4.top/test/5.jpg', },
        { url: 'https://img.lj4.top/test/6.jpg', },
        { url: 'https://img.lj4.top/test/7.jpg', },
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
    async addImg() {
      // todo
      let res = await uploadImgs()
      res.map(v => {
        this.listObj.push({ url: v.tempFilePath })
      })
      // this.$emit('mixinChange', { key: this.c.listName, data: this.list })
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
  ::v-deep.drag-item {
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

<!--
 * @Author: linj
 * @Email: 993353454@qq.com
 * @Date: 2020-08-12 11:57:09
 * @Description:form组件
-->

<template>
  <view class="lj-form">
    <div v-for="(item,index) in formList"
      :key="index">
      <block v-if="item.type==='itemList'">
        <view class="pd-l20 pd-tb10 fs-20 bg-w b mg-t10">{{ item.name }}</view>
        <div v-for="(item1,index1) in item.range"
          :key="index1">
          <div v-for="(item2,index2) in item1"
            :key="index2">
            <lj-form :item="item2"
              :c="formC"
              @formChange="formChange($event,'formList.'+index+'.range.'+index1+'.'+index2)"></lj-form>
          </div>
        </div>
      </block>
      <block v-else>
        <lj-form :item="item"
          :c="formC"
          @formChange="formChange($event,'formList.'+index)"></lj-form>
      </block>
    </div>
    <uni-section title="查看模式"
      type="line"></uni-section>
    <div v-for="(item,index) in formList"
      :key="'view'+index">
      <block v-if="item.type==='itemList'">
        <view class="">{{ item.name }}</view>
        <div v-for="(item1,index1) in item.range"
          :key="'view'+index1">
          <div v-for="(item2,index2) in item1"
            :key="'view'+index2">
            <lj-form :item="item2"
              :c="formViewC"></lj-form>
          </div>
        </div>
      </block>
      <block v-else>
        <lj-form :item="item"
          :c="formViewC"></lj-form>
      </block>
    </div>
  </view>
</template>

<script>
import { px2vw } from '../../../utils/j'
let formList = [{
  name: '用户名',
  key: 'username',
  type: 'text',
  isFail: true,
}, {
  name: '密码',
  key: 'password',
  type: 'password',
  hideReset: true,
  require: true,
  class: '',
}, {
  name: '验证码',
  key: 'code',
  type: 'code',
  class: 'mg-t10',
}, {
  name: '成员',
  key: 'manList',
  type: 'itemList',
  class: 'mg-t10',
  range: [
    [
      {
        name: '用户名',
        key: 'username',
        type: 'text',
      },
      {
        name: '年龄',
        key: 'age',
        type: 'number',
      },
      {
        name: '身高',
        key: 'height',
        type: 'digit',
      },
    ], [
      {
        name: '用户名',
        key: 'username',
        type: 'text',
      },
      {
        name: '年龄',
        key: 'age',
        type: 'number',
      },
      {
        name: '身高',
        key: 'height',
        type: 'digit',
      },
    ],
  ],
}]
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

  },
  onUnload() {

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
      formC: {
        changeFn: 'onChange',
        titleStyle: {
          width: px2vw(50),
          height: 'auto'
        },
      },
      formViewC: {
        isView: true,
        changeFn: 'onChange',
        titleStyle: {
          width: px2vw(50)
        },
      },
      formList: [],
      formObj: [],
    }
  },
  methods: {
    formChange(argData, argKey) {
      let nowItem = this.$f.safeData(this, argKey)
      if (nowItem) {
        this.$f.checkInput(nowItem, argData)
      } else {
        console.error(argKey + '不存在')
      }
    },
    getInputList() {
      let temArr = []
      formList.map(v => {
        let temItem
        if (v.type === 'itemList') {
          v.range.map((v1, k1) => {
            return v1.map((v2, k2) => {
              v.range[k1][k2] = this.$f.getObj('inputObj', v2)
            })
          })
          temItem = v
        } else {
          temItem = this.$f.getObj('inputObj', v)
          this.formObj[v.key] = temItem
        }
        temArr.push(temItem)
      })
      this.formList = temArr
    },
    init() {
      this.getInputList()
    }
  },
}
</script>

<style lang="scss">
.lj-form {
}
</style>

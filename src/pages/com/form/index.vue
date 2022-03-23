<!--
 * @Author: linj
 * @Email: 993353454@qq.com
 * @Date: 2020-08-12 11:57:09
 * @Description:form组件
-->

<template>
  <view class="lj-item-form">
    <div v-for="(item,index) in formList"
      :key="index">
      <block v-if="item.type==='itemList'">
        <view class="pd-l20 pd-tb10 fs-20 bg-w b mg-t10">{{ item.name }}</view>
        <div v-for="(item1,index1) in item.range"
          :key="index1">
          <div v-for="(item2,index2) in item1"
            :key="index2">
            <lj-item-form :item="item2"
              :c="formC"
              @mixinChange="ComChange($event,'formList.'+index+'.range.'+index1+'.'+index2)"></lj-item-form>
          </div>
        </div>
      </block>
      <block v-else>
        <lj-item-form :item="item"
          :c="formC"
          @mixinChange="ComChange($event,'formList.'+index)"></lj-item-form>
      </block>
    </div>
    <div class="b fs-18 pd-tb8 pd-lr20">查看模式</div>
    <div v-for="(item,index) in formList"
      :key="index">
      <block v-if="item.type==='itemList'">
        <view class="pd-lr20">{{ item.name }}</view>
        <div v-for="(item1,index1) in item.range"
          :key="getKey(index1)">
          <div v-for="(item2,index2) in item1"
            :key="getKey(index2)">
            <lj-item-form :item="item2"
              :c="formViewC"></lj-item-form>
          </div>
        </div>
      </block>
      <block v-else>
        <lj-item-form :item="item"
          :c="formViewC"></lj-item-form>
      </block>
    </div>
    <lj-dialog :c="DialogC"
      @mixinChange="ComChange">
    </lj-dialog>
  </view>
</template>

<script>
import { px2vw } from 'lj-utils'
import { RegexpObj } from '@/utils/project.js'
let formList = [{
  name: '我是隐藏的',
  key: 'hide',
  type: 'text',
  require: true,
  isHide: true,
  tips: '请输入文字，规则如下：',
}, {
  name: '文字',
  key: 'username',
  type: 'text',
  require: true,
  tips: '请输入文字，规则如下：',
}, {
  name: '密码',
  key: 'password',
  type: 'password',
  require: true,
  class: '',
}, {
  name: '数字',
  key: 'age',
  type: 'number',
  require: true,
  class: '',
}, {
  name: '小数',
  key: 'height',
  type: 'digit',
  require: true,
  placeholder: '请输入,单位cm',
  max: 300,
  min: 10,
  unit: 'cm'
}, {
  name: '证明',
  key: 'idcard',
  type: 'idcard',
  require: true,
}, {
  name: '数字文字',
  key: 'bank',
  type: 'text',
  maxlength: 20,
  trim: true,
  pattern: RegexpObj.number,
  require: true,
}, {
  name: '验证码',
  key: 'imgCode',
  type: 'text',
  extType: 'imgCode',
  img: 'https://img.lj4.top/test/1.jpg',
  pattern: RegexpObj.letterNumber,
  maxlength: 6,
  require: true,
}, {
  name: 'phone文字',
  key: 'phone',
  type: 'text',
  pattern: RegexpObj.phone,
  maxlength: 11,
  require: true,
}, {
  name: '数组form',
  key: 'manList',
  type: 'itemList',
  class: 'mg-t10',
  range: [
    [
      {
        name: '文字长5',
        key: 'username',
        type: 'text',
        require: true,
        maxlength: 5
      },
      {
        name: '数字最小1',
        key: 'age',
        require: true,
        type: 'number',
        min: 1
      },
      {
        name: '小数最大5',
        key: 'height',
        type: 'digit',
        require: true,
        max: 5,
        placeholder: '请输入小数',
        unit: 'cm'
      },
    ], [
      {
        name: '文字长5',
        key: 'username',
        type: 'text',
        maxlength: 5
      },
      {
        name: '数字最小1',
        key: 'age',
        type: 'number',
        min: 1
      },
      {
        name: '小数最大5',
        key: 'height',
        type: 'digit',
        max: 5,
        placeholder: '请输入小数',
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
        // hideLeft: true,
        fn: {
          formChange: 'formChange'
        },
        titleStyle: {
          width: px2vw(60),
          height: 'auto'
        },
      },
      formViewC: {
        isView: true,
        titleStyle: {
          width: px2vw(60)
        },
      },
      formList: [],
      formObj: [],
    }
  },
  methods: {
    getKey(argKey) {
      return Date.now() + argKey
    },
    formChange(argData, argKey) {
      let nowItem = this.$f.safeData(this, argKey)
      if (nowItem) {
        nowItem = this.$f.checkInput(nowItem, argData)
      } else {
        console.error(argKey + '不存在')
      }
      // 额外处理
      console.log('当前item', nowItem)
    },
    getInputList() {
      let temArr = []
      formList.map(v => {
        let temItem
        if (v.type === 'itemList') {
          v.range.map((v1, k1) => {
            return v1.map((v2, k2) => {
              temItem = this.$f.getObj('inputObj', v2)
              this.formObj[v.key + '-range-' + k1 + '-' + k2 + '-' + v2.key] = temItem
              v.range[k1][k2] = temItem
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
      console.warn(this.formObj)
    },
    init() {
      this.getInputList()
    }
  },
}
</script>

<style lang="scss">
.lj-item-form {
}
</style>

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
          @mixinChange="ComChange($event,'formList.'+index)"></lj-form>
      </block>
    </div>
    <div class="b fs-18 pd-tb8">查看模式</div>
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
    <lj-dialog :c="DialogC"
      @mixinChange="ComChange">
    </lj-dialog>
  </view>
</template>

<script>
import { px2vw } from '../../../utils/j'
import { RegexpObj } from '@/utils/project.js'
let formList = [{
  name: '我是隐藏的',
  key: 'hide',
  type: 'text',
  require: true,
  isHide: true,
  tips: '请输入用户名，规则如下：',
}, {
  name: '用户名',
  key: 'username',
  type: 'text',
  require: true,
  tips: '请输入用户名，规则如下：',
}, {
  name: '密码',
  key: 'password',
  type: 'password',
  require: true,
  class: '',
}, {
  name: '年龄',
  key: 'age',
  type: 'number',
  require: true,
  class: '',
}, {
  name: '身高',
  key: 'height',
  type: 'digit',
  require: true,
  placeholder: '请输入身高,单位cm',
  max: 300,
  min: 10,
  unit: 'cm'
}, {
  name: '身份证',
  key: 'idcard',
  type: 'idcard',
  require: true,
}, {
  name: '银行卡号',
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
  name: '手机号',
  key: 'phone',
  type: 'text',
  pattern: RegexpObj.phone,
  maxlength: 11,
  require: true,
}, {
  name: '成员',
  key: 'manList',
  type: 'itemList',
  class: 'mg-t10',
  range: [
    [
      {
        name: '姓名',
        key: 'username',
        type: 'text',
        maxlength: 5
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
        placeholder: '请输入身高,单位cm',
        unit: 'cm'
      },
    ], [
      {
        name: '姓名',
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
.lj-form {
}
</style>

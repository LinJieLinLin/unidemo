<!--
 * @author: linj
 * @email: 993353454@qq.com
 * @Date: 2021-07-06 09:59:58
 * @description:
-->
<template>
  <div class="mg-f10">
    <lj-item-list :item="author"
      :c="listC"
      @click="$f.toPage(author.url)"></lj-item-list>
    <h3 class="ta-c mg-t20 pd-tb20 c-theme bg-w">版本：{{ version }}</h3>
    <h3 class="mg-tb10">dependencies:</h3>
    <div v-for="(item,index) in list.dependencies"
      :key="index"
      @click="itemClick(item)">
      <div class="bg-w pd-tb8 pd-lr8 b-1px">{{ item.key }}：{{ item.value }}</div>
    </div>
    <h3 class="mg-tb10">devDependencies:</h3>
    <div v-for="(item) in list.dependencies"
      :key="item.key"
      @click="itemClick(item)">
      <div class="bg-w pd-tb8 pd-lr8 b-1px">{{ item.key }}：{{ item.value }}</div>
    </div>
  </div>
</template>

<script>
import config from '../../../../package.json'
import { safeData } from 'lj-utils'
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
      version: '',
      author: {},
      listC: {
      },
      list: {
        dependencies: [],
        devDependencies: [],
      }
    }
  },
  methods: {
    itemClick(argItem) {
      // #ifdef H5
      window.open('https://www.npmjs.com/package/' + argItem.key)
      // #endif
    },
    init() {
      console.error(config)
      for (let k in safeData(config, 'dependencies')) {
        this.list.dependencies.push({
          key: k,
          value: config.dependencies[k]
        })
      }
      for (let k in safeData(config, 'devDependencies')) {
        this.list.devDependencies.push({
          key: k,
          value: config.devDependencies[k]
        })
      }
      this.version = APP_VERSION
      this.author = safeData(config, 'author')
    }
  },
}
</script>

<style lang="scss">
</style>

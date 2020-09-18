<template>
  <div>
    <div class="demo">
      <button class="mg-t20 mg-lr20 amimated fade"
        @click="add">
        Add
      </button>
      <button class="mg-t20 mg-lr20"
        @click="remove">
        Remove
      </button>
      <transition-group name="list-complete"
        tag="p">
        <span v-for="item in items"
          :key="item"
          class="list-complete-item">
          {{ item }}
        </span>
      </transition-group>
    </div>
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
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10
    }
  },
  methods: {
    randomIndex: function () {
      return Math.floor(Math.random() * this.items.length)
    },
    add: function () {
      this.items.splice(this.randomIndex(), 0, this.nextNum++)
    },
    remove: function () {
      this.items.splice(this.randomIndex(), 1)
    },
  },
}
</script>

<style lang="scss">
.list-complete-item {
  transition: all 1s;
  display: inline-block;
  margin-right: 10px;
}
.list-complete-enter,
.list-complete-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
.list-complete-leave-active {
  position: absolute;
}
</style>

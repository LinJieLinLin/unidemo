<template>
  <div>
    <div class="pd-lr20">
      <transition-group name="list-fade"
        tag="p">
        <div v-for="item in items"
          :key="item"
          class="list-fade-item">
          {{ item }}
        </div>
      </transition-group>
      <button class="mg-t20 amimated fade"
        @click="add">
        Add
      </button>
      <button class="mg-t20"
        @click="remove">
        Remove
      </button>
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
      this.items.splice(this.randomIndex(), 0, this.nextNum++)
    },
    remove: function () {
      this.items.splice(this.randomIndex(), 1)
    },
  },
}
</script>

<style lang="scss">
.list-fade-item {
  transition: all 1s;
  // display: inline-block;
  display: block;
  margin-right: 10px;
}
.list-fade-enter,
.list-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
.list-fade-leave-active {
  position: absolute;
}
</style>

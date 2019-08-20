export class Counter {
  count = 0
  maxCount = 0
  timer = null
  constructor(argCount = 60) {
    this.count = argCount
    this.maxCount = argCount
  }

  setCount(argCount = 60) {
    this.count = argCount
  }

  setMaxCount(argCount = 60) {
    this.maxCount = argCount
  }

  start(argCb) {
    if (!argCb) {
      console.error('需要传入计时回调')
      return
    }
    if (this.timer) {
      clearInterval(this.timer)
    }
    this.timer = setInterval(() => {
      this.count--
      if (this.count === -1) {
        this.count = this.maxCount
      } else {
        argCb(this.count)
      }
      if (this.count < 1) {
        this.stop()
      }
    }, 1000)
  }

  stop() {
    if (this.timer) {
      clearInterval(this.timer)
    }
  }
}

export class Loading {
  requestNum = 0
  delayed = 300

  timmer = null

  temTime = null

  temStartTime = null
  show = () => {}
  hide = () => {}

  constructor(argShow, argHide, argDelayed) {
    if (typeof argShow === 'function') {
      this.show = argShow
    }
    if (typeof argHide === 'function') {
      this.hide = argHide
    }
    this.delayed = argDelayed || 300
  }

  loading(isAdd) {
    if (isAdd) {
      if (!this.requestNum) {
        this.temTime = +new Date()
        this.timmer = setTimeout(() => {
          this.temStartTime = +new Date()
          console.info(
            '显示loading用时：',
            (this.temStartTime - this.temTime) / 1000
          )
          this.show()
        }, this.delayed)
      }
      this.requestNum++
    } else {
      this.requestNum--
      if (this.requestNum < 0) {
        this.requestNum = 0
      }
    }
    if (!this.requestNum) {
      clearTimeout(this.timmer)
      setTimeout(() => {
        if (this.temStartTime) {
          console.info(
            '显示loading时长：',
            (+new Date() - this.temStartTime) / 1000
          )
        }
        this.hide()
      }, this.delayed)
    }
  }
}

export class Debounce {
  timer = null
  dbTime = 0
  constructor() {
    this.dbTime = Date.now()
  }
  debounce(argFn, argWait = 500) {
    if (typeof argFn !== 'function') {
      argFn = () => {
        return this
      }
    }
    if (argWait - (Date.now() - this.dbTime) <= 0) {
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        let [, , ...args] = [...arguments]
        return argFn(...args)
      }, argWait)
    }
  }
}
export class Throttle {
  trTime = 0
  clickTime = 0
  constructor() {
    this.trTime = Date.now()
  }
  throttle(argFn, argWait = 1000) {
    if (typeof argFn !== 'function') {
      argFn = () => {
        return this
      }
    }
    if (argWait - (Date.now() - this.trTime) <= 0) {
      this.trTime = Date.now()
      this.clickTime = 0
      let [, , ...args] = [...arguments]
      setTimeout(() => {
        if (this.clickTime > 9) {
          this.trTime = 0
          this.clickTime = 0
        }
      }, argWait)
      return argFn(...args)
    } else {
      this.clickTime++
    }
  }
}

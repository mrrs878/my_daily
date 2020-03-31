import Vue from 'vue'

class Log {
  install () {
    Vue.mixin({
      mounted (): void {
        console.log(111)
      }
    })
  }
  static getInstance () {
    let instance: Log
    return function () {
      if (instance) return instance
      else instance = new Log()
    }
  }
}

export default Log.getInstance()

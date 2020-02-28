function Vue (opt) {
  this.name = ' Vue '
  // this._init()
}
import { initMix } from './init.js'
initMix(Vue)

var _self = Vue.prototype.$on
Vue.prototype.$on = function (event, fun) {
  console.log('_self', _self)
  if (event === 'click') {
    return function () {
      clearTimeout(fun.id)
      fun.id = setTimeout(() => {
        fun.call(null, 1)
      }, 1000)
    }
  }
}

let vue = new Vue()
document.querySelector('.box').addEventListener('click', () => {
  vue.$on('click', test)()
})

function test (pa) {
  console.log('pa test', pa)
}
export default Vue

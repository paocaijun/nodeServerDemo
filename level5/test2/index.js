function Vue(opt) {
	this.name = " Vue "
	// this._init()
}
import { initMix } from "./init.js"
initMix(Vue)

// 防抖
// let i = 0
// setInterval(() => {
// 	i++
// 	ajaxDe(i)
// }, 500)
// let ajaxDe = debou(ajax, 1000)
// function debou(fun, delay) {
// 	let _me = this
// 	return function(par) {
// 		clearTimeout(fun.id)
// 		fun.id = setTimeout(() => {
// 			fun(par)
// 		}, delay)
// 	}
// }
// function ajax(par) {
// 	console.log("ajax par", par)
// }

var _self = Vue.prototype.$on
Vue.prototype.$on = function(event, fun) {
	console.log("_self", _self)
	if (event === "click") {
		return function() {
			clearTimeout(fun.id)
			fun.id = setTimeout(() => {
				fun.call(null, 1)
			}, 1000)
		}
	}
}

let vue = new Vue()
document.querySelector(".box").addEventListener("click", () => {
	vue.$on("click", test)()
})

function test(pa) {
	console.log("pa test", pa)
}
export default Vue

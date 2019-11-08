export function initMix(Vue) {
	console.log("Vue", Vue)
	Vue.prototype._init = function() {
		console.log("init")
	}
}

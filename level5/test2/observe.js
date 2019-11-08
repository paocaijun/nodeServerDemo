function defineReactive(data, key, val) {
	observe(val) // 如果是对象数组，继续监测下级对象
	var dep = new Dep()
	// 通过object.defineProperty劫持数据
	// 数据监听Observe,订阅器Dep,订阅者watcher
	Object.defineProperty(data, key, {
		enumerable: true,
		configurable: true,
		get: function() {
			if (Dep.target) {
				dep.addSub(Dep.target) // 在这里添加一个订阅者
			}
			return val
		},
		set: function(newVal) {
			if (val === newVal) {
				return
			}
			val = newVal
			console.log(`${key}已监听，值为${newVal}`)
			dep.notify()
		}
	})
}
Dep.target = null
function observe(data) {
	if (!data || typeof data !== "object") {
		return
	}
	Object.keys(data).forEach(i => {
		defineReactive(data, i, data[i])
	})
}
function Dep() {
	this.subs = []
}
Dep.prototype = {
	addSub: function(sub) {
		this.subs.push(sub)
	},
	notify: function() {
		// 更新订阅者watcher
		this.subs.forEach(i => {
			i.update()
		})
	}
}

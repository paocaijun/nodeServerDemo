// 回调异步
// function fn(call) {
// 	setTimeout(() => {
// 		call()
// 		console.log("1111")
// 	}, 2000)
// }
// function callback() {
// 	console.log("hahha")
// }
// console.log("jQuery", jQuery)
// fn(callback)

function Promise1(executor) {
	//executor执行器
	let self = this
	self.status = "pending" //等待态
	self.value = undefined // 表示当前成功的值
	self.reason = undefined // 表示是失败的值
	function resolve(value) {
		if (self.status === "pending") {
			self.status = "resolved"
			self.value = value
		}
	}
	function reject(reason) {
		if (self.status === "pending") {
			self.status = "rejected"
			self.reason = reason
		}
	}
	executor(resolve, reject)
}
Promise1.prototype.then = function(onFufiled, onRejected) {
	let self = this
	console.log("this", this, self.status)
	if (self.status === "resolved") {
		console.log("onFufiled", onFufiled)

		onFufiled(self.value)
	}
	if (self.status === "rejected") {
		onRejected(self.reason)
	}
}
// let p1 = new Promise1((reso, rej) => {
// 	setTimeout(() => {
// 		console.log("pro1")
// 		reso()
// 	}, 2000)
// })
// p1.then(res => {
// 	console.log("res", res)
// })

function Promise2(fn) {
	var state = "pending",
		value = null,
		callbacks = []

	this.then = function(onFulfilled) {
		console.log("state", state)
		if (state === "pending") {
			callbacks.push(onFulfilled)
			return this
		}
		onFulfilled(value)
		return this
	}

	function resolve(newValue) {
		value = newValue
		state = "fulfilled"
		setTimeout(function() {
			callbacks.forEach(function(callback) {
				callback(value)
			})
		}, 0)
	}

	fn(resolve)
}
let p2 = new Promise2(reso => {
	setTimeout(() => {
		console.log("3333")
		reso(1)
	}, 1000)
})
p2.then(res => {
	console.log("res", res)
})

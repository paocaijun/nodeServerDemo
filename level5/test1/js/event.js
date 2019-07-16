$(document).ready(function() {
	let btn4 = document.querySelector(".left")
	btn4.addEventListener("click", hello1)
	btn4.addEventListener("click", hello2)
	function hello1() {
		alert("hello 1")
	}

	function hello2() {
		alert("hello 2")
	} // 绑定两个事件都会执行
	// function uniq(array) {
	// 	var temp = []
	// 	array.forEach((ele, i) => {
	// 		if (array.indexOf(ele) === i) {
	// 			temp.push(ele)
	// 		}
	// 	})
	// 	return temp
	// }
	function uniq(arr) {
		let brr = arr.sort()
		let temp = [brr[0]]
		console.log("brr", brr)
		brr.forEach((ele, i) => {
			if (ele !== temp[temp.length - 1]) {
				temp.push(ele)
			}
		})
		return temp
	}
	var aa = [1, "bdcd", 3, 11, "a", "a", "bdcd", 3, 5, 6, 5]
	console.log(uniq(aa))
	var outer = (function() {
		var id = 0
		return function inner() {
			id++
			console.log("id", id)
		}
	})()
	// outer()
	// outer()
	// function Person(name) {
	// 	this.name = name
	// }
	// Person.prototype.toGo = function() {
	// 	console.log("1", this.name)
	// }
	// console.log("Person", Person, typeof Person)
	class Pointer {
		constructor(num) {
			this.num = num
		}
		getnewNum() {
			return this.num
		}
		static classA() {
			console.log("a", this.name, this.age)
		}
	}
	let po1 = new Pointer(10)
	class Biu extends Pointer {
		constructor(num) {
			super(num)
			console.log("this指向", this)
		}
	}
	let b1 = new Biu(99)
})

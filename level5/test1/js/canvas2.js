;(function canvasDemo3() {
	let canvas = document.querySelector(".demo3")
	if (canvas.getContext) {
		let ctx = canvas.getContext("2d")
		for (let i = 0; i < 8; i++) {
			for (let j = 0; j < 8; j++) {
				ctx.beginPath()
				let color = `rgb(${100 + i * 20},${10 + j * 30},${j * 20})`
				ctx.fillStyle = color
				ctx.fillRect(10 + 20 * i, 10 + 20 * j, 20, 20)
			}
		}
		let img = new Image()
		img.onload = function() {
			ctx.drawImage(img, 200, 0)
		}
		img.src = "../dist/imgs/0.jpg"
	}
})()

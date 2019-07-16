window.onload = function() {
	let canvas = document.querySelector(".stock")
	if (canvas.getContext) {
		let ctx = canvas.getContext("2d")
		ctx.fillStyle = "rgb(200,0,0)"
		ctx.fillRect(10, 10, 100, 100) // 长方形并填充 (x, y, width, height)
		ctx.clearRect(25, 25, 70, 70)
		ctx.strokeRect(35, 35, 50, 50) // 边框
		// 长方形的另一种写法
		ctx.beginPath()
		ctx.rect(10, 180, 40, 40)
		ctx.stroke() // 边框

		// 三角形
		ctx.beginPath()
		ctx.moveTo(120, 10)
		ctx.lineTo(220, 10)
		ctx.lineTo(170, 50)
		ctx.fill() // 填充
		// ctx.stroke() 线条绘制图形轮廓，需要closePath()

		// 不规则圆形
		ctx.beginPath()
		ctx.arc(170, 180, 20, Math.PI / 2, -Math.PI / 9, false) // 起始角度90，结束角度-20（即180+160）角度为顺时针的
		ctx.lineTo(170, 180)
		ctx.fill()
		// 笑脸
		ctx.beginPath()
		ctx.arc(170, 100, 50, 0, Math.PI * 2, true) // 脸
		ctx.moveTo(205, 100) // 重新指定起始点位置
		ctx.arc(170, 100, 35, 0, Math.PI, false) // 嘴
		ctx.moveTo(165, 85)
		ctx.arc(155, 85, 10, 0, Math.PI * 2, true) // true则逆时针，表的反方向
		ctx.moveTo(195, 85) // 逆时针开始画圆，所以起点为3点方向
		ctx.arc(185, 85, 10, 0, Math.PI * 2, true)
		ctx.stroke()

		// 贝塞尔曲线
		ctx.beginPath()
		ctx.moveTo(10, 160)
		ctx.quadraticCurveTo(5, 110, 50, 116) // 控制点，结束点
		ctx.quadraticCurveTo(95, 110, 90, 160)
		ctx.stroke()
	}
	// 应用1
	;(function drawDemo() {
		let demo = document.querySelector(".demo")
		if (demo.getContext) {
			let ctx = demo.getContext("2d")
			roundedRect(ctx, 12, 12, 160, 160, 15)
			roundedRect(ctx, 19, 19, 160, 160, 9)
			roundedRect(ctx, 53, 53, 49, 33, 8)
			roundedRect(ctx, 53, 119, 49, 16, 6)
			roundedRect(ctx, 135, 53, 49, 33, 10)
			roundedRect(ctx, 135, 119, 25, 49, 10)
			ctx.beginPath()
			ctx.arc(42, 37, 15, -Math.PI / 7, Math.PI / 7, true)
			ctx.lineTo(34, 37)
			ctx.fill()
			for (var i = 0; i < 8; i++) {
				ctx.fillRect(51 + i * 16, 35, 4, 4)
			}
			for (var i = 0; i < 8; i++) {
				ctx.fillRect(115, i * 16 + 36, 4, 4)
			}
			for (var i = 0; i < 8; i++) {
				ctx.fillRect(51 + i * 16, 99, 4, 4)
			}
			ctx.clearRect(150, 10, 40, 170)
			ctx.clearRect(10, 150, 170, 30)
		}
		function roundedRect(ctx, x, y, w, h, r) {
			ctx.beginPath()
			ctx.moveTo(x, y + r) // 左侧竖线为起始位置
			ctx.lineTo(x, y + h - r)
			ctx.quadraticCurveTo(x, y + h, x + r, y + h)
			ctx.lineTo(x + w - r, y + h)
			ctx.quadraticCurveTo(x + w, y + h, x + w, y + h - r)
			ctx.lineTo(x + w, y + r)
			ctx.quadraticCurveTo(x + w, y, x + w - r, y)
			ctx.lineTo(x + r, y)
			ctx.quadraticCurveTo(x, y, x, y + r)
			ctx.stroke()
		}
	})() // path
	;(function drawDemo2() {
		let canvas = document.querySelector(".demo2")
		if (canvas.getContext) {
			let ctx = canvas.getContext("2d")
			var rectAngle = new Path2D()
			rectAngle.rect(10, 10, 40, 40)
			var circle = new Path2D()
			circle.moveTo(100, 30)
			circle.arc(80, 30, 20, 0, Math.PI * 2, true)
			ctx.stroke(rectAngle)
			ctx.fill(circle)
		}
	})()
}

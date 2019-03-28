var port = "3006"
var DIR = "test1" //对应运行的文件夹名称
var http = require("http")
var url = require("url")
var fs = require("fs")
var mine = require("./mine.js")
var path = require("path")

var server = http.createServer(function(request, response) {
	// 浏览器访问 localhost:3006/index.html时，request.url为/index.html，即端口之后的部分
	var pathname = url.parse(request.url).pathname
	var realPath = path.join(DIR, pathname)
	//文件后缀
	var ext = path.extname(realPath)
	ext = ext ? ext.slice(1) : "unknown"
	fs.exists(realPath, function(exists) {
		if (!exists) {
			response.writeHead(404, {
				"Content-Type": "text/plain"
			})
			response.write(
				"this request URL" + pathname + "was not found on this server"
			)
			// TODO: 看下呢
			response.end()
		} else {
			//文件夹存在时,读取文件,第一个参数为相对路径，比如 test1/index.html
			fs.readFile(realPath, "binary", function(err, file) {
				if (err) {
					response.writeHead(500, {
						"Content-Type": "text/plain"
					})
					// 此时服务报错，页面没启动，所以即使写了response.write也没用
					response.end(err)
				} else {
					// 申明文件类型
					var contentType = mine[ext] || "text/plain"
					response.writeHead(200, {
						"Content-Type": contentType
					})
					response.write(file, "binary")
					response.end()
				}
			})
		}
	})
})
server.listen(port)
console.log("server running" + port)

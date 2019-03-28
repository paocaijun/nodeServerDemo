var http = require("http")
var fs = require("fs")
var url = require("url")
var path = require("path")
var server = http.createServer(function(request, response) {
	// var pathname = url.parse(request.url).pathname
	// console.log("pathname", pathname, url.parse(request.url))
	// 第一个参数为相对路径
	fs.readFile("index.html", "binary", function(err, file) {
		if (err) {
			response.write(err)
			response.end()
		} else {
			response.writeHead(200, {
				"Content-Type": "text/html"
			})
			response.write(file, "binary")
			response.end()
		}
	})
})
server.listen(3007)
console.log("listenling 3007")

var http = require("http")
var fs = require("fs")
var url = require("url")
var path = require("path")
var DIR = "demo1"
let types = {
	html: "text/html",
	ico: "image/x-icon",
	jpeg: "image/jpeg",
	jpg: "image/jpeg",
	js: "text/javascript",
	css: "text/css",
	less: "text/css",
	json: "application/json"
}
var server = http.createServer(function(request, response) {
	var pathname = url.parse(request.url).pathname
	var filepath = path.join(DIR, pathname)
	var ext = path.extname(filepath)
	ext = ext ? ext.slice(1) : "unknown"
	console.log("111", request.url, ext)
	// console.log("pathname", pathname, url.parse(request.url))
	// 第一个参数为相对路径
	if (ext == "ico") {
		response.end()
		return
	}
	fs.readFile(filepath, "binary", function(err, file) {
		if (err) {
			response.write(err)
			response.end()
		} else {
			response.writeHead(200, {
				"Content-Type": types[ext]
			})
			response.write(file, "binary")
			response.end()
		}
	})
})
server.listen(3007)
console.log("listenling 3007")

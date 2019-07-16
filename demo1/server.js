var http = require("http")
http.createServer(function(request, response) {
	response.writeHead(200, { "Content-Type": "text/html" })
	response.end("<h3>Hello You</h3> ")
}).listen(3007)
console.log("Server is listening port 3007...")

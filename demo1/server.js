var http = require('http')
const fs = require('fs')
http
  .createServer(function (request, response) {
    fs.readFile('./hello.js', 'binary', function (err, file) {
      response.writeHead(200, { 'Content-Type': 'text/javascript' })

      response.write(file, 'binary')
      response.end()
    })
    // response.end('<h3>Hello You</h3> ')
  })
  .listen(3007)
console.log('Server is listening port 3007...')

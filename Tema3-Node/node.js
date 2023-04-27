const http = require('http')
const port = 8080

const server = http.createServer(function(req, res) {
 Response.write('Hello from my web server')
 res.end()
})

server.listen(port, function(error) {
    if(error) {
        console.log('Ceva nu a mers bine...', error)
    } else {
        console.log('Serverul asculta pe pod ' + port)
    }
})
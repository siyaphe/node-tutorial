const http = require('http')

//const server = http.createServer((req, res) => {
//   resizeBy.end('welcome')
// })

// Using Event Emitter API
const server = http.createServer()
// emits request event
// Sbscribe to it / listen for it  /respond to it
server.on('request', (req, res) => {
  res.end('Welcome')
})

server.listen(5000);



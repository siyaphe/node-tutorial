const EventEmitter = require('events')
const { isArguments } = require('lodash')
const customEmitter = new EventEmitter()

// on and emit methods
// keep track of the order
//additional isArguments
// built-in modules utilize it

customEmitter.on('response', (name, id) => {
  console.log(`data received user ${name} with id:${id}`)
})




// const EventEmitter = require('events');


// const customEmitter = new EventEmitter()


// customEmitter.on('response',(name,id)=>{
//   console.log(`data received  user ${name} with id:${id}`)
// })

// customEmitter.on('response',()=>{
//   console.log(`some other logic here`)
// })




// customEmitter.emit('response','john', 34)

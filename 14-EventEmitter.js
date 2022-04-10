const EventEmitter=require('events')


const customEmitter=new EventEmitter()

customEmitter.on('response',(name,id)=>{console.log(`data received ${name} and ${id}`)})

customEmitter.on('response',(x,y)=>{console.log(`data received ${x} and ${y}`)})

//There is no need to to put an .emit on top lines or it wont work its already done
customEmitter.emit('response','john',42)





// event emitter for http request 

/**const http=require('http')
const server=http.createServer()
server.on('request',(req,res)=>{res.end('welcome')})
server.listen(5000)

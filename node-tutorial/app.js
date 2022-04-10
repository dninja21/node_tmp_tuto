var http=require('http')
var fs=require('fs')

http 
.createServer(function(req,res){

    const fileStream=fs.createReadStream('./Content/big_file.txt','utf-8');
    fileStream.on('open',()=>{
        fileStream.pipe(res)  //piping  read into a  writable stream  sending data to the browser in chunks instead of all of it at once 
    })
    fileStream.on('error',(err)=>{res.end(err)
    })

})


.listen(5000)


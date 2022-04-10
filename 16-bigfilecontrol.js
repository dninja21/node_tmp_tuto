// i did not finish this tutorial properly 
// default 64kb buffer 
// last buffer - remainder
//high water mark - control size

const {createReadStream}=require('fs')
const stream= createReadStream('./Content/big_file.txt',{highWaterMark:90000,encoding:'utf8'})
//stream.on('data',(result)=>{console.log(result)}) 
stream.error('error',(error)=>{console.log(error)})

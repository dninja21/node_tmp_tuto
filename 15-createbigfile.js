//read stream event used with write file sync 
const {writeFileSync } = require('fs')
const { createReadStream } = require('fs')
//const { createReadStream }= require('fs')
for (i=1; i<=1000; i++)
{
    // for (j=i;j<=1000;j++)
        writeFileSync('./Content/big_file.txt',`Hellow world :${i}/n`,{flag:'a'})
        const stream= createReadStream('Content/big_file.txt')
        //check node js documentation for something 'data which is an extension or extends of stream.on event'
      
            stream.on('data',(result)=>{console.log(result)})
            
           // stream.error('error',(err)=>{console.log(err)})
        

}

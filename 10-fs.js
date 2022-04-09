const {readFileSync,writeFileSync } = require('fs')

const first =readFileSync("./Content/first.txt","utf-8",(err,result)=>{

    if(err)
    {
        console.log(err)
        return
    }
    console.log(result)

    
      
   


})

const second=readFileSync("./Content/second.txt","utf-8",(err,result)=>{

    if(err)
    {
        console.log(err)
        return
    }
    console.log(result)

   
   
})


writeFileSync('./Content/result-sync.txt',`Here is the result:${first},${second}`,(err,result)=>{

    if(err)
    {
        console.log(err)
        return
    }
    console.log(result)


})
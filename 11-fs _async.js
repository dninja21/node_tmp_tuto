const {readFile,writeFile} = require('fs')

console.log('start')
readFile("./Content/first.txt","utf-8",(err,result)=>{

    if(err)
    {
        console.log(err)
        return
    }
    const first=result

        readFile("./Content/second.txt","utf-8",(err,result)=>{

        if(err)
        {
            console.log(err)
            return
        }
        const second=result
        
            writeFile('./Content/result-sync.txt',`Here is the result:${first},${second}`,(err,result)=>{

                if(err)
                {
                    console.log(err)
                    return
                }
                
                console.log('file written')
            
            
            })
    
       
       
    })

   
})

console.log('go to new task')



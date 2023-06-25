const fs = require('fs')

fs.readFile('./test1.txt','utf-8',(err, data) => {
    if(data){
        console.log(data)
    }else console.log(err)
})

try{
    let text = fs.readFileSync('./test2.txt', 'utf-8');
    console.log(text)
}catch(err){
    console.log(err)
}
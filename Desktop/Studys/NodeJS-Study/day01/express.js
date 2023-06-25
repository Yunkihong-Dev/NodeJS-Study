const express = requre('express');
const app = express()

app.set('port',3000)
//key, value

// routing
app.get('/todo/:id',(req,res)=>{
    console.log(req.params.id)
    res.send('hello express!')
})
app.get('/')
// (app.get, ()=> {})
app.listen(app.get('port'),()=>{
    console.log(app.get('port'+"번으로 서버 작동중"));

})
let express=require('express')
const app=express()
app.get('/',(req,res)=>{
    res.send('Akash bhoiii')
})
app.listen(3000)
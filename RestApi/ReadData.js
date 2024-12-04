const express=require('express');
const app=express();
const router=require('./router');
app.use('/api',router);
app.get('/',(req,res)=>{
    res.send('hello')
})
const port=process.env.PORT
app.listen(port,()=>{ 
    console.log('listen on ',port);
} )
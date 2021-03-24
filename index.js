const express = require('express')

var app = express();

app.use('/health',(req,res) => {
    res.send('OK from Kuldeep')
})

app.listen(3000,()=>{
    console.log('server started')
})
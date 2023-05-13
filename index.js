const Student= require('./student/index')
const express = require('express');
const morgan = require('morgan');
const{response,request} = require('express');
const app = express()
const port = 3000

app.use(express.static('public'))
app.use(morgan('common',{immediate:true}));
app.use('/student',Student);
app.use('/',(request,response)=> response.redirect('/student'));
app.listen(port,()=> console.log(`Example app listening on port http://localhost:${port}`));
// creating the first server 
// const http=require('http'); 
// const { toUSVString } = require('util');

// const server=http.createServer((req,res)=>{
//     res.end("Hello World")
// })
// server.listen(3000);    


// using express framework of nodejs
const express=require('express');   
// make it executable 
const app=express();    

app.get('/home',(req,res)=>{
    res.send("Hello world from Express framework in node"); 
});  

app.listen(3000);   

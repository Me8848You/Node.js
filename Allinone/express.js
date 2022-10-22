// all about express 

// express is the node.js ko framework ho jasle garda node ko 13/14 line of code minimum line of code ma garna sakinxa 
//also it provides all about routes,middleware, sanga sangai hamle html,css code snaga pani easily integrate garna sakinxa !!!!


// for eg

const express=require('express')

const app=express();//executable banakko natra use garna mildaina 

app.get('',(req,res)=>{
    res.send("Hell0, I am home page . Thank you!");
})

app.get('/about',(req,res)=>{
    res.send("Welcome , I am about page . Thank you!");
})

app.get('/help',(req,res)=>{
    res.send("Hell0, I am help  page . Thank you!");
})

app.listen(5000);
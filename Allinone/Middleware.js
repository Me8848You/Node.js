const { application } = require('express');
const express=require('express');
const app=express();


// Middleware vanne req,res,next vako chai ho 

// Middleware banakko hai yo chai 

const reqFilter=(req,res,next)=>{
    if(!req.query.age)
    {
        res.send("Please Provide Your age ");
    }
    else if(req.query.age<18)
    {
        res.send("This page is only available for 18+ age")
    }
    else
    {
        next();
    }
}

// hamro program lai middleware use garna vaneko 
app.use(reqFilter);


// Routes vanne req,res vako chai ho hai 

app.get('/',(req,res)=>{
    res.send("Welcome to home page");
})

app.get('/about',(req,res)=>{
    res.send("Welcome to about page");
})

app.get('/help',(req,res)=>{
    res.send("Welcome to help page");
})

app.listen(5000);

// Note***
// this is application-level middleware => yeha k hunxa vane hamle banako middleware sabai page i.e home,about,help sabai page ma apply hunxa  

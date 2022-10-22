// Here middleware use in multiple routes 



const express=require('express')
const app=express();

const reqFilter=require('./Middleware/reqFilter')

//to use middleware in multiple routes 
// make execuatble 
const route=express.Router();

// tell routes to use middleware
route.use(reqFilter);

// route.get wala route ma middleware apply hunxa aaru ma hudaina 

route.get('/',(req,res)=>{
    res.send("This is home page")
})

route.get('/about',(req,res)=>{
    res.send("This is about page")
})

route.get('/help',(req,res)=>{
    res.send("This is help page")
})

app.get('/contact',(req,res)=>{
    res.send("This is contact page")
})

app.get('/resume',(req,res)=>{
    res.send("This is resume page")
})

app.use('/',route);

app.listen(5000);
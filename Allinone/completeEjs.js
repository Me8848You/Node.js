const express=require("express");   
const app=express();    

const path=require("path"); 

app.set("view engine","ejs");   

const folderHtml=path.join(__dirname,"folderhtml");   

// app.use(express.static(folderHtml));   

app.get('/test',(req,res)=>{

    const user={
        name:"suman",
        age:24,
        country:"USA",
        skills:["java","c++","spring","BOOT","alpha","node.js","react.js"]
    }
    res.render('page',{user}) 
})

app.get('/login',(req,res)=>{
    res.render("login",)
})


app.get('*',(req,res)=>{
    res.sendFile(`${folderHtml}/nopage.html`)
})

app.listen(3000,(err,data)=>
{
    console.warn("Have a look at the port 3000 thank You !!");  
})
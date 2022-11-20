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
        country:"USA"
    }
    res.render('page',{user})
})

app.get('/help',(req,res)=>{
    res.sendFile(`${folderHtml}/help.html`)
})
app.get('/about',(req,res)=>{
    res.sendFile(`${folderHtml}/about.html`)
})
app.get('*',(req,res)=>{
    res.sendFile(`${folderHtml}/nopage.html`)
})

app.listen(3000,(err,data)=>
{
    console.warn("Have a look at the port 3000 thank You !!");  
})
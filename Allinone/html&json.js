// Render the htmls ans JSON datas 
// ps: Render = Display

const express=require('express');

const app=express();

app.get('',(req,res)=>{
    res.send("<h1> Hello , This is Home Page .</h1>"+"<a href='./about'>Go the about section </a>");
})

app.get('/about',(req,res)=>{
    res.send("Hello , This is About Page ."+`<a href='/'>Go the home section </a>`);
})

app.get('/help',(req,res)=>{

    res.send(`<input type='text' placeholder='UserName' name='uname' value="${req.query.uname}" ></input>`);        //here i get the value which is in the url given by input tag 



    res.send("Hello , This is help Page .");
})



// JSON data display here in contact section   json data object format ma hunxa khyal gara hai 

app.get('/contact',(req,res)=>{

    // res.send("Hello , This is contact  Page .");
    res.send(`{
        name:"suman",
        age:25
    },
    {
        name:"alpha",
        age:25
    }`)
})



app.listen(3000,()=>
{
    console.warn("Client request is responding in the port 5000 , see there :");
})
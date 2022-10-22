// Getting data from the browser's url and use in our code 

const express=require('express');

const app=express();

app.get('',(req,res)=>{

    const Name=req.query.name;      //i get the data from the url query 
    res.send(" Hello ====>"+Name);
})

app.listen(5000,()=>{
    console.log("Output aayo !!")
});

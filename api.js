const express=require('express');   
const app=express();    

const dbConnect=require('./dbConnect'); 

// get api 

app.get('/',async (req,res)=>{

    const db= await dbConnect();  
    
    const result= await db.find().toArray();    

    res.send(result);   

})

app.listen(3000,(err,_)=>{
    console.log("Lets have a look on 3000 port");   
})
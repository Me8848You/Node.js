const express=require('express');   
const app=express();    

const dbConnect=require('./dbConnect'); 

app.use(express.json());    //middleware


// post api 
// postman ma vako data lai node js ma get gareko hai yo chai req.body ma pathako xa json format ma 


app.post('/',async (req,res)=>{

    const db=await dbConnect(); 

    const result=await db.insertOne(req.body); 
    console.log(result);    

    res.send(result);    
})

app.listen(3001,(err,_)=>{
    console.log("Lets have a look on 3000 port");   
})
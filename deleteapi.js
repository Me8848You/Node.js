const express=require('express');   
const app=express();    

const mongoDB=require('mongodb');   //for id delete garna lai 

const dbConnect=require('./dbConnect'); 

app.delete('/:id',async (req,res)=>{

    let db=await dbConnect();  
    
    // let result=await db.deleteMany({name:"Shreeya"}); 

    // id delete garna lai aba 

    let result= db.deleteOne({_id:new mongoDB.ObjectId(req.params.id)});   

    console.log(result);    

    res.send("Delete Api"); 
})

app.listen(3000,(err,_)=>{
    console.log("Let's have a look on the 3000 port yeah!!!");  
})
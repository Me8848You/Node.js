
const {Router}=require('express');  

const app=Router();  

app.get('/',function(req,res){
    res.send('This Is Home page')
})

module.exports=app; 


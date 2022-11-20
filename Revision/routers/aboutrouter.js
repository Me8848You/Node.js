
const {Router}=require('express');  

const app=Router();  

app.get('/about',function(req,res){
    res.send('This Is about page')
})

module.exports=app; 


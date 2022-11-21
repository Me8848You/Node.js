// Middleware chai yo hai 
module.exports= reqFilter=(req,res,next)=>
{
    if(!req.query.age){
        res.send("Please enter your age")
    }
    else if(req.query.age<18){
        res.send("You are not 18+ access denied!!")   
    }
    else{
        next(); 
    }
}

// module.exports={reqFilter}; 
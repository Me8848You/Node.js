module.exports=reqFilter=(req,res,next)=>
{
    if(!req.query.age)
    {
        res.send("Please Provide your age ")
    }
    else if(req.query.age<18)
    {
        res.send(" This is 18+ content . Grow myann ")
    }
    else
    {
        next();
    }
};

// module.exports={reqFilter};
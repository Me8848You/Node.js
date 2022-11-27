
console.log("I am sad!!!"); 

const mongoose=require('mongoose'); 

const connectionDB=async (req,res)=>{
    const db=await mongoose.connect('mongodb+srv://node321:node321@nodecluster.4ybqagf.mongodb.net/test')
}
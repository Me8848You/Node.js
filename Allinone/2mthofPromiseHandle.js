
const { METHODS } = require("http");
const dbConnect=require("./dbConnect"); 


// promise handling METHODS 001

dbConnect().then((resp)=>{
  resp.find({}).toArray().then((data)=>{
    console.log(data);  
  })
})

//  promise Handling METHODS 002 

// const main=async ()=>{
//   console.log("main function called");  
//   let data= await dbConnect();  
//   data=await data.find().toArray(); 
//   console.log(data);  
// }
// main()
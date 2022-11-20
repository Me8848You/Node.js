// Asunchroronous Programming 
const fs=require('fs'); 

const filename="./Theory.txt"; 
// fs.readFile(filename,(err,data)=>{
//     if(err)
//     {
//         console.log(err);   
//     }
//     else
//     {
//         console.log(data.toString());   
//     }
// })
// console.log("Hello world!!!!");  


//synchronous Programming 

// const data=fs.readFileSync(filename);  
// console.log(data.toString());   

// console.warn("I warn you not to  use this model "); 

// functional approach bata solve gareko aba chai 

const errHandler=(err)=>console.warn(err);  
const dataHandler=(data)=>console.warn(data);  

fs.readFile(filename,(err,data)=>{
    if(err)
    {
        errHandler(err)
    }
    else
    {
        dataHandler(data.toString());  
    }
})

console.log("Hello Nepali 4-4");    
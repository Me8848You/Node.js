// now import and export wala case

// in app.js

const sum=require("./Test/sum"); 

console.log(" The sum of two number is ",sum.add(2,3));  


// in sum.js
function add(a,b)
{
    return a+b; 
}

module.exports={add};   

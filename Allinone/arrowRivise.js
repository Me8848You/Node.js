// Arrow function 
()=>{}; // this is arrow function , which does not have its own content 

// 1. arrow function ko help bata direct export garna milxa normal lai jsto garo hudaina 

const sum=(a,b)=>{
   return a+b;    
}
console.log("The sum of 2 numbers is ",sum(4,4));   


// now i import from the another folder/file

// const apple=require("./Test/sum");  

// console.log("the sum is ",apple.add(3,3));  

// ojbect destructing (vaneko k raixa vane arko file/folder ma more than tmlai chahine kura vanda dherai kura export gareko huna sakxa but tmlai chahine matra import garnu xa vane Object destructuring use gara)


const {add,sub,mul}=require('./Test/sum');  

console.log("sum =",add(2,5));    
console.log("sub =",sub(2,5));    
console.log("mul =",mul(2,5));    




// ****************Sum .js **************8
exports.add=(a,b)=>{
    return a+b; 
}

exports.sub=(a,b)=>{
    if(a>b)
    {
        return a-b; 
    }
    else if(a<b)
    {
        return "First Number must be greater "; 
    }
    return a-b; 

}
exports.mul=(a,b)=>{
    return a*b; 
}
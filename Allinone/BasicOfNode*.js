 //Node js basic 
 //all about callback stack, Node API, callback queue 

//  refer to the video of "Basic of Node js(17) "

console.log("Startin up ");

setTimeout(()=>{
    console.log("2 sec log")
},2000);


setTimeout(()=>{
    console.log("0 sec log")
},0);

console.log("Finishing  up ");


// Look the output , and here we go .............. 
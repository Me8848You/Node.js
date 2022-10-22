// handling the asynchronous data  with promices 

// without promise


let a=10,b=0;

// setTimeout(()=>{
//     b=30;},2000);

//     console.log(a+b);  /// here the result it 10 it is not updated coz setTimeout vanne fxn le dherai time liyo that's why -----tyo complete nahudai yo console print vayo!!!i.e asynchronous 


    // to get the correct result 

    const waitData=new Promise((resolve,reject)=>{
        resolve(30);// here we can sent any value even array or function 
    })

    // resolve bata aayeko value then fxn ko data vanne variable ma xa 

    waitData.then((data)=>{
        b=data;
        console.log(a+b);
        console.log("Correct Yeah!!!!");
    })


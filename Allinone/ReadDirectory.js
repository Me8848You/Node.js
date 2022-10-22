const fs=require('fs')

const path=require('path')

const dirPath=path.join(__dirname,"../Allinone")

// for(i=0;i<5;i++)
// {
//     fs.writeFileSync(dirPath+"/hello"+i+".txt","I create this files using node from different folder ")
// }

// now read the files from the directory 

fs.readdir(dirPath,(err,file)=>{

    // ********call back function ma file array ko form ma hunxa ********888
    // if(err)
    // {
    //     console.log(err)

    // }
    // else
    // {
    //     console.warn(file)
    // }

    // not in the array form 
   file.forEach((item)=>{
    console.log("here is the list",item)
   }  )

})
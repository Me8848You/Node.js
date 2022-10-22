const fs=require('fs')

const path=require('path')

const dirPath=path.join(__dirname,'iamapi')

const filePath=`${dirPath}/name.txt`

// Create File******

// fs.writeFileSync(filePath,"Iam here to rule the world and trust me I am the only one ")   //I create this file using node modules fs

// Read File ********

// fs.readFile(filePath,'utf-8',(err,item)=>{
//     if(!err)
//     {
//         console.log(item);
//     }
// });

// Update *******

// fs.appendFile(filePath,"   And this is append text on the file ",(err)=>{
//     if(err)
//         console.log(err)
//     else
//     console.warn("File Updated !!!")


// })

// Rename File   


// fs.rename(filePath,`${dirPath}/Re-name.txt`,(err)=>{
//     if(err)
//     console.log(err)
//     else
//     console.warn("Renamed sUCCessfully !!");    
// });

// Delete file 

// after Rename file name has been changed so we have to change that also 
const upfilePath=`${dirPath}/Re-name.txt`;  

fs.unlinkSync(upfilePath,(errr)=>{
    if(!errr)
    console.log('File deleted successfully');   
    // before we do that first ma rename pani  gara file lai 
})

// Here i am going to create a file and some text inside this file from the command line 

// *******************Getting input from the command line ********

const fs=require('fs');

// terminal bata aako input lai ek thau ma rakha array ko form ma 
const input=process.argv;

// fs.writeFileSync(input[2],input[3]);

// here we have add and remove the file from the terminal 

if(input[2]=='add')
{
    fs.writeFileSync(input[3],input[4])
}
else if(input[2]=='remove')
{
    fs.unlinkSync(input[3])
}
else
{
    console.log('Invalid instruction !!!')
}


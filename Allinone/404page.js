//Remove extension (jastia about.html vs about) and 404 page kasari dekhaine vanne barema 



const express=require('express');
const path=require('path');

const app=express();

const folderPath=path.join(__dirname,'folderhtml');
console.log(folderPath);

// app.use(express.static(folderPath),err=>console.log(err));

// to remove the extensions like .html .php so on 

// get method use gara
app.get('',(req,res)=>{
    res.sendFile(`${folderPath}/index.html`);
})
app.get('/help',(req,res)=>{
    res.sendFile(`${folderPath}/help.html`);
})
app.get('/about',(req,res)=>{
    res.sendFile(`${folderPath}/about.html`);
    // res.send("hiii")
})

// this page for page not found 404
app.get('*',(req,res)=>{
    res.sendFile(`${folderPath}/nopage.html`);
    
})

app.listen(8000);

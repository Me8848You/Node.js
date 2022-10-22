//templete engine vanne kura dynamic page banauna kam ma aauxa => here dynamic in the sense ki db use hunxa  for eg. user vanne object ma database bata aako data rakhne (but yeha ramdom data ho db ko hoina ) teslai profile.ejs ma access gareko xa !! Look That:)

// arkko important kura yeha login.ejs vanne file ma common/Headers.ejs vitra ko kura display garna kasari include garne vanne kura pani xa REMEMBER: i.e <%- include('./common/Header.ejs') %> "-" yo yaad gara kaha xa vanera 
// yesle Headers.ejs vitra ko html code display garxa



const express=require('express');

const app=express();

app.set("view engine","ejs");

app.get('',(req,res)=>
{
    const user={
        name:'SumanTheProgrammer',
        age:25,
        city:'lalitpur',
        skills:['php','c++','js','java','python']
    }
    res.render("profile",{user});
})

// for the login file views vitra ko lagi extra filepath pani dina pardaina you know that

app.get('/login',(req,res)=>{
    res.render("login")
})

app.listen(5000);
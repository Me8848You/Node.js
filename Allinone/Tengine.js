//templete engine vanne kura dynamic page banauna kam ma aauxa => here dynamic in the sense ki db use hunxa  for eg. user vanne object ma database bata aako data rakhne (but yeha ramdom data ho db ko hoina ) teslai profile.ejs ma access gareko xa !! Look That:)


const express=require('express');

const app=express();

app.set("view engine","ejs");

app.get('',(req,res)=>
{
    const user={
        name:'SumanTheProgrammer',
        age:25,
        city:'lalitpur'
    }
    res.render("profile",{user});
})

app.listen(5000);
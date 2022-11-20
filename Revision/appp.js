// Middleware ko kam gareko dekhauna lai 

const express=require('express');   
const app=express(); 

// import the controllers 
const home=require('./Controllers/homecontrollers')
const about=require('./Controllers/aboutcontrollers')
const contact=require('./Controllers/contactcontrollers')

app.use('/',home)
app.use('/contact',contact)
app.use('/about',about)

app.listen(3001);   
const express=require('express');   
const app=express();  

// import routers 
const homerouter=require('./routers/homerouter')
const aboutrouter=require('./routers/aboutrouter')
const contactrouter=require('./routers/contactrouter')

app.use(homerouter)
app.use(contactrouter)
app.use(aboutrouter)

app.listen(3000,()=>{
    console.log("3000 port ma gayera hera ")
})

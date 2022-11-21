const dbConnect=require('./dbConnect'); 

const update=async ()=>{
    const db=await dbConnect(); 

    const result=await db.updateOne({name:"shreejana"},{$set:{name:"DhakalShree",interest:"Games",skills:"love&life"}}); 

    console.log(result);    
    console.log("Update Successfully ");    
}

update();   
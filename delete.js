const dbConnect=require("./dbConnect"); 

const deleted=async ()=>{
    const db=await dbConnect(); 

    const result=await db.deleteOne({name:'SumanTheP.'})

    console.log(result)

}

deleted();   
import mongoose, { mongo } from "mongoose";






 export const dbconnected = async()=>{
    await mongoose.connect(process.env.DATABASE_URL).then(()=>{
        console.log("connected to db")  
    })
 } 

  




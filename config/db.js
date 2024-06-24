const mongoose=require("mongoose");
require("dotenv").config();
const connection= async ()=>
    {
    try {
        await mongoose.connect(process.env.mongourl)
        console.log("database connected")

    } 
    catch (error) {

        console.log(error.message)}
    }
module.exports=connection
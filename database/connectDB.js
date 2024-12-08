import mongoose from "mongoose";


const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGOBD_URL)
        console.log("MongoDB Connected Successfully")
    }catch(error){
       console.log(`Error in connecting DB: ${error}`)
       process.exit(1)
    }
}

export default connectDB;
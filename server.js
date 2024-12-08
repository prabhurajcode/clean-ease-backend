import express from "express"
import dotenv from "dotenv"
import connectDB  from "./database/connectDB.js"
import authRoute from "./routes/auth.route.js"

dotenv.config()
const app = express();  
const port = process.env.PORT;


app.use("/api/auth",authRoute)


app.listen(port,()=>{
    console.log(`server run on ${port}` );
    connectDB();
})
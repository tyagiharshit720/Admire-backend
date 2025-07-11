import mongoose from "mongoose";
import { ENV } from "./ENV.js";

const connectDB=async()=>{
    try{
        console.log("MongoDB connected successfully ✅");
        await mongoose.connect(ENV.MONGO_URI);
        console.log("MongoDB connected successfully ✅");
    }
    catch(error){
        console.log(error);
        process.exit(1); 
    }
}
export default connectDB;
import mongoose from "mongoose";
import { configDotenv } from "dotenv";

configDotenv()
console.log(process.env.MONGODB)

const connection = process.env.MONGODB

export const connectDB = async()=>{
    try {
        await mongoose.connect(connection)
        console.log('DB connected');
        
    } catch (error) {
        console.error(error ,"ghd")
    }

}


import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB=async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URI as string);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection failed:", error);
        process.exit(1); // Exit the process with failure
    }
}
export default connectDB;
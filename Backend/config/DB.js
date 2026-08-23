import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      console.warn("⚠️ MONGO_URI is not defined in environment variables.");
      return;
    }
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully !!");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

export default connectDB;

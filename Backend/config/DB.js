import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI).then(() => {
      console.log("MongoDB connected !!");
    });
  } catch (error) {
    console.error("Error", error);
  }
};

export default connectDB;

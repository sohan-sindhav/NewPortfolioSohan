import mongoose from "mongoose";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import User from "../models/UserSchema.js";
import connectDB from "../config/DB.js";

dotenv.config();

const createAdmin = async () => {
  const username = process.argv[2];
  const password = process.argv[3];

  if (!username || !password) {
    console.log("\n❌ Please provide both username and password.");
    console.log("Usage: node Tools/createAdmin.js <username> <password>");
    console.log("Example: node Tools/createAdmin.js admin MySecurePass123!\n");
    process.exit(1);
  }

  if (!process.env.MONGO_URI) {
    console.error("❌ MONGO_URI is missing in Backend/.env. Please configure your MongoDB connection string first.");
    process.exit(1);
  }

  try {
    await connectDB();

    const existingUser = await User.findOne({ username });
    const hashedPassword = await bcrypt.hash(password, 10);

    if (existingUser) {
      existingUser.password = hashedPassword;
      existingUser.role = "admin";
      await existingUser.save();
      console.log(`\n✅ Admin account "${username}" updated successfully with new password!`);
    } else {
      const newAdmin = new User({
        username,
        password: hashedPassword,
        role: "admin",
      });
      await newAdmin.save();
      console.log(`\n✅ Admin account "${username}" created successfully!`);
    }

    console.log("🎉 You can now log in to the admin panel using this username and password.\n");
    process.exit(0);
  } catch (error) {
    console.error("\n❌ Failed to create admin user:", error);
    process.exit(1);
  }
};

createAdmin();

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.js";
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT;
import projectRoutes from "./routes/projectRoutes.js";
import connectDB from "./config/DB.js";

const app = express();
connectDB();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);

app.listen(PORT, () => {
  console.log(`App is listening on port : ${PORT}`);
});

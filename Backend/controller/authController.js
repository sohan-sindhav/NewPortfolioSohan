import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();
import { username, passwordHash } from "../config/admin.js";

const login = async (req, res) => {
  const { username: inputUser, password } = req.body;

  if (!inputUser || !password) {
    return res
      .status(400)
      .json({ message: "please provide username and password." });
  }

  if (inputUser !== username) {
    return res.status(401).json({ message: "invalid credentials" });
  }

  const isMatch = await bcrypt.compare(password, passwordHash);
  if (!isMatch) {
    return res.status(401).json({ message: "invalid credentials" });
  }

  const token = jwt.sign({ role: "admin" }, process.env.JWT_SECRET, {
    expiresIn: process.env.EXPIRES_IN,
  });

  res.cookie("token", token, {
    httpOnly: true,
    secure: false,
    sameSite: "strict",
    maxAge: 24 * 60 * 60 * 1000,
  });
  res.json({ message: "Login successful" });
};

const logout = (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out !!" });
};

const getMe = (req, res) => {
  res.json({ role: "admin" });
};

export default { login, logout, getMe };

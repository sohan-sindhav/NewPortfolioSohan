const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.post("/", (req, res) => {
  const { username, password } = req.body;

  if (
    username === process.env.ADMIN_USERNAME &&
    password === process.env.ADMIN_PASSWORD
  ) {
    const token = jwt.sign(
      { username: process.env.USERNAME, role: process.env.ROLE },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.cookie("auth", token, {
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
      maxAge: 3600000,
    });

    return res.status(200).json({ message: "Login successful" });
  }

  res.status(401).json({ message: "Invalid credentials" });
});

router.post("/logout", (req, res) => {
  res.clearCookie("auth");
  res.status(200).json({ message: "Logged out" });
});

module.exports = router;

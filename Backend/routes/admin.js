const express = require("express");
const isAuthenticated = require("../middleware/auth");
const router = express.Router();

router.get("/", isAuthenticated, (req, res) => {
  res.status(200).json({ message: `Welcome ${req.user.username}` });
});

router.get("/logout", isAuthenticated, (req, res) => {
  res.clearCookie("auth");
  res.status(200).json({ message: "Logged out successfully" });
});

module.exports = router;

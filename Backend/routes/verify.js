const express = require("express");
const isAuthenticated = require("../middleware/auth");
const router = express.Router();

router.get("/", isAuthenticated, (req, res) => {
  res.status(200).json({ authenticated: true, user: req.user });
});

module.exports = router;

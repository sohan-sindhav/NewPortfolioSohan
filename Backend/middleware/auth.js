// middleware/auth.js
const jwt = require("jsonwebtoken");

function isAuthenticated(req, res, next) {
  const token = req.cookies.auth;
  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // attach user info to request
    next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
}

module.exports = isAuthenticated;

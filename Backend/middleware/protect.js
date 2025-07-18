import jwt from "jsonwebtoken";

const protect = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) return res.status(401).json({ message: "not authenticated" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role != "admin") throw new Error();

    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};

export default protect;

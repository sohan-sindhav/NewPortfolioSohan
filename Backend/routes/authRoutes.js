// routes/authRoutes.js
import express from "express";
const router = express.Router();
import authController from "../controller/authController.js";
import protect from "../middleware/protect.js";

router.post("/login", authController.login);
router.post("/logout", authController.logout);
router.get("/me", protect, authController.getMe);

export default router;

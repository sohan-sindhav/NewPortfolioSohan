import express from "express";
import {
  createProject,
  getAllProjects,
  deleteProject,
  updateProject,
} from "../controller/projectController.js";
import protect from "../middleware/protect.js";

const router = express.Router();

router.route("/").get(getAllProjects).post(protect, createProject); // admin only

router
  .route("/:id")
  .put(protect, updateProject) // admin only
  .delete(protect, deleteProject); // admin only

export default router;

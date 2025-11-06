import express from "express";
import {
  getHostels,
  getHostelById,
  addHostel,
  updateHostel,
  deleteHostel,
} from "../controllers/hostelController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getHostels);

router.get("/:id", getHostelById);

router.post("/", protect, addHostel);

router.put("/:id", protect, updateHostel);

router.delete("/:id", protect, deleteHostel);

export default router;

import express from "express";
import {
  createOrUpdateProfile,
  getMyProfile,
} from "../controllers/profileController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(protect, createOrUpdateProfile);
router.route("/me").get(protect, getMyProfile);

export default router;

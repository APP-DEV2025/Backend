import express from "express";
import {
  registerAdmin,
  loginAdmin,
  getAllBookings,
  getAllPayments,
  getAvailableRooms,
  getAdminProfile,
} from "../controllers/adminController.js";
import { protectAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerAdmin);
router.post("/login", loginAdmin);

router.get("/bookings", protectAdmin, getAllBookings);
router.get("/payments", protectAdmin, getAllPayments);
router.get("/available-rooms", protectAdmin, getAvailableRooms);
router.get("/profile", protectAdmin, getAdminProfile);

export default router;

import Admin from "../models/adminModel.js";
import Booking from "../models/bookingModel.js";
import Hostel from "../models/hostelModel.js";
import Payment from "../models/paymentModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

export const registerAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const adminExists = await Admin.findOne({ email });
    if (adminExists) {
      return res.status(400).json({ message: "Admin already exists" });
    }

    const admin = await Admin.create({ name, email, password });

    res.status(201).json({
      _id: admin._id,
      name: admin.name,
      email: admin.email,
      token: generateToken(admin._id),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const loginAdmin = async (req, res) => {
  const { email, password } = req.body;
  const admin = await Admin.findOne({ email });

  if (admin && (await admin.matchPassword(password))) {
    res.json({
      _id: admin._id,
      name: admin.name,
      email: admin.email,
      token: generateToken(admin._id),
    });
  } else {
    res.status(401).json({ message: "Invalid email or password" });
  }
};

export const getAllBookings = async (req, res) => {
  const bookings = await Booking.find()
    .populate("user", "name email")
    .populate("hostel", "name location");

  res.json(bookings);
};

export const getAllPayments = async (req, res) => {
  const payments = await Payment.find()
    .populate("booking")
    .sort({ createdAt: -1 });
  res.json(payments);
};

export const getAvailableRooms = async (req, res) => {
  const bookedHostelIds = await Booking.find().distinct("hostel");
  const availableHostels = await Hostel.find({
    _id: { $nin: bookedHostelIds },
  });
  res.json(availableHostels);
};

export const getAdminProfile = async (req, res) => {
  const admin = await Admin.findById(req.admin._id);
  if (admin) {
    res.json({
      _id: admin._id,
      name: admin.name,
      email: admin.email,
    });
  } else {
    res.status(404).json({ message: "Admin not found" });
  }
};

import Booking from "../models/bookingModel.js";

export const createBooking = async (req, res) => {
  const { hostelId, checkIn, durationMonths } = req.body;
  const booking = await Booking.create({
    user: req.user._id,
    hostel: hostelId,
    checkIn,
    durationMonths,
  });
  res.status(201).json(booking);
};

export const getUserBookings = async (req, res) => {
  const bookings = await Booking.find({ user: req.user._id }).populate(
    "hostel"
  );
  res.json(bookings);
};

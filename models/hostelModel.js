import mongoose from "mongoose";

const hostelSchema = mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    gender: {
      type: String,
      enum: ["Male", "Female", "Mixed"],
      default: "Mixed",
    },
    description: { type: String },
    location: { type: String, default: "Makerere" },
    roomsAvailable: { type: Number, default: 0 },
    pricePerMonth: { type: Number, required: true },

    pictures: {
      type: [String],
      default: [],
    },

    contactInfo: {
      phone: { type: String },
      whatsapp: { type: String },
      email: { type: String },
    },

    facilities: {
      wifi: { type: Boolean, default: false },
      parking: { type: Boolean, default: false },
      shuttle: { type: Boolean, default: false },
      security: { type: Boolean, default: true },
      selfContained: { type: Boolean, default: false },
      readingRoom: { type: Boolean, default: false },
    },
  },
  { timestamps: true }
);

const Hostel = mongoose.model("Hostel", hostelSchema);
export default Hostel;

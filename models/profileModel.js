import mongoose from "mongoose";

const profileSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    name: { type: String, required: true },
    gender: {
      type: String,
      enum: ["Male", "Female"],
      required: true,
    },
    about: { type: String },
    pictures: {
      type: [String],
      default: [],
    },
    contactInfo: {
      phone: { type: String },
      whatsapp: { type: String },
      email: { type: String },
    },
  },
  { timestamps: true }
);

const Profile = mongoose.model("Profile", profileSchema);
export default Profile;

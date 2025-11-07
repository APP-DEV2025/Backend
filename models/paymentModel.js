import mongoose from "mongoose";

const paymentSchema = mongoose.Schema(
  {
    booking: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Booking",
      required: true,
    },
    amount: { type: Number, required: true },
    status: {
      type: String,
      enum: ["Pending", "Booking Fee Paid", "Fully Paid"],
      default: "Pending",
    },
    paymentDate: { type: Date, default: Date.now },
    method: { type: String, default: "Stripe" },
  },
  { timestamps: true }
);

const Payment = mongoose.model("Payment", paymentSchema);
export default Payment;

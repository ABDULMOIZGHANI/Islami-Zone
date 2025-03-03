import mongoose from "mongoose";

const freeTrialSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const FreeTrial = mongoose.model("FreeTrial", freeTrialSchema);

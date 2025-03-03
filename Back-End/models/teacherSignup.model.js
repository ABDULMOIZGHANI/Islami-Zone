import mongoose from "mongoose";

const teacherSignupSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    gender: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    whatsappNumber: {
      type: Number,
      required: true,
    },
    CNIC: {
      type: Number,
      required: true,
    },
    experience: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    language: {
      type: [],
      required: true,
    },
    teacherDescription: {
      type: String,
    },
    hearAboutUS: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Teacher = mongoose.model("Teacher", teacherSignupSchema);

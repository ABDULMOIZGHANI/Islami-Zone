import mongoose from "mongoose";

const studentSignupSchema = new mongoose.Schema(
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
    password: {
      type: String,
      required: true,
    },
    guardianName: {
      type: String,
      required: true,
    },
    chooseCourse: {
      type: String,
      required: true,
    },
    relation: {
      type: String,
      required: true,
    },
    language: {
      type: [],
      required: true,
    },
    underWhichTeacher: {
      type: String,
      required: true,
    },
    studentDescription: {
      type: String,
    },
    hearAboutUS: {
      type: String,
      required: true,
    },
    days: {
      type: [String],
      default: [],
    },
    timing: {
      type: [],
    },
    teacher: {
      type: [],
    },
    assignment: {
      type: [String],
      default: [],
    },
    assignmentCompleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", studentSignupSchema);

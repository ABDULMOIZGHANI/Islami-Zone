import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    mainImg: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    detail: {
      type: String,
      required: true,
    },
    whatYouLearn_Title: {
      type: String,
      required: true,
    },
    whatYouLearn_Detail: {
      type: String,
      required: true,
    },
    importanceTitle: {
      type: String,
      required: true,
    },
    ImportanceHeading: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Course = mongoose.model("Course", courseSchema);

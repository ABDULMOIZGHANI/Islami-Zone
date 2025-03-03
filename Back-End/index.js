import dotenv from "dotenv";
import express from "express";
import connectDB from "./DB/index.js";
import cors from "cors";
import { Course } from "./models/all-courses.model.js";
import { FreeTrial } from "./models/free-trial.model.js";
import { Testimonial } from "./models/testimonials.model.js";
import bodyParser from "body-parser";
dotenv.config({ path: "./env" });
import authRoutes from "./Routes/AuthRouter.js";
import { User } from "./models/studentSignup.model.js";
import { Teacher } from "./models/teacherSignup.model.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use("/auth", authRoutes);

connectDB()
  .then(() => {
    app.put("/teacher/update/:id", async (req, res) => {
      const { id } = req.params;
      const updatedData = req.body;

      try {
        const updatedTeacher = await Teacher.findByIdAndUpdate(
          id,
          updatedData,
          {
            new: true,
            runValidators: true,
          }
        );

        if (!updatedTeacher) {
          return res.status(404).json({
            success: false,
            message: "Teacher not found",
          });
        }

        res.status(200).json({
          success: true,
          message: "Teacher updated successfully",
          data: updatedTeacher,
        });
      } catch (error) {
        console.error("Error updating teacher:", error);
        res.status(500).json({
          success: false,
          message: "Failed to update Teachert",
          error: error.message,
        });
      }
    });

    // student form updation route
    app.put("/students/update/:id", async (req, res) => {
      const { id } = req.params; // Get the student ID from the URL
      const updatedData = req.body; // Get the updated data from the request body

      try {
        // Find the student by ID and update their data
        const updatedStudent = await User.findByIdAndUpdate(id, updatedData, {
          new: true, // Return the updated document
          runValidators: true, // Run schema validators on update
        });

        if (!updatedStudent) {
          return res.status(404).json({
            success: false,
            message: "Student not found",
          });
        }

        // Send a success response with the updated student data
        res.status(200).json({
          success: true,
          message: "Student updated successfully",
          data: updatedStudent,
        });
      } catch (error) {
        console.error("Error updating student:", error);
        res.status(500).json({
          success: false,
          message: "Failed to update student",
          error: error.message,
        });
      }
    });

    // get a signle user to update bya an admin
    app.get("/updateStudent", (req, res) => {
      const id = req.params.id;
      User.findById({ _id: id })
        .then((user) => res.json(user))
        .catch((err) => res.json(err));
    });

    // route for getting all teacher from database
    app.get("/all-teachers", (req, res) => {
      Teacher.find(req.body)
        .then((users) => res.json(users))
        .catch((err) => res.json(err));
    });

    //delete teacher by search their ID
    app.delete("/deleteTeacher/:id", (req, res) => {
      const id = req.params.id;
      Teacher.findByIdAndDelete({ _id: id })
        .then(() => res.json({ message: "User deleted successfully" }))
        .catch((err) => res.json(err));
    });

    // route for getting all students from database
    app.get("/all-students", (req, res) => {
      User.find(req.body)
        .then((users) => res.json(users))
        .catch((err) => res.json(err));
    });

    //delete student by search their ID
    app.delete("/deleteUser/:id", (req, res) => {
      const id = req.params.id;
      User.findByIdAndDelete({ _id: id })
        .then(() => res.json({ message: "User deleted successfully" }))
        .catch((err) => res.json(err));
    });

    // route for getting all students from database
    app.get("/all-students", (req, res) => {
      User.find(req.body)
        .then((users) => res.json(users))
        .catch((err) => res.json(err));
    });

    //update value of approve
    app.put("/approve-testimonial/:id", (req, res) => {
      try {
        const id = req.params.id;
        console.log(id);

        Testimonial.findByIdAndUpdate({ _id: id }, { approve: true })
          .then((users) => res.json(users))
          .catch((err) => res.json(err));
      } catch (error) {
        console.error("Error updating testimonial:", error);
        res.status(500).json({ message: "Internal Server Error" });
      }
    });

    //delete student by search their ID
    app.delete("/deleteTestimonial/:id", (req, res) => {
      const id = req.params.id;
      Testimonial.findByIdAndDelete({ _id: id })
        .then(() => res.json({ message: "User deleted successfully" }))
        .catch((err) => res.json(err));
    });

    // route for getting all testimonials from database
    app.get("/testimonials", (req, res) => {
      Testimonial.find(req.body)
        .then((users) => res.json(users))
        .catch((err) => res.json(err));
    });

    // route for sending the testimonial form data to the database
    app.post("/testimonial", (req, res) => {
      Testimonial.create(req.body)
        .then((users) => res.json(users))
        .catch((err) => res.json(err));
    });

    // route for deleting the free trial form data to the database
    app.delete("/free-trial/:id", (req, res) => {
      const id = req.params.id;
      FreeTrial.findByIdAndDelete({ _id: id })
        .then(() => res.json({ message: "Free Trial deleted successfully" }))
        .catch((err) => res.json(err));
    });

    // route for sending the free trial form data to the database
    app.get("/free-trial", (req, res) => {
      FreeTrial.find(req.body)
        .then((users) => res.json(users))
        .catch((err) => res.json(err));
    });

    // route for sending the free trial form data to the database
    app.post("/free-trial", (req, res) => {
      FreeTrial.create(req.body)
        .then((users) => res.json(users))
        .catch((err) => res.json(err));
    });

    // add a course to database
    app.post("/addCourses", (req, res) => {
      Course.create(req.body)
        .then((users) => res.json(users))
        .catch((err) => res.json(err));
    });

    // delete the course
    app.delete("/coursedelete/:id", (req, res) => {
      const id = req.params.id;
      Course.findByIdAndDelete({ _id: id })
        .then(() => res.json({ message: "User deleted successfully" }))
        .catch((err) => res.json(err));
    });

    app.get("/all-courses", (req, res) => {
      Course.find(req.body)
        .then((users) => res.json(users))
        .catch((err) => res.json(err));
    });

    app.listen(process.env.PORT, (req, res) => {
      console.log("SERVER IS RUNNING");
    });
  })
  .catch((err) => console.log(err));

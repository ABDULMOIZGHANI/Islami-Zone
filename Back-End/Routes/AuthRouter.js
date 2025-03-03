import express from "express";
import {
  loginValidation,
  studentSignupValidation,
  teacherSignupValidation,
} from "../Middlewares/AuthValidation.js";
import { login, signup, teacherSignup } from "../Controllers/AuthController.js";

const router = express.Router();

router.post("/signup/student", studentSignupValidation, signup);
router.post("/signup/teacher", teacherSignupValidation, teacherSignup);
router.post("/login", loginValidation, login);

export default router;

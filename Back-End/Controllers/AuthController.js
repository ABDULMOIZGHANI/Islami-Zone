import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/studentSignup.model.js";
import { Teacher } from "../models/teacherSignup.model.js"; // ✅ Fixed Typo
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const signup = async (req, res) => {
  try {
    const {
      name,
      email,
      gender,
      age,
      country,
      phoneNumber,
      whatsappNumber,
      chooseCourse,
      password,
      guardianName,
      relation,
      language,
      underWhichTeacher,
      studentDescription,
      hearAboutUS,
    } = req.body;

    const user = await User.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ message: "Email already exists", success: false });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      gender,
      age,
      country,
      phoneNumber,
      whatsappNumber,
      chooseCourse,
      password: hashedPassword,
      guardianName,
      relation,
      language,
      underWhichTeacher,
      studentDescription,
      hearAboutUS,
    });

    await newUser.save();

    res.status(201).json({
      success: true,
      message: "Student signup successful",
      user: newUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Student signup failed",
      error: error.message,
    });
  }
};

const teacherSignup = async (req, res) => {
  try {
    const {
      name,
      email,
      gender,
      age,
      country,
      phoneNumber,
      whatsappNumber,
      CNIC,
      experience,
      password,
      language,
      teacherDescription,
      hearAboutUS,
    } = req.body;

    const user = await Teacher.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ message: "Email already exists", success: false });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new Teacher({
      name,
      email,
      gender,
      age,
      country,
      phoneNumber,
      whatsappNumber,
      CNIC,
      experience,
      password: hashedPassword,
      language,
      teacherDescription,
      hearAboutUS,
    });

    await newUser.save();

    res.status(201).json({
      success: true,
      message: "Teacher signup successful",
      user: newUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Teacher signup failed",
      error: error.message,
    });
  }
};

//  Improved Login Function to Support Both Students & Teachers
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Search for user in both collections
    let user = await User.findOne({ email });
    let userType = "student";

    if (!user) {
      user = await Teacher.findOne({ email });
      userType = "teacher";
    }

    if (!user) {
      return res.status(400).json({
        message: "Invalid email or password",
        success: false,
      });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid email or password",
        success: false,
      });
    }

    // Generate JWT Token
    const token = jwt.sign(
      { userId: user._id, email: user.email, role: userType },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(200).json({
      message: "Login successful",
      success: true,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        gender: user.gender,
        CNIC: user.CNIC,
        role: userType,
      },
      token,
    });
  } catch (error) {
    res.status(500).json({
      message: "Login failed",
      success: false,
      error: error.message,
    });
  }
};

export { signup, login, teacherSignup };

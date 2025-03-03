import Joi from "joi";

const studentValidationSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  email: Joi.string().email().required(),
  gender: Joi.string().valid("male", "female").required(),
  age: Joi.number().integer().min(4).max(100).required(),
  country: Joi.string().required(),
  chooseCourse: Joi.string().required(),
  phoneNumber: Joi.string()
    .pattern(/^[0-9]{10,15}$/)
    .required(),
  whatsappNumber: Joi.string()
    .pattern(/^[0-9]{10,15}$/)
    .required(),
  password: Joi.string().min(6).required(),
  confirmPassword: Joi.string().valid(Joi.ref("password")).required(),
  guardianName: Joi.string().min(3).max(50).required(),
  relation: Joi.string().min(3).max(50).required(),
  language: Joi.array().items(Joi.string()).required(),
  underWhichTeacher: Joi.string().required(),
  studentDescription: Joi.string().min(10).max(500).required(),
  hearAboutUS: Joi.string().required(),
});

const teacherValidationSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  email: Joi.string().email().required(),
  gender: Joi.string().valid("male", "female").required(),
  age: Joi.number().integer().min(18).max(100).required(), // Teachers should be at least 18+
  country: Joi.string().required(),
  phoneNumber: Joi.string()
    .pattern(/^[0-9]{10,15}$/)
    .required(),
  whatsappNumber: Joi.string()
    .pattern(/^[0-9]{10,15}$/)
    .required(),
  CNIC: Joi.string().min(12).max(20).required(),
  experience: Joi.string().required(),
  password: Joi.string().min(6).required(),
  confirmPassword: Joi.string().valid(Joi.ref("password")).required(),
  language: Joi.array().items(Joi.string()).required(),
  teacherDescription: Joi.string().min(10).max(500), // Optional but with limits
  hearAboutUS: Joi.string().required(),
});

// Middleware for student validation
const studentSignupValidation = (req, res, next) => {
  const { error } = studentValidationSchema.validate(req.body);
  if (error) {
    return res
      .status(400)
      .json({ error: error.details[0].message, success: false });
  }
  next();
};

// Middleware for teacher validation
const teacherSignupValidation = (req, res, next) => {
  const { error } = teacherValidationSchema.validate(req.body);
  if (error) {
    return res
      .status(400)
      .json({ error: error.details[0].message, success: false });
  }
  next();
};

// Middleware for login validation (Same for both)
const loginValidation = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res
      .status(400)
      .json({ error: error.details[0].message, success: false });
  }

  next();
};

export { studentSignupValidation, teacherSignupValidation, loginValidation };

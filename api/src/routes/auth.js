import Express from "express";
import { registerValidationRules } from "../middleware/validationRules/registerValidation.js";
import { validate } from "../middleware/validate.js";
import { loginUser, registerUser } from "../controllers/authController.js";
import { loginValidationSchema } from "../middleware/validationRules/loginValidation.js";
import { asyncErrorHandler } from "../utils/asyncErrorHandler.js";

const router = Express.Router();

//register users
router.post(
  "/register",
  registerValidationRules(),
  validate,
  asyncErrorHandler(registerUser)
);

//login
router.post(
  "/login",
  loginValidationSchema,
  validate,
  asyncErrorHandler(loginUser)
);

export default router;

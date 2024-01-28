import Express from "express";
import { registerValidationRules } from "../middleware/validationRules/registerValidation.js";
import { validate } from "../middleware/validate.js";
import { loginUser, registerUser } from "../controllers/authController.js";
import { loginValidationRules } from "../middleware/validationRules/loginValidation.js";

const router = Express.Router();

//register users
router.post("/register", registerValidationRules(), validate, registerUser);

//login
router.post("/login", loginValidationRules(), validate, loginUser);

export default router;

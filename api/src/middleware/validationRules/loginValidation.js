import { body } from "express-validator";

export const loginValidationRules = () => {
  return [
    body("username").not().isEmpty().withMessage("Username is required"),
    body("password").not().isEmpty().withMessage("Password is required"),
  ];
};

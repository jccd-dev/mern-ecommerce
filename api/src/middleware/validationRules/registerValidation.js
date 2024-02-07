import { body } from "express-validator";
import { Users } from "../../models/UserModel.js";

export const registerValidationRules = () => {
  return [
    body("email")
      .isEmail()
      .withMessage("Invalid Email Address")
      .custom(async (email) => {
        const existingUser = await Users.findOne({ email });
        if (existingUser) {
          throw new Error("Email already in use");
        }
        return true;
      }),
    body("password")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 Characters long")
      .matches(/\d/)
      .withMessage("Password must contain a number")
      .matches(/[a-zA-Z]/)
      .withMessage("Password must contain a letter"),
    body("firstName")
      .not()
      .isEmpty()
      .withMessage("First Name is Required")
      .matches(/^[A-Za-z\s]+$/)
      .withMessage("First Name must contain only letters and space"),
    body("lastName")
      .not()
      .isEmpty()
      .withMessage("Last Name is Required")
      .matches(/^[A-Za-z\s]+$/)
      .withMessage("Last Name must contain only letters and space"),
    body("phoneNumber")
      .isMobilePhone()
      .withMessage("Invalid Phone Number")
      .optional({ nullable: true, checkFalsy: true }),
    body("username")
      .not()
      .isEmpty()
      .withMessage("Username is required")
      .custom(async (username) => {
        const existingUser = await Users.findOne({ username });
        if (existingUser) {
          throw new Error("Username already in use");
        }
        return true;
      }),
  ];
};

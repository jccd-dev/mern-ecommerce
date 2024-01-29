import { body, checkSchema } from "express-validator";

// export const loginValidationRules = () => {
//   return [
//     body("username").not().isEmpty().withMessage("Username is required"),
//     body("password").not().isEmpty().withMessage("Password is required"),
//   ];
// };

export const loginValidationSchema = checkSchema({
  username: {
    in: ["body"],
    notEmpty: {
      errorMessage: "Username is required",
    },
  },
  password: {
    in: ["body"],
    notEmpty: {
      errorMessage: "Password is required",
    },
  },
});

import { checkSchema } from "express-validator";
import { Users } from "../../models/UserModel.js";

const updateUserValidationSchema = {
  email: {
    in: ["body"],
    notEmpty: {
      errorMessage: "Email address is required",
    },
    isEmail: {
      errorMessage: "Invalid email address",
    },
  },
  password: {
    in: ["body"],
    isLength: {
      options: { min: 8 },
      errorMessage: "Password must be at least 8 Characters long",
    },
    matches: {
      options: /\d/, // Check for at least one digit
      errorMessage: "Password must contain at least one number",
    },
    matches: {
      options: /[a-zA-Z]/, // Check for at least one letter
      errorMessage: "Password must contain at least one letter",
    },
  },
  first_name: {
    in: ["body"],
    notEmpty: {
      errorMessage: "First Name is required",
    },
    matches: {
      options: /^[A-Za-z\s]+$/,
      errorMessage: "First Name must contain only letters and space",
    },
  },
  last_name: {
    in: ["body"],
    notEmpty: {
      errorMessage: "Last Name is required",
    },
    matches: {
      options: /^[A-Za-z\s]+$/,
      errorMessage: "Last Name must contain only letters and space",
    },
  },
  p_number: {
    in: ["body"],
    optional: true,
    isMobilePhone: {
      errorMessage: "Invalid phone number",
    },
  },
  username: {
    in: ["body"],
    notEmpty: {
      errorMessage: "Username is required",
    },
  },
};

//check only the id from param
const userIdValidation = {
  id: {
    in: ["params"],
    notEmpty: {
      errorMessage: "User Id parameters is required",
    },
    isMongoId: {
      errorMessage: "Invalid user id",
    },
  },
};

export const userUpdateValidation = checkSchema({
  ...updateUserValidationSchema,
  ...userIdValidation,
});

export const deleteUserValidation = checkSchema(userIdValidation);

export const getUserValidation = checkSchema(userIdValidation);

export const getUsersValidation = checkSchema({
  new: {
    in: ["query"],
    isBoolean: {
      errorMessage: "New query should be a boolean",
    },
    optional: true,
  },
});

import { checkSchema } from "express-validator";

const cartValidationRules = {
  userId: {
    in: ["body"],
    notEmpty: { errorMessage: "User Id is required" },
    isMongoId: { errorMessage: "Invalid User Id" },
  },
  "products.*.productId": {
    in: ["body"],
    notEmpty: { errorMessage: "Product Id is required" },
    isMongoId: {
      errorMessage: "Invalid Product Id",
    },
  },
  "products.*.quantity": {
    in: ["body"],
    isInt: {
      options: { min: 1 },
      errorMessage: "Quantity must be a positive integer",
    },
  },
  "products.*.color": {
    in: ["body"],
    notEmpty: { errorMessage: "Product Color is required" },
    isString: {
      errorMessage: "Color must be a string",
    },
  },
  "products.*.size": {
    in: ["body"],
    notEmpty: { errorMessage: "Product Size is required" },
    isString: {
      errorMessage: "Size must be a string",
    },
  },
};

const cartIdValidation = {
  id: {
    in: ["params"],
    isMongoId: {
      errorMessage: "Invalid Cart Id",
    },
  },
};

export const addCartValidation = checkSchema(cartValidationRules);

export const updateCartValidation = checkSchema({
  ...cartValidationRules,
  ...cartIdValidation,
});

export const deleteCartValidition = checkSchema(cartIdValidation);

export const getUserCartValidation = checkSchema({
  userId: {
    in: ["params"],
    isMongoId: {
      errorMessage: "Invalid User Id",
    },
  },
});

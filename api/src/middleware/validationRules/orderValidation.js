import { checkSchema } from "express-validator";

export const createOrderValidation = checkSchema({
  userId: {
    in: ["body"],
    notEmpty: {
      errorMessage: "User Id is required",
    },
    isMongoId: {
      errorMessage: "Invalid User Id",
    },
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
    notEmpty: { errorMessage: "Product Quantity is required" },
  },
  "products.*.color": {
    in: ["body"],
    notEmpty: { errorMessage: "Product Color is required" },
  },
  "products.*.size": {
    in: ["body"],
    notEmpty: { errorMessage: "Product Size is required" },
  },
  amount: {
    in: ["body"],
    notEmpty: {
      errorMessage: "Amount is required",
    },
    isDecimal: {
      options: {
        decimal_digits: "0,2",
      },
      errorMessage: "Amount must be a decimal with up to two decimal places",
    },
    isFloat: {
      options: {
        min: 0,
      },
      errorMessage: "Amount must be a positive number",
    },
  },
  address: {
    in: ["body"],
    isObject: {
      errorMessage: "Address must be an Object",
    },
  },
});

export const updateOrderValidation = checkSchema({
  id: {
    in: ["params"],
    isMongoId: {
      errorMessage: "Invalid Order Id",
    },
  },
  status: {
    in: ["body"],
    isIn: {
      options: [["pending", "delivered", "canceled"]],
      errorMessage: "Status must be one of 'delivered', 'pending' or 'canceled",
    },
  },
});

export const deleteOrderValidation = checkSchema({
  id: {
    in: ["params"],
    isMongoId: {
      errorMessage: "Invalid Order Id",
    },
  },
});

export const getUserOrdersValidation = checkSchema({
  id: {
    in: ["params"],
    isMongoId: {
      errorMessage: "Invalid User Id",
    },
  },
});

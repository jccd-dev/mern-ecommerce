import { checkSchema } from "express-validator";

export const stripePaymentValidation = checkSchema({
  products: {
    in: ["body"],
    notEmpty: {
      errorMessage: "Products Data are required",
    },
    isArray: {
      errorMessage: "Products should be an array",
    },
  },
});

export const stripeGetSessionStatsValidation = checkSchema({
  session_id: {
    in: ["query"],
    notEmpty: {
      errorMessage: "Stripe Session Id is required",
    },
    isString: {
      errorMessage: "Stripe Session Id must be a string",
    },
  },
});

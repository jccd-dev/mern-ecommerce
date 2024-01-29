import { body, param, query, checkSchema } from "express-validator";
import mongoose from "mongoose";

const productSchema = {
  title: {
    in: ["body"],
    notEmpty: {
      errorMessage: "Product Name or Title is required",
    },
    isString: {
      errorMessage: "Product Name or Title must be a string",
    },
  },
  description: {
    in: ["body"],
    notEmpty: {
      errorMessage: "Prodcut Description is required",
    },
  },
  image: {
    in: ["body"],
    notEmpty: {
      errorMessage: "Image value/url is required",
    },
    isString: {
      errorMessage: "Image value/url must be a string",
    },
  },
  category: {
    in: ["body"],
    notEmpty: {
      errorMessage: "Category is required",
    },
    isArray: {
      errorMessage: "Category must be an array",
    },
  },
  size: {
    in: ["body"],
    notEmpty: {
      errorMessage: "Size is required",
    },
    isArray: {
      errorMessage: "Size must be an array",
    },
  },
  color: {
    in: ["body"],
    notEmpty: {
      errorMessage: "Color is required",
    },
    isArray: {
      errorMessage: "Color must be an array",
    },
  },
  price: {
    in: ["body"],
    notEmpty: {
      errorMessage: "Price is required",
    },
    isDecimal: {
      options: {
        decimal_digits: "0,2",
      },
      errorMessage: "Price must be a decimal with up to two decimal places",
    },
    isFloat: {
      options: {
        min: 0,
      },
      errorMessage: "Price must be a positive number",
    },
  },
  inStock: {
    in: ["body"],
    optional: true,
    isBoolean: {
      errorMessage: "It must be boolean value",
    },
  },
  isFeatured: {
    in: ["body"],
    optional: true,
    isBoolean: {
      errorMessage: "It must be boolean value",
    },
  },
};

const productID = {
  id: {
    in: ["params"],
    notEmpty: {
      errorMessage: "Product Id parameters is required",
    },
    isMongoId: {
      errorMessage: "Invalid product id",
    },
  },
};

export const createProductValidationSchema = checkSchema(productSchema);

export const updateProductSchema = checkSchema({
  ...productSchema,
  ...productID,
});

export const deleteProductSchema = checkSchema(productID);

export const getProductSchema = checkSchema(productID);
export const getProductsSchema = checkSchema({
  featured: {
    in: ["query"],
    optional: true,
    isBoolean: {
      errorMessage: "The 'featured' value should be a boolean.",
    },
  },
  category: {
    in: ["query"],
    optional: true,
    isString: {
      errorMessage: "The category must be a string",
    },
  },
});

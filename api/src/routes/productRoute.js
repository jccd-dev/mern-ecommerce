import Express from "express";
import { verifyTokenAndAdmin } from "../middleware/verifyToken.js";
import {
  createProductValidationSchema,
  deleteProductSchema,
  getProductSchema,
  getProductsSchema,
  updateProductSchema,
} from "./../middleware/validationRules/productValidation.js";
import { validate } from "./../middleware/validate.js";
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
} from "./../controllers/productsController.js";
import { asyncErrorHandler } from "./../utils/asyncErrorHandler.js";

const router = Express.Router();

router.post(
  "/",
  verifyTokenAndAdmin,
  createProductValidationSchema,
  validate,
  asyncErrorHandler(createProduct)
);

//update product
router.put(
  "/:id",
  verifyTokenAndAdmin,
  updateProductSchema,
  validate,
  asyncErrorHandler(updateProduct)
);

//delete product
router.delete(
  "/:id",
  verifyTokenAndAdmin,
  deleteProductSchema,
  validate,
  asyncErrorHandler(deleteProduct)
);

//get a product
router.get(
  "/find/:id",
  getProductSchema,
  validate,
  asyncErrorHandler(getProduct)
);

//get all products
router.get("/", getProductsSchema, validate, asyncErrorHandler(getProducts));

export default router;

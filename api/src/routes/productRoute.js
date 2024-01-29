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

const router = Express.Router();

router.post(
  "/",
  verifyTokenAndAdmin,
  createProductValidationSchema,
  validate,
  createProduct
);

//update product
router.put(
  "/:id",
  verifyTokenAndAdmin,
  updateProductSchema,
  validate,
  updateProduct
);

//delete product
router.delete(
  "/:id",
  verifyTokenAndAdmin,
  deleteProductSchema,
  validate,
  deleteProduct
);

//get a product
router.get("/find/:id", getProductSchema, validate, getProduct);

//get all products
router.get("/", getProductsSchema, validate, getProducts);

export default router;

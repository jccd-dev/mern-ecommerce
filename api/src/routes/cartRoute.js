import Express from "express";
import {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndAuth,
} from "../middleware/verifyToken.js";
import {
  addCartController,
  deleteCartController,
  getAllCartsController,
  getUserCartController,
  updateCartController,
} from "../controllers/cartController.js";
import {
  addCartValidation,
  deleteCartValidition,
  getUserCartValidation,
  updateCartValidation,
} from "../middleware/validationRules/cartValidation.js";
import { validate } from "../middleware/validate.js";

const router = Express.Router();

//add to cart
router.post("/", verifyToken, addCartValidation, validate, addCartController);

//update user
router.put(
  "/:id",
  verifyTokenAndAuth,
  updateCartValidation,
  validate,
  updateCartController
);

//delete cart
router.delete(
  "/:id",
  verifyTokenAndAuth,
  deleteCartValidition,
  validate,
  deleteCartController
);

//get user cart
router.get(
  "/find/:userId",
  verifyTokenAndAuth,
  getUserCartValidation,
  validate,
  getUserCartController
);

//get all carts
router.get("/", verifyTokenAndAdmin, getAllCartsController);

export default router;

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
import { asyncErrorHandler } from "../utils/asyncErrorHandler.js";

const router = Express.Router();

//add to cart
router.post(
  "/",
  verifyToken,
  addCartValidation,
  validate,
  asyncErrorHandler(addCartController)
);

//update user
router.put(
  "/:id",
  verifyTokenAndAuth,
  updateCartValidation,
  validate,
  asyncErrorHandler(updateCartController)
);

//delete cart
router.delete(
  "/:id",
  verifyTokenAndAuth,
  deleteCartValidition,
  validate,
  asyncErrorHandler(deleteCartController)
);

//get user cart
router.get(
  "/find/:userId",
  verifyTokenAndAuth,
  getUserCartValidation,
  validate,
  asyncErrorHandler(getUserCartController)
);

//get all carts
router.get("/", verifyTokenAndAdmin, asyncErrorHandler(getAllCartsController));

export default router;

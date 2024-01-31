import Express from "express";
import { Order } from "../models/OrdersModel.js";
import {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndAuth,
} from "../middleware/verifyToken.js";
import {
  createOrderController,
  deleteOrderController,
  getAllOrdersController,
  getUserOrdersController,
  monthlyIncomeStatsController,
  updateOrderController,
} from "../controllers/ordersController.js";
import {
  createOrderValidation,
  deleteOrderValidation,
  getUserOrdersValidation,
  updateOrderValidation,
} from "../middleware/validationRules/orderValidation.js";
import { validate } from "../middleware/validate.js";

const router = Express.Router();

//create order
router.post(
  "/",
  verifyToken,
  createOrderValidation,
  validate,
  createOrderController
);

//update order
router.put(
  "/:id",
  verifyTokenAndAdmin,
  updateOrderValidation,
  validate,
  updateOrderController
);

//delete order
router.delete(
  "/:id",
  verifyTokenAndAdmin,
  deleteOrderValidation,
  validate,
  deleteOrderController
);

//get user orders
router.get(
  "/find/:userId",
  verifyTokenAndAuth,
  getUserOrdersValidation,
  validate,
  getUserOrdersController
);

//get all orders
router.get("/", verifyTokenAndAdmin, getAllOrdersController);

//get monthly income
router.get("/income", verifyTokenAndAdmin, monthlyIncomeStatsController);

export default router;

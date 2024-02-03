import Express from "express";
import {
  stripePaymentController,
  stripeSessionStatusController,
} from "../controllers/stripeController.js";
import { verifyToken } from "../middleware/verifyToken.js";
import { asyncErrorHandler } from "./../utils/asyncErrorHandler.js";
import {
  stripeGetSessionStatsValidation,
  stripePaymentValidation,
} from "../middleware/validationRules/stripeValidations.js";
import { validate } from "./../middleware/validate.js";

const router = Express.Router();

router.post(
  "/payment",
  verifyToken,
  stripePaymentValidation,
  validate,
  asyncErrorHandler(stripePaymentController)
);

router.get(
  "/session-status",
  verifyToken,
  stripeGetSessionStatsValidation,
  validate,
  asyncErrorHandler(stripeSessionStatusController)
);

export default router;

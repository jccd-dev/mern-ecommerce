import Express from "express";
import {
  verifyTokenAndAdmin,
  verifyTokenAndAuth,
} from "../middleware/verifyToken.js";
import {
  deleteUserController,
  getUserController,
  getUsersController,
  updateUserController,
  userStatsController,
} from "../controllers/userController.js";
import {
  deleteUserValidation,
  getUserValidation,
  getUsersValidation,
  userUpdateValidation,
} from "../middleware/validationRules/userValidations.js";
import { validate } from "./../middleware/validate.js";
import { asyncErrorHandler } from "./../utils/asyncErrorHandler.js";

const router = Express.Router();

//update user
router.put(
  "/:id",
  verifyTokenAndAuth,
  userUpdateValidation,
  validate,
  asyncErrorHandler(updateUserController)
);

//delete user
router.delete(
  "/:id",
  verifyTokenAndAuth,
  deleteUserValidation,
  validate,
  asyncErrorHandler(deleteUserController)
);

//get specific user
router.get(
  "/find/:id",
  verifyTokenAndAdmin,
  getUserValidation,
  validate,
  asyncErrorHandler(getUserController)
);

//get all user except for admin
router.get("/", verifyTokenAndAdmin, asyncErrorHandler(getUsersController));

//get user statistics
router.get(
  "/stats",
  verifyTokenAndAdmin,
  asyncErrorHandler(userStatsController)
);
export default router;

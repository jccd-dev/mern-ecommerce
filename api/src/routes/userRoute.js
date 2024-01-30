import Express from "express";
import { Users } from "../models/UserModel.js";
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

const router = Express.Router();

//update user
router.put(
  "/:id",
  verifyTokenAndAuth,
  userUpdateValidation,
  validate,
  updateUserController
);

//delete user
router.delete(
  "/:id",
  verifyTokenAndAuth,
  deleteUserValidation,
  validate,
  deleteUserController
);

//get specific user
router.get(
  "/find/:id",
  verifyTokenAndAdmin,
  getUserValidation,
  validate,
  getUserController
);

//get all user except for admin
router.get(
  "/",
  verifyTokenAndAdmin,
  getUsersValidation,
  validate,
  getUsersController
);

//get user statistics
router.get("/stats", verifyTokenAndAdmin, userStatsController);
export default router;

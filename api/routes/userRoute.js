import Express from "express";
import { Users } from "../models/UserModel.js";
import {
  verifyTokenAndAdmin,
  verifyTokenAndAuth,
} from "../middleware/verifyToken.js";

const router = Express.Router();

//update user
router.put("/:id", verifyTokenAndAuth, async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET_KEY
    ).toString();
  }

  try {
    const updatedUser = await Users.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

//delete user
router.delete("/:id", verifyTokenAndAuth, async (req, res) => {
  try {
    await Users.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Successfully Deleted" });
  } catch (error) {
    res.status(500).json("Internal server error");
  }
});

//get specific user
router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
  const options = {
    projection: {
      _id: 1,
      username: 1,
      createdAt: 1, // Include createdAt field
      updatedAt: 1, // Include updatedAt field
    },
  };

  try {
    const user = await Users.findById(req.params.id, options.projection);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
});

//get all user except for admin
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  const options = {
    projection: {
      _id: 1,
      username: 1,
      createdAt: 1, // Include createdAt field
      updatedAt: 1, // Include updatedAt field
    },
  };

  const query = req.query.new;
  try {
    const users = query
      ? await Users.find({ isAdmin: { $ne: true } }, options.projection)
          .sort({ _id: -1 })
          .limit(5)
      : await Users.find({ isAdmin: { $ne: true } }, options.projection);
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error" });
  }
});

//get user stats
router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
  const date = new Date();
  // get the full-year backward from exact current day
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

  try {
    const data = await Users.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error" });
  }
});
export default router;

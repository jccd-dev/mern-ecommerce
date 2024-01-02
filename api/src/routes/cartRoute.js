import Express from "express";
import { Cart } from "../models/CartModel.js";
import {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndAuth,
} from "../middleware/verifyToken.js";

const router = Express.Router();

//add to cart
router.post("/", verifyToken, async (req, res) => {
  const newCart = new Cart(req.body);
  console.log(req.body);
  try {
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } catch (error) {
    console.log(error);
    res.status(500).json("internal server error");
  }
});

//update user
router.put("/:id", verifyTokenAndAuth, async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCart);
  } catch (error) {
    res.status(500).json(error);
  }
});

//delete cart
router.delete("/:id", verifyTokenAndAuth, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Successfully Deleted" });
  } catch (error) {
    res.status(500).json("Internal server error");
  }
});

//get user cart
router.get("/find/:userId", verifyTokenAndAuth, async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
    res.status(200).json(cart);
  } catch (error) {
    console.log(error);
    res.status(500).json("internal server error");
  }
});

//get all carts
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(200).json(carts);
  } catch (error) {
    console.log(error);
    res.status(500).json("internal server error");
  }
});

export default router;

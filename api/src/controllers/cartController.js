import { Cart } from "../models/CartModel.js";

export const addCartController = async (req, res) => {
  const cartData = new Cart(req.body);
  const savedCart = await cartData.save();
  res.status(200).json(savedCart);
};

export const updateCartController = async (req, res) => {
  const updatedCart = await Cart.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    { new: true }
  );
  res
    .status(200)
    .json({ message: "Cart Updated Successfully", cartData: updatedCart });
};

export const deleteCartController = async (req, res) => {
  await Cart.findByIdAndDelete(req.params.id);
  res.status(200).json({ message: "Successfully Deleted" });
};

export const getUserCartController = async (req, res) => {
  const cart = await Cart.findOne({ userId: req.params.userId });
  res.status(200).json(cart);
};

export const getAllCartsController = async (req, res) => {
  const carts = await Cart.find();
  res.status(200).json(carts);
};

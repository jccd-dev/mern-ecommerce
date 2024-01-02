import Express from "express";
import { verifyTokenAndAdmin } from "../middleware/verifyToken.js";
import { Product } from "../models/ProductsModel.js";

const router = Express.Router();

router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newProduct = new Product(req.body);
  console.log(req.body);
  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json("internal server error");
  }
});

//update user
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json(error);
  }
});

//delete product
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Successfully Deleted" });
  } catch (error) {
    res.status(500).json("Internal server error");
  }
});

//get a product
router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json("internal server error");
  }
});

//get all products
router.get("/", async (req, res) => {
  const newQuery = req.query.new;
  const categoryQuery = req.query.cat;

  try {
    let products;
    if (newQuery) {
      products = await Product.find().sort({ createdAt: -1 }).limit(5);
    } else if (categoryQuery) {
      products = await Product.find({
        category: { $in: [categoryQuery] },
      });
    } else {
      products = await Product.find();
    }

    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json("internal server error");
  }
});

export default router;

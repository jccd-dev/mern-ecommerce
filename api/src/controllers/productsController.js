import { Product } from "../models/ProductsModel.js";

//create
export const createProduct = async (req, res) => {
  const newProduct = new Product(req.body);
  console.log(req.body);
  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json("internal server error");
  }
};

//update
export const updateProduct = async (req, res) => {
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
};

//delete
export const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Successfully Deleted" });
  } catch (error) {
    res.status(500).json("Internal server error");
  }
};

//read /get
export const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json("internal server error");
  }
};

export const getProducts = async (req, res) => {
  const featured = req.query.featured;
  const categoryQuery = req.query.category;

  try {
    let products;
    if (featured) {
      products = await Product.find({ isFeatured: true })
        .sort({ createdAt: -1 })
        .limit(8);
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
};

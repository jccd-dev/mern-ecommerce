import { Product } from "../models/ProductsModel.js";

//create
export const createProduct = async (req, res) => {
  const newProduct = new Product(req.body);
  console.log(req.body);
  const savedProduct = await newProduct.save();
  res.status(200).json(savedProduct);
};

//update
export const updateProduct = async (req, res) => {
  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    { new: true }
  );
  res.status(200).json(updatedProduct);
};

//delete
export const deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.status(200).json({ message: "Successfully Deleted" });
};

//read /get
export const getProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.status(200).json(product);
};

export const getProducts = async (req, res) => {
  const featured = req.query.featured;
  const categoryQuery = req.query.category;

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
};

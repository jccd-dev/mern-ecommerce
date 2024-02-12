import { useState, useEffect } from "react";
import axios from "axios";
import ProductItem from "./ProductItem";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  //get the products from api
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/products?featured=true`,
        );

        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  });
  return (
    <div className="mb-4 px-2 py-2 md:px-5 md:py-0">
      <h1 className="mb-3 text-center text-4xl font-bold">Featured Products</h1>
      <div className=" flex w-full flex-wrap justify-evenly md:justify-between">
        {/* {popularProducts.map((item) => (
        <ProductItem img={item.img} key={item.id} />
      ))} */}
        {products.map((item) => (
          <ProductItem img={item.image} key={item._id} id={item._id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;

import { popularProducts } from "../data/DataItems";
import ProductItem from "./ProductItem";
import { useEffect, useState } from "react";
import axios from "axios";

const Products = ({ category, filters, sort }) => {
  console.log(filters);
  const [products, setProducts] = useState([]);
  const [filteredProduct, setFilteredProducts] = useState(products);

  //get the products from api
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          category
            ? `http://localhost:5000/api/products?category=${category}`
            : `http://localhost:5000/api/products`,
        );

        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [category]);

  //filter the products
  useEffect(() => {
    setFilteredProducts(
      products.filter((item) =>
        Object.entries(filters).every(([key, value]) => {
          return (
            item[key] &&
            (value === "All Color" ||
              value === "All Size" ||
              item[key].includes(value))
          );
        }),
      ),
    );
  }, [products, filters]);

  //sort products
  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt),
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price),
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price),
      );
    }
  }, [sort]);

  return (
    <div className="flex w-full flex-wrap justify-evenly px-2 py-2 md:justify-between md:p-5">
      {/* {popularProducts.map((item) => (
        <ProductItem img={item.img} key={item.id} />
      ))} */}
      {filteredProduct.map((item) => (
        <ProductItem img={item.image} key={item.id} />
      ))}
    </div>
  );
};

export default Products;

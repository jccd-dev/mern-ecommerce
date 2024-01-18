import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import { useParams } from "react-router-dom";

const ProductList = () => {
  // get the parameters , when no parameters default is null
  const { category = null } = useParams();

  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  console.log(sort);

  return (
    <>
      <Navbar />
      <h1 className="title mx-4 mt-6 text-3xl font-semibold">
        {category ? category.toUpperCase() : "All Products"}
      </h1>
      <section id="filter" className="flex justify-between">
        <div className="m-4 md:m-5">
          <span className="text-md mr-0 font-semibold md:mr-5 md:text-lg">
            Filter Products
          </span>
          <select
            name="color"
            id="color"
            className="my-1 mr-0 w-full border p-3 outline-none md:mr-5 md:w-auto"
            onChange={handleFilterChange}
          >
            <option defaultValue={"All"}>All Color</option>
            <option>white</option>
            <option>black</option>
            <option>red</option>
            <option>blue</option>
            <option>green</option>
          </select>
          <select
            name="size"
            id="size"
            className="my-1 mr-0 w-full border p-3 outline-none md:mr-5 md:w-auto"
            onChange={handleFilterChange}
          >
            <option defaultValue={"All"}>All Size</option>
            <option>XL</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XS</option>
          </select>
        </div>
        <div className="m-4 md:m-5">
          <span className="text-md mr-5 font-semibold md:text-lg">
            Sort Products
          </span>
          <select
            name="color"
            id="color"
            className="my-1 mr-0 w-full border p-3 outline-none md:mr-5 md:w-auto"
            onChange={(e) => {
              setSort(e.target.value);
            }}
          >
            <option defaultValue={"newest"}>Newest</option>
            <option value={"asc"}>Price (asc)</option>
            <option value={"desc"}>Price (desc)</option>
          </select>
        </div>
      </section>
      <Products category={category} sort={sort} filters={filters} />
      <Newsletter />
      <Footer bgColor={"bg-transparent"} />
    </>
  );
};

export default ProductList;

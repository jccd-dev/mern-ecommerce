import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";

const ProductList = () => {
  return (
    <>
      <Navbar />
      <h1 className="title mx-4 mt-6 text-3xl font-semibold">Dresses</h1>
      <section id="filter" className="flex justify-between">
        <div className="m-4 md:m-5">
          <span className="text-md mr-0 font-semibold md:mr-5 md:text-lg">
            Filter Products
          </span>
          <select
            name="color"
            id="color"
            className="my-1 mr-0 w-full border p-3 outline-none md:mr-5 md:w-auto"
          >
            <option disabled selected>
              Color
            </option>
            <option>White</option>
            <option>Black</option>
            <option>Red</option>
            <option>Blue</option>
            <option>Green</option>
          </select>
          <select
            name="size"
            id="size"
            className="my-1 mr-0 w-full border p-3 outline-none md:mr-5 md:w-auto"
          >
            <option disabled selected>
              Size
            </option>
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
          >
            <option selected>Newest</option>
            <option>Price (asc)</option>
            <option>Price (desc)</option>
          </select>
        </div>
      </section>
      <Products />
      <Newsletter />
      <Footer />
    </>
  );
};

export default ProductList;

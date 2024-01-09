import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";

const ProductList = () => {
  return (
    <>
      <Navbar />
      <h1 className="title text-2xl m-5">Dresses</h1>
      <section id="filter" className="flex justify-between">
        <div className="m-5">
          <span className="text-lg font-semibold mr-5">Filter Products</span>
          <select name="color" id="color" className="p-3 mr-5 outline-none">
            <option disabled selected>
              Color
            </option>
            <option>White</option>
            <option>Black</option>
            <option>Red</option>
            <option>Blue</option>
            <option>Green</option>
          </select>
          <select name="size" id="size" className="p-3 mr-5 outline-none">
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
        <div className="m-5">
          <span className="text-lg font-semibold mr-5">Sort Products</span>
          <select name="color" id="color" className="p-3 mr-5 outline-none">
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

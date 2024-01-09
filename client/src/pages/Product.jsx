import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../components/Navbar";
import Color from "../components/Product/Color";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
const Product = () => {
  return (
    <>
      <Navbar />
      <section className="p-12 flex">
        <div className="imgcon flex-1">
          <img
            src="https://i.ibb.co/S6qMxwr/jean.jpg"
            alt=""
            className="w-full h-[90vh] object-cover"
          />
        </div>
        <div className="info flex-1 px-12">
          <h1 className="title text-3xl font-semibold">Cargo Pants</h1>
          <div className="desc my-5">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Laudantium, deleniti. Aliquam magnam facere nisi aut explicabo
              vel, sed tempora dolor eius dolorem illo ut necessitatibus, nobis
              repellat, laborum exercitationem nihil!
            </p>
          </div>
          <span className="price font-extralight text-4xl">
            <b>$</b> 20.00
          </span>
          <div className="fltercon w-1/2 my-7 flex justify-between">
            <div className="filter flex items-center">
              <span className="filtertitle font-light text-xl">Color: </span>
              <Color color="blue" />
              <Color color="gray" />
              <Color color="green" />
            </div>
            <div className="filter">
              <span className="filtertitle font-light text-xl">Size: </span>
              <select name="size" id="size" className="ml-2 p-2 outline-none">
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
          </div>
          <div className="addcon w-1/2 flex items-center justify-between">
            <div className="amount flex items-center font-bold">
              <FontAwesomeIcon icon={faMinus} className="cursor-pointer" />
              <span className="quantity w-7 h-7 rounded-lg border border-sage flex items-center justify-center mx-2">
                2
              </span>
              <FontAwesomeIcon icon={faPlus} className="cursor-pointer" />
            </div>
            <button className="px-4 py-2 bg-yellowed cursor-pointer font-[500] hover:bg-yellow-500">
              Add to Cart
            </button>
          </div>
        </div>
      </section>
      <Newsletter />
      <Footer />
    </>
  );
};

export default Product;

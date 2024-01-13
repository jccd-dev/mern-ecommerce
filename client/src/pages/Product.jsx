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
      <section className="flex flex-col p-3 md:flex-row md:p-12">
        <div className="imgcon flex-1">
          <img
            src="https://i.ibb.co/S6qMxwr/jean.jpg"
            alt=""
            className="h-[40vh] w-full object-cover md:h-[70vh] lg:h-[90vh]"
          />
        </div>
        <div className="info w-full flex-1 p-3 md:px-12">
          <h1 className="title text-3xl font-semibold">Cargo Pants</h1>
          <div className="desc my-5">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Laudantium, deleniti. Aliquam magnam facere nisi aut explicabo
              vel, sed tempora dolor eius dolorem illo ut necessitatibus, nobis
              repellat, laborum exercitationem nihil!
            </p>
          </div>
          <span className="price text-4xl font-extralight">
            <b>$</b> 20.00
          </span>
          <div className="fltercon my-7 flex w-full justify-between md:w-1/2">
            <div className="flex items-center filter">
              <span className="filtertitle text-xl font-light">Color: </span>
              <Color color="blue" />
              <Color color="gray" />
              <Color color="green" />
            </div>
            <div className="filter">
              <span className="filtertitle text-xl font-light">Size: </span>
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
          <div className="addcon flex w-full items-center justify-between md:w-1/2">
            <div className="amount flex items-center font-bold">
              <FontAwesomeIcon
                icon={faMinus}
                className="cursor-pointer text-xl"
              />
              <span className="quantity border-sage mx-2 flex h-8 w-8 items-center justify-center rounded-lg border text-xl">
                2
              </span>
              <FontAwesomeIcon
                icon={faPlus}
                className="cursor-pointer text-xl"
              />
            </div>
            <button className="cursor-pointer bg-yellowed px-6 py-2 text-lg font-semibold hover:bg-yellow-500 md:px-4">
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

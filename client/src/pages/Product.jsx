import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Color from "../components/Product/Color";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { publicRequest } from "../utils/requestMethod";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cart";

const Product = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [color, setColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(`/products/find/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getProduct();
  }, [id]);

  console.log(product);

  const handleSetColor = (color) => {
    setColor(color);
  };

  /**
   * handle quantity (minimum of 1)
   *
   * @param {number} click the number to chnage the quantity
   */
  const handleQuantity = (click) => {
    setQuantity((prevQuanity) => Math.max(prevQuanity + click, 1));
  };

  const handleAddCart = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
  };

  return (
    <>
      <Navbar />
      <Announcement />
      <section className="flex flex-col p-3 md:flex-row md:p-12">
        <div className="imgcon h-[40vh] flex-1 md:h-[70vh] lg:h-[90vh]">
          <img
            src={product.image}
            alt=""
            className="object-fit h-full w-auto "
          />
        </div>
        <div className="info w-full flex-1 p-3 md:px-12">
          <h1 className="title text-3xl font-semibold">{product.title}</h1>
          <div className="desc my-5">
            <p>{product.description}</p>
          </div>
          <span className="price text-4xl font-extralight">
            <b>$</b> {product.price}
          </span>
          <div className="fltercon my-7 flex w-full justify-between md:w-1/2">
            <div className="flex items-center filter">
              <span className="filtertitle text-xl font-light">Color: </span>
              {product.color?.map((item) => (
                <Color color={item} key={item} sColor={handleSetColor} />
              ))}
            </div>
            <div className="filter">
              <span className="filtertitle text-xl font-light">Size: </span>
              <select
                name="size"
                id="size"
                className="ml-2 p-2 outline-none"
                onChange={(e) => setSize(e.target.value)}
              >
                <option disabled>Size</option>
                {product.size?.map((size) => (
                  <option key={size}>{size}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="addcon flex w-full items-center justify-between md:w-1/2">
            <div className="amount flex items-center font-bold">
              <FontAwesomeIcon
                icon={faMinus}
                className="cursor-pointer text-lg"
                onClick={() => handleQuantity(-1)}
              />
              <span className="quantity border-sage mx-2 flex h-8 w-8 items-center justify-center rounded-lg border text-lg">
                {quantity}
              </span>
              <FontAwesomeIcon
                icon={faPlus}
                className="cursor-pointer text-lg"
                onClick={() => handleQuantity(1)}
              />
            </div>
            <button
              className="cursor-pointer bg-yellowed px-6 py-2 text-lg font-semibold hover:bg-yellow-500 md:px-4"
              onClick={handleAddCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </section>
      <Newsletter />
      <Footer bgColor={"bg-transparent"} />
    </>
  );
};

export default Product;

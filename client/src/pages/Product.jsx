import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Color from "../components/Product/Color";
import Size from "../components/Product/Size";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { publicRequest } from "../utils/requestMethod";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cart";
import { timestampGenerator } from "./../utils/timestampGenerator";

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

  const handleSetSize = (size) => {
    setSize(size);
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
    const uniqueTimestamp = timestampGenerator();
    console.log(uniqueTimestamp);
    dispatch(
      addProduct({
        ...product,
        quantity,
        color,
        size,
        timestamp: uniqueTimestamp,
      }),
    );
  };

  return (
    <>
      <Navbar />
      <Announcement />
      <section className="flex flex-col p-3 md:flex-row md:p-12">
        <div className="imgcon flex h-[40vh] flex-1 items-center justify-center md:h-[60vh] lg:h-[80vh]">
          <img
            src={product.image}
            alt=""
            className="object-fit h-full w-auto "
          />
        </div>
        <div className="info flex w-full flex-1 flex-col p-3 md:px-12">
          <h1 className="title text-3xl font-semibold">{product.title}</h1>
          <span className="price mt-2 max-w-32 rounded-3xl bg-primary px-3 py-2 text-2xl text-white">
            <b>$</b> {product.price}
          </span>
          <div className="desc my-2">
            <p>{product.description}</p>
          </div>

          <div className="fltercon my-7 flex  w-full flex-col justify-between md:w-1/2">
            <div className="mb-5 flex flex-col items-start filter">
              <span className="filtertitle mb-2 text-xl font-light">
                Colors:
              </span>
              <Color
                colors={product.color}
                setColor={handleSetColor}
                currColor={color}
              />
            </div>
            <div className="mb-5 flex flex-col items-start filter">
              <span className="filtertitle mb-2 text-xl font-light">
                Sizes:
              </span>
              <Size
                sizes={product.size}
                setSize={handleSetSize}
                currSize={size}
              />
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

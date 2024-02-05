import SummaryItem from "../components/Cart/SummaryItem";
import TopBtn from "../components/Cart/TopBtn";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { faPlus, faMinus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Announcement from "../components/Announcement";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeProduct } from "../redux/cart";

const Cart = () => {
  const dispatch = useDispatch();
  const shipping = 10;
  const cart = useSelector((state) => state.cart);

  const removeCartProduct = (product) => {
    dispatch(removeProduct(product));
  };
  return (
    <>
      <Navbar />
      <Announcement />
      <div className="p-2 md:p-5">
        <h1 className="title my-2 text-center text-2xl font-[300]">MY CART</h1>
        <section className="top flex items-center justify-between p-0 md:p-5">
          <TopBtn buttonName={"Continue Shopping"} />
          <div className="topTexts hidden md:flex">
            <div className="text mx-2 cursor-pointer underline">
              Shopping Cart(2)
            </div>
            <div className="text mx-2 cursor-pointer underline">
              Wishlist(0)
            </div>
          </div>
          <TopBtn buttonName={"Checkout Now"} type={"filled"} />
        </section>
        <section className="bottom mt-5 flex flex-col justify-between md:flex-row">
          <div className="info flex-[3]">
            {/* product */}
            {cart.products.map((product) => (
              <div
                className="product my-4 flex flex-col justify-between md:flex-row"
                key={product._id}
              >
                <div className="prodDetails flex flex-[2]">
                  <div className="flex w-1/4 items-center justify-center">
                    <img
                      src={product.image}
                      alt=""
                      className="w-full md:w-4/5"
                    />
                  </div>
                  <div className="details flex flex-1 flex-col justify-around p-3 md:p-5">
                    <span className="prodName inline-flex w-full text-lg font-bold md:font-normal">
                      <b className="hidden md:mr-1 md:block">Product:</b>{" "}
                      {product.title}
                    </span>
                    <span className="prodId">
                      <b>ID:</b> {product._id}
                    </span>
                    <span className="prodColor">
                      <b>Color:</b> {product.color}
                    </span>
                    <span className="prodSize">
                      <b>Size:</b> {product.size}
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-row">
                  <div className="priceDetails flex w-3/4 flex-row items-center justify-around md:flex-col md:justify-center">
                    <div className="amount flex items-center justify-center font-bold md:mb-5">
                      <FontAwesomeIcon
                        icon={faMinus}
                        className="cursor-pointer text-lg"
                      />
                      <span className="quantity border-sage mx-2 flex h-8 w-8 items-center justify-center rounded-lg border text-lg">
                        {product.quantity}
                      </span>
                      <FontAwesomeIcon
                        icon={faPlus}
                        className="cursor-pointer text-lg"
                      />
                    </div>
                    <div className="prodPrice mb-0 text-3xl font-light md:mb-5">
                      <b>$</b> {product.price * product.quantity}
                    </div>
                  </div>
                  <div className="remove flex w-1/4 items-center justify-center p-2">
                    <span
                      className="flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-red-500 p-2 md:p-0"
                      onClick={() => removeCartProduct(product)}
                    >
                      <FontAwesomeIcon
                        icon={faTrash}
                        className="text-lg text-white"
                      />
                    </span>
                  </div>
                </div>
              </div>
            ))}
            <hr className="h-[1px] border-none bg-slate-300/40" />
          </div>
          <div className="summary h-auto flex-1 rounded-lg border-[0.5px] border-slate-300 p-5">
            <h1 className="sumTitle text-2xl font-[200]">Order Summary</h1>
            <SummaryItem itemText={"Subtotal"} price={cart.total} />
            <SummaryItem itemText={"Shiping"} price={shipping} />
            <SummaryItem itemText={"Shipping Discount"} price={shipping} />
            <SummaryItem type={"total"} itemText={"Total"} price={cart.total} />
            <Link to={"/checkout"}>
              <button className="w-full bg-yellowed p-2 font-semibold text-black  hover:bg-yellow-500">
                Checkout
              </button>
            </Link>
          </div>
        </section>
      </div>
      <Footer bgColor={"bg-secondary"} />
    </>
  );
};

export default Cart;

import SummaryItem from "../components/Cart/SummaryItem";
import TopBtn from "../components/Cart/TopBtn";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Cart = () => {
  return (
    <>
      <Navbar />
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
        <section className="bottom flex flex-col justify-between md:flex-row">
          <div className="info flex-[3]">
            {/* product */}
            <div className="product flex flex-col justify-between md:flex-row">
              <div className="prodDetails flex flex-[2]">
                <img
                  src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"
                  alt=""
                  className="w-32 md:w-48"
                />
                <div className="details flex flex-col justify-around p-5">
                  <span className="prodName text-lg font-bold md:font-normal">
                    <b className="hidden md:block">Product:</b> Product Name
                  </span>
                  <span className="prodId">
                    <b>ID:</b> 923435354634
                  </span>
                  <span className="prodColor h-5 w-5 rounded-full bg-primary"></span>
                  <span className="prodSize">
                    <b>Size:</b> 37.5
                  </span>
                </div>
              </div>
              <div className="priceDetails flex flex-1 flex-row items-center justify-around md:flex-col md:justify-center">
                <div className="amount mb-5 flex items-center font-bold">
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
                <div className="prodPrice mb-5 text-3xl font-light md:mb-0">
                  <b>$</b> 30.00
                </div>
              </div>
            </div>
            <hr className="h-[1px] border-none bg-slate-300/40" />
            <div className="product flex flex-col justify-between md:flex-row">
              <div className="prodDetails flex flex-[2]">
                <img
                  src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"
                  alt=""
                  className="w-32 md:w-48"
                />
                <div className="details flex flex-col justify-around p-5">
                  <span className="prodName text-lg font-bold md:font-normal">
                    <b className="hidden md:block">Product:</b> Product Name
                  </span>
                  <span className="prodId">
                    <b>ID:</b> 923435354634
                  </span>
                  <span className="prodColor h-5 w-5 rounded-full bg-primary"></span>
                  <span className="prodSize">
                    <b>Size:</b> 37.5
                  </span>
                </div>
              </div>
              <div className="priceDetails flex flex-1 flex-row items-center justify-around md:flex-col md:justify-center">
                <div className="amount mb-5 flex items-center font-bold">
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
                <div className="prodPrice mb-5 text-3xl font-light md:mb-0">
                  <b>$</b> 30.00
                </div>
              </div>
            </div>
          </div>
          <div className="summary h-auto flex-1 rounded-lg border-[0.5px] border-slate-300 p-5">
            <h1 className="sumTitle text-2xl font-[200]">Order Summary</h1>
            <SummaryItem itemText={"Subtotal"} price={80.0} />
            <SummaryItem itemText={"Shiping"} price={10.0} />
            <SummaryItem itemText={"Shipping Discount"} price={"05.00"} />
            <SummaryItem type={"total"} itemText={"Total"} price={85} />
            <button className="w-full bg-primary p-2 font-semibold text-white">
              Checkout
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Cart;

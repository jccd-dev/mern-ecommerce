import SummaryItem from "../components/Cart/SummaryItem";
import TopBtn from "../components/Cart/TopBtn";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Cart = () => {
  return (
    <div className="con">
      <Navbar />
      <div className="wrapper p-5">
        <h1 className="title font-[300] text-center text-2xl">MY CART</h1>
        <section className="top flex items-center justify-between p-5">
          <TopBtn buttonName={"Continue Shopping"} />
          <div className="topTexts flex">
            <div className="text underline cursor-pointer mx-2">
              Shopping Cart(2)
            </div>
            <div className="text underline cursor-pointer mx-2">
              Wishlist(0)
            </div>
          </div>
          <TopBtn buttonName={"Checkout Now"} type={"filled"} />
        </section>
        <section className="bottom flex justify-between">
          <div className="info flex-[3]">
            <div className="product flex justify-between">
              <div className="prodDetails flex-[2] flex">
                <img
                  src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"
                  alt=""
                  className="w-48"
                />
                <div className="details p-5 flex flex-col justify-around">
                  <span className="prodName">
                    <b>Product:</b> Product Name
                  </span>
                  <span className="prodId">
                    <b>ID:</b> 923435354634
                  </span>
                  <span className="prodColor w-5 h-5 bg-primary rounded-full"></span>
                  <span className="prodSize">
                    <b>Size:</b> 37.5
                  </span>
                </div>
              </div>
              <div className="priceDetails flex-1 flex flex-col items-center justify-center">
                <div className="quanityCon flex items-center mb-5">
                  <FontAwesomeIcon icon={faMinus} className="cursor-pointer" />
                  <span className="quantity w-7 h-7 rounded-lg border border-sage flex items-center justify-center mx-2">
                    2
                  </span>
                  <FontAwesomeIcon icon={faPlus} className="cursor-pointer" />
                </div>
                <div className="prodPrice text-3xl font-light">
                  <b>$</b> 30.00
                </div>
              </div>
            </div>
            <hr className="bg-slate-300/40 border-none h-[1px]" />
            <div className="product flex justify-between">
              <div className="prodDetails flex-[2] flex">
                <img
                  src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"
                  alt=""
                  className="w-48"
                />
                <div className="details p-5 flex flex-col justify-around">
                  <span className="prodName">
                    <b>Product:</b> Product Name
                  </span>
                  <span className="prodId">
                    <b>ID:</b> 923435354634
                  </span>
                  <span className="prodColor w-5 h-5 bg-primary rounded-full"></span>
                  <span className="prodSize">
                    <b>Size:</b> 37.5
                  </span>
                </div>
              </div>
              <div className="priceDetails flex-1 flex flex-col items-center justify-center">
                <div className="quanityCon flex items-center mb-5">
                  <FontAwesomeIcon icon={faMinus} className="cursor-pointer" />
                  <span className="quantity w-7 h-7 rounded-lg border border-sage flex items-center justify-center mx-2">
                    2
                  </span>
                  <FontAwesomeIcon icon={faPlus} className="cursor-pointer" />
                </div>
                <div className="prodPrice text-3xl font-light">
                  <b>$</b> 30.00
                </div>
              </div>
            </div>
          </div>
          <div className="summary flex-1 border-[0.5px] border-slate-300 p-5 h-auto rounded-lg">
            <h1 className="sumTitle text-2xl font-[200]">Order Summary</h1>
            <SummaryItem itemText={"Subtotal"} price={80.0} />
            <SummaryItem itemText={"Shiping"} price={10.0} />
            <SummaryItem itemText={"Shipping Discount"} price={"05.00"} />
            <SummaryItem type={"total"} itemText={"Total"} price={85} />
            <button className="w-full p-2 bg-primary text-white font-semibold">
              Checkout
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;

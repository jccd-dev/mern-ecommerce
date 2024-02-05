import { Link, useLocation } from "react-router-dom";
import { useEffect, useReducer } from "react";
import { userRequest } from "../utils/requestMethod";
import { useDispatch, useSelector } from "react-redux";
import { resetCart } from "../redux/cart";

const initialState = {
  loading: true,
  isFailed: false,
  orderId: null,
  errorMessage: null,
  stripeData: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_STRIPE_DATA":
      return { ...state, stripeData: action.payload, loading: false };
    case "SET_ORDER_ID":
      return { ...state, orderId: action.payload };
    case "SET_ERROR":
      return {
        ...state,
        isFailed: true,
        errorMessage: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}

const CheckoutStatus = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const location = useLocation();
  const stripeSessionId = location.state?.sessionId;
  const cartData = location.state?.cart;

  const [state, dispatchReducer] = useReducer(reducer, initialState);

  // Handle session fetching
  useEffect(() => {
    if (!stripeSessionId) {
      dispatchReducer({
        type: "SET_ERROR",
        payload: "No session ID provided.",
      });
      return;
    }

    const getSession = async () => {
      try {
        const res = await userRequest.get(
          `checkout/session-status?session_id=${stripeSessionId}`,
        );
        dispatchReducer({ type: "SET_STRIPE_DATA", payload: res.data });
      } catch (error) {
        dispatchReducer({
          type: "SET_ERROR",
          payload: "An error occurred while fetching session data.",
        });
      }
    };

    getSession();
  }, [stripeSessionId]);

  // Handle order creation
  useEffect(() => {
    if (!state.stripeData || !cartData) return;

    const storeOrder = async () => {
      try {
        if (state.stripeData?.status === "complete") {
          const res = await userRequest.post("/orders", {
            userId: user.currentUser._id, // Update with actual user ID
            products: cartData.products.map((product) => ({
              productId: product._id,
              quantity: product.quantity,
              color: product.color,
              size: product.size,
            })),
            amount: cartData.total,
            address: state.stripeData.shipping_details?.address,
          });
          dispatchReducer({ type: "SET_ORDER_ID", payload: res.data._id });
          dispatch(resetCart());
        } else {
          dispatchReducer({
            type: "SET_ERROR",
            payload: "The payment transaction was not successfull.",
          });
        }
      } catch (error) {
        dispatchReducer({
          type: "SET_ERROR",
          payload: "An error occurred while storing the order.",
        });
      }
    };

    storeOrder();
  }, [state.stripeData, cartData, dispatch]);

  return (
    <>
      <div className="w-ful flex h-screen items-center justify-center overflow-hidden">
        {state.loading && <p className="text-3xl">Loading....</p>}
        {!state.loading && state.isFailed && (
          <div className="h-auto w-10/12 bg-red-300 p-4 md:w-2/4 lg:w-1/3">
            <p className="px-2 py-4 text-center text-xl font-semibold">
              {state.errorMessage}
            </p>
            <p className="mb-3 text-center text-lg">Try again later!</p>
            <Link to={"/cart"}>
              <div className="flex w-full cursor-pointer items-center justify-center bg-red-200 px-2 py-4">
                <span>Back To Cart</span>
              </div>
            </Link>
          </div>
        )}
        {!state.loading && state.orderId && (
          <div className="h-auto w-10/12 bg-sage-400 p-4 md:w-2/4 lg:w-1/3">
            <p className="text-center text-lg">
              Order has been created successfully. Your order number is{" "}
              <span className="rounded-lg bg-primary/50 p-1 text-xl font-semibold">
                {state.orderId}
              </span>
            </p>
            <p className="my-3 mb-3 text-center text-3xl font-bold text-white">
              Thank you!
            </p>
            <Link to={"/cart"}>
              <div className="flex w-full cursor-pointer items-center justify-center bg-sage-500 px-2 py-4">
                <span className="font-semibold text-white">Back To Cart</span>
              </div>
            </Link>
          </div>
        )}
        {!state.loading && !state.isFailed && !state.orderId && (
          <div className="h-auto w-10/12 bg-sage-400 p-4 md:w-2/4 lg:w-1/3">
            <p className="text-center text-xl">
              Successful. Your order is being prepared...
            </p>
            <p className="my-5 text-center text-xl font-bold text-white">
              Please wait
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default CheckoutStatus;

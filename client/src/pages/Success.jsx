import { useLocation } from "react-router-dom";
import { useEffect, useReducer } from "react";
import { userRequest } from "../utils/requestMethod";

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

const Success = () => {
  const location = useLocation();
  const stripeSessionId = location.state?.sessionId;
  const cartData = location.state?.cart;

  const [state, dispatch] = useReducer(reducer, initialState);

  // Handle session fetching
  useEffect(() => {
    if (!stripeSessionId) {
      dispatch({ type: "SET_ERROR", payload: "No session ID provided." });
      return;
    }

    const getSession = async () => {
      try {
        const res = await userRequest.get(
          `checkout/session-status?session_id=${stripeSessionId}`,
        );
        dispatch({ type: "SET_STRIPE_DATA", payload: res.data });
      } catch (error) {
        dispatch({
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
            userId: "1234456", // Update with actual user ID
            products: cartData.products.map((product) => ({
              productId: product._id,
              quantity: product.quantity,
            })),
            amount: cartData.total,
            address: state.stripeData.shipping_details?.address,
          });
          dispatch({ type: "SET_ORDER_ID", payload: res.data._id });
        } else {
          dispatch({
            type: "SET_ERROR",
            payload: "The payment transaction was not completed successfully.",
          });
        }
      } catch (error) {
        dispatch({
          type: "SET_ERROR",
          payload: "An error occurred while storing the order.",
        });
      }
    };

    storeOrder();
  }, [state.stripeData, cartData]);

  return (
    <>
      {state.loading && <p>Loading...</p>}
      {!state.loading && state.isFailed && (
        <div>
          <p>{state.errorMessage}</p>
          <p>Try again later!</p>
        </div>
      )}
      {!state.loading && state.orderId && (
        <p>
          Order has been created successfully. Your order number is{" "}
          {state.orderId}
        </p>
      )}
      {!state.loading && !state.isFailed && !state.orderId && (
        <p>Successful. Your order is being prepared...</p>
      )}
    </>
  );
};

export default Success;

import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useSelector } from "react-redux";
import { userRequest } from "../utils/requestMethod";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";

const KEY = import.meta.env.VITE_REACT_APP_STRIPE;
const stripePromise = loadStripe(KEY);

const Checkout = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);

  const [clientSecret, setClientSecret] = useState(null);
  const [stripeSessionId, setStripeSessionId] = useState("");

  useEffect(() => {
    const makeSession = async () => {
      try {
        const response = await userRequest.post(
          "checkout/payment",
          {
            products: cart,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          },
        );
        setClientSecret(response.data.clientSecret);
        setStripeSessionId(response.data.checkoutSessionId);
      } catch (error) {
        console.log(error);
      }
    };

    makeSession();
  }, [cart]);

  const handleOrders = () => {
    navigate("/success", {
      state: {
        sessionId: stripeSessionId,
        cart,
      },
    });
  };

  return (
    <>
      <div id="checkout">
        {clientSecret && (
          <EmbeddedCheckoutProvider
            stripe={stripePromise}
            options={{ clientSecret, onComplete: handleOrders }}
          >
            <EmbeddedCheckout />
          </EmbeddedCheckoutProvider>
        )}
      </div>
      <div>
        <Link to={"/cart"}>
          <button>Back</button>
        </Link>
      </div>
    </>
  );
};

export default Checkout;

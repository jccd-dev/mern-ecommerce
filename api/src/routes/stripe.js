import Express from "express";
import Stripe from "stripe";

const router = Express.Router();
const YOUR_DOMAIN = "http://localhost:5173";

router.post("/payment", async (req, res) => {
  const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
  try {
    const { products } = req.body;

    const lineItems = products.products.map((product) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: product.title,
          images: [product.image],
        },
        unit_amount: Math.round(product.price * 100),
      },
      quantity: product.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      ui_mode: "embedded",
      line_items: lineItems,
      mode: "payment",
      shipping_address_collection: {
        allowed_countries: ["US", "CA", "GB", "AU", "PH"], // Specify the allowed countries for shipping
      },
      redirect_on_completion: "never",
    });

    res.send({
      clientSecret: session.client_secret,
      checkoutSessionId: session.id,
    });
  } catch (error) {
    console.error("Error processing payment:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/session-status", async (req, res) => {
  const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

  const session = await stripe.checkout.sessions.retrieve(req.query.session_id);

  res.send(session);
});

export default router;

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
        currency: "php",
        product_data: {
          name: product.title,
          images: [product.image],
        },
        unit_amount: Math.round(product.price * 100),
      },
      quantity: product.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: "payment",
      shipping_address_collection: {
        allowed_countries: ["US", "CA", "GB", "AU", "PH"], // Specify the allowed countries for shipping
      },
      success_url: `${YOUR_DOMAIN}/success`,
      cancel_url: `${YOUR_DOMAIN}/cart`,
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error("Error processing payment:", error);
    res.status(500).send("Internal Server Error");
  }
});

export default router;

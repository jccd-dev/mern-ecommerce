import Stripe from "stripe";

export const stripePaymentController = async (req, res) => {
  const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

  const { products } = req.body;

  const lineItems = products.map((product) => ({
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

  res.status(200).send({
    clientSecret: session.client_secret,
    checkoutSessionId: session.id,
  });
};

export const stripeSessionStatusController = async (req, res) => {
  const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

  const session = await stripe.checkout.sessions.retrieve(req.query.session_id);

  res.status(200).send(session);
};

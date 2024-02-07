import express from "express";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import auth from "./routes/auth.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import stripeRouter from "./routes/stripe.js";
import globalErrorHandler from "./utils/globalErrorHandler.js";
import _404Handler from "./middleware/_404Handler.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/user", userRouter);
app.use("/api/auth", auth);
app.use("/api/products", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/orders", orderRouter);
app.use("/api/checkout", stripeRouter);

//middleware that handle no other route has matched
app.use(_404Handler);

app.use(globalErrorHandler);

export default app;

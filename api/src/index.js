import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import auth from "./routes/auth.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import stripeRouter from "./routes/stripe.js";
import { dbconn } from "./config/dbconn.js";
import cors from "cors";

const app = express();
app.use(express.json());
dotenv.config();
app.use(cors());
app.use("/api/user", userRouter);
app.use("/api/auth", auth);
app.use("/api/products", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/orders", orderRouter);
app.use("/api/checkout", stripeRouter);

try {
  dbconn();
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
  });
} catch (error) {
  console.log(error);
}

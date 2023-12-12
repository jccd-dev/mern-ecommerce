import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import auth from "./routes/auth.js";

const app = express();
app.use(express.json());
dotenv.config();
app.use("/api/user", userRouter);
app.use("/api/auth", auth);
app.use("/api/products", productRouter);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log("server is running");
    });
  })
  .catch((error) => {
    console.log(error);
  });

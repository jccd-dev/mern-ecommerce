import mongoose from "mongoose";

export const dbconn = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Mongo DB Connected");
  } catch (error) {
    console.log(error);
    throw new Error("Unable to connect to database");
  }
};

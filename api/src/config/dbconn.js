import mongoose from "mongoose";

export default dbconn = async () => {
  try {
    const connection = mongoose.connect(process.env.MONGO_URL);
    console.log("Mongo DB Connected");
  } catch (error) {
    console.log(error);
    throw new Error("Unable to connect to database");
  }
};

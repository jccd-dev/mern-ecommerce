import mongoose from "mongoose";

/**
 * Function to establish a connection with mongo db using mongoose
 * with retry logic
 *
 * @returns {void}
 */
const connectWithRetry = async () => {
  const options = {
    serverSelectionTimeoutMS: 5000,
  };

  try {
    await mongoose.connect(process.env.MONGO_URL, options);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("Database connection error:", error);
    console.log("Retrying fot connection");

    //call again it self to reconnect
    setTimeout(connectWithRetry, 5000);
  }
};

/**
 * Function to hanlse mongo db connection events
 * @returns {void}
 */
export const dbconn = () => {
  // Establish connection with retry logic
  connectWithRetry();

  // Event handlers for Mongoose connection events
  mongoose.connection.on("connected", () => {
    console.log("Mongoose connected to DB");
  });

  mongoose.connection.on("error", (err) => {
    console.log("Mongoose connection error:", err);
  });

  mongoose.connection.on("disconnected", () => {
    console.log("Mongoose disconnected");
  });

  // Graceful termination of MongoDB connection on app termination
  process.on("SIGINT", async () => {
    await mongoose.connection.close();
    console.log("MongoDB connection closed, due to app termination");
    process.exit(0);
  });
};

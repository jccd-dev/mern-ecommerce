import app from "./app.js";
import dotenv from "dotenv";
import { dbconn } from "./config/dbconn.js";

dotenv.config();

dbconn(); //initialize database connection

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

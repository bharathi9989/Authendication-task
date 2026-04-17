import dotenv from "dotenv";
import app from "./src/app.js";
import { connectDB } from "./config/db.js";

dotenv.config();

connectDB();

app.listen(5000, () => {
  console.log("Server running");
});

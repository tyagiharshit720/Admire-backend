import express from "express";
import { ENV } from "./config/ENV.js";
import leadsRoute from "./routes/leads.route.js";
import { globalErrorHandler } from "./config/errorHandler.js";
import connectDB from "./config/db.js";

const app = express();
app.use(express.json());

connectDB();



app.use("/api/v1/",leadsRoute)

// Global error handlerle
// app.use(globalErrorHandler);
app.listen(ENV.PORT, () => {
  console.log("Server is start ✅");
});

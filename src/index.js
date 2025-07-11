
import express from "express";
import { ENV } from "./config/ENV.js";
import leadsRoute from "./routes/leads.route.js";
import itinerariesRoute from "./routes/destination.route.js";
import blogRoute from "./routes/blog.route.js";
import { globalErrorHandler } from "./config/errorHandler.js";
import connectDB from "./config/db.js";


const app = express();
app.use(express.json());

connectDB();


app.use("/api/v1/", leadsRoute);
app.use("/api/v1/destination", itinerariesRoute);
app.use("/api/v1/blog", blogRoute);


// Global error handlerle
app.use(globalErrorHandler);
app.listen(ENV.PORT, () => {
  console.log('Server is start ✅');
});

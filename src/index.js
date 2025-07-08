import express from "express"
import { ENV } from "./config/ENV.js";



const app = express();



// Handle 404 routes
app.all('*', (req, res, next) => {
  const error = new Error(`Cannot find ${req.originalUrl}`);
  error.statusCode = 404;
  next(error);
});

// Global error handler         
app.use(globalErrorHandler);



app.listen(ENV.PORT,()=>{
    console.log("Server is start ✅")
})
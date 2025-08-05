import express from 'express';
import cors from 'cors';
import { ENV } from './config/ENV.js';
import connectDB from './config/db.js';
import cookieParser from 'cookie-parser';
import testRoute from './routes/Test.route.js';

import { globalErrorHandler } from './middleware/errorHandler.js';

// routes imports
import leadsRoute from './routes/admireHolidays/leads.route.js';
import destinationRoute from './routes/admireHolidays/destination.route.js';
import blogRoute from './routes/admireHolidays/blog.route.js';
import testimonialRoute from './routes/admireHolidays/testimonial.route.js';
import userRouter from './routes/admireHolidays/user.route.js';
import adminRoute from './routes/adminRoutes/admin.route.js';
import customerGalleryRoute from './routes/admireHolidays/customerGallery.route.js';
import heroSectionRoute from './routes/admireHolidays/heroSection.route.js';

const app = express();

// Middleware
app.use(cookieParser());
app.use(express.json());

const corsOption = {
  origin: [
    'http://www.admireholidays.com',
    'https://www.admireholidays.com',
    'http://localhost:5173',
    'http://localhost:3000',
    'http://192.168.68.114:3000',
    'https://admire-dashboard-frontend.vercel.app',
    'https://admin.admireholidays.com',
    'https://effervescent-puppy-571720.netlify.app/'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};

app.use(cors(corsOption));

// Connect Database
connectDB();

// Default Route (✅ fix for "Cannot GET /")
app.get('/', (req, res) => {
  res.send('Admire Holidays API is running ✅');
});

// Routes
app.use('/api/v1', testRoute);
app.use('/api/v1', leadsRoute);
app.use('/api/v1/destination', destinationRoute);
app.use('/api/v1', blogRoute);
app.use('/api/v1', testimonialRoute);
app.use('/api/v1/user', userRouter);
app.use('/api/v1', customerGalleryRoute);
app.use('/api/v1', heroSectionRoute);
app.use('/admin', adminRoute);

// Global Error Handler
app.use(globalErrorHandler);

// Start Server
app.listen(ENV.PORT, () => {
  console.log(`🚀 Server running on port ${ENV.PORT}`);
});

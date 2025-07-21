import express from 'express';
import uploadMedia from '../middleware/mediaUploads.js';

import { testimonal }from '../controller/testimonial.controller.js';

const testimonialRoute = express.Router();

testimonialRoute.get('/testimonials', testimonal);
// testimonialRoute.post('/testimonials',uploadMedia.single('image'),postTestimonial)
export default testimonialRoute;

import express from 'express';

import { getBlog } from '../../controller/blog.controller.js';

const blogRoute = express.Router();
blogRoute.get('/blog', getBlog);
export default blogRoute;

import express from 'express';

import { blog } from '../../controller/blog.controller.js';

const blogRoute = express.Router();
blogRoute.get('/', blog);
export default blogRoute;

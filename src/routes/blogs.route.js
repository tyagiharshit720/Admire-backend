import express from "express"
import { getAllBlogs } from "../controller/blog.controller.js";

const router = express.Router()


router.get("allBlogs",getAllBlogs)


export default router;
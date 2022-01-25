import express from "express";
import { getPostsMain } from "../controllers/posts.js";
const router = express.Router();

router.get("/main", getPostsMain);

export default router;

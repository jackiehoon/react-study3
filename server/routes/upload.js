import express from "express";
import { postUploadImage } from "../controllers/upload.js";
import { upload } from "../aws/index.js";
const router = express.Router();

router.post("/image", upload.single("file"), postUploadImage);

export default router;

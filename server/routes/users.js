import express from "express";
import { postUsers } from "../controllers/users.js";
const router = express.Router();

/* GET users listing. */
router.post("/", postUsers);

export default router;

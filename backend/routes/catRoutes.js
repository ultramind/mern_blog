import express from "express";
import { getAllCategory, addCategory } from "../controllers/category.js";

const router = express.Router();

// Cat routes
router.get('/', getAllCategory);
router.post('/add', addCategory);

export default router;
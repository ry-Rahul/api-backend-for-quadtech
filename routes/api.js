import { Router } from "express";
import { getTickerData } from "../controller/ticker.js";

const router = Router();
router.get('/getAll',getTickerData);

export default router;
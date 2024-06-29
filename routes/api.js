import { Router } from "express";
import { getTickerData } from "../controller/ticker.js";

const router = Router();
router.get('/getall',getTickerData);

export default router;
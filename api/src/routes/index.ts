import productsRouter from "./products";
import express from "express";

const router = express.Router();

router.use(productsRouter);

export default router;

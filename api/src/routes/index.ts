import productsRouter from "./products";
import categoriesRouter from "./categories";
import express from "express";

const routes = express.Router();

routes.use(productsRouter);
routes.use(categoriesRouter);

routes.get(`/`, async (_, res) => {
  res.json({ message: "API is working" });
});

export default routes;

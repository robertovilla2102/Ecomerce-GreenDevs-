import { Request, Router } from "express";
import { createProduct } from "../queries/products";
import client from "../client";

const productsRouter = Router({
  caseSensitive: true,
});

const ROUTES = {
  PRODUCTS: "/products",
};

productsRouter.get(ROUTES.PRODUCTS, async (req, res) => {
  const products = await client.product.findMany();
  res.json(products);
});

productsRouter.post(ROUTES.PRODUCTS, async (req: Request, res) => {
  const body = req.body;
  const product = await createProduct(body);

  res.json(product);
});

export default productsRouter;

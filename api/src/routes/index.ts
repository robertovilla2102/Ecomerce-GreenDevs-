import productRoutes from "./productRoutes";
import categoryRoutes from "./categoryRoutes";

import express from "express";
import authRoutes from "./authRoutes";

const routes = express.Router();

routes.use(authRoutes);
routes.use(productRoutes);
routes.use(categoryRoutes);

routes.get(`/`, async (_, res) => {
  res.json({ message: "API is working" });
});

export default routes;

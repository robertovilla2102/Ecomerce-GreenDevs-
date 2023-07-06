import { Router } from "express";
import { validateProductSchema } from "../validators/productValidator";
import { validateGetEntityById } from "../validators/commonsValidator";
import {
  createProduct,
  getProductById,
  getProducts,
} from "../controllers/productController";

const productRoutes = Router();

const ROUTES = {
  PRODUCTS: "/products",
  PRODUCT: "/products/:id",
};

productRoutes.post(ROUTES.PRODUCTS, validateProductSchema, createProduct);

productRoutes.get(ROUTES.PRODUCTS, getProducts);
productRoutes.get(ROUTES.PRODUCT, validateGetEntityById, getProductById);

export default productRoutes;

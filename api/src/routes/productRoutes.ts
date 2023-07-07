import { Router } from "express";
import { validateProductSchema } from "../validators/productValidator";
import { validateGetEntityById } from "../validators/commonsValidator";
import {
  assignCategoriesToProduct,
  createProduct,
  getProductById,
  getProducts,
} from "../controllers/productController";
import authMiddleware from "../middlewares/auth";

const productRoutes = Router();

const ROUTES = {
  PRODUCTS: "/products",
  PRODUCT: "/products/:id",
  ASSIGN_CATEGORIES: "/products/:id/categories",
};

productRoutes.post(
  ROUTES.PRODUCTS,
  authMiddleware,
  validateProductSchema,
  createProduct
);

productRoutes.get(ROUTES.PRODUCTS, getProducts);
productRoutes.get(ROUTES.PRODUCT, validateGetEntityById, getProductById);

productRoutes.put(
  ROUTES.ASSIGN_CATEGORIES,
  authMiddleware,
  validateGetEntityById,
  assignCategoriesToProduct
);

export default productRoutes;

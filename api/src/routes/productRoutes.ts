import { Router } from "express";
import { validateProductSchema } from "../validators/productValidator";
import { validateGetEntityById } from "../validators/commonsValidator";
import {
  assignCategoriesToProduct,
  createProduct,
  getProductById,
  getProducts,
} from "../controllers/productController";

const productRoutes = Router();

const ROUTES = {
  PRODUCTS: "/products",
  PRODUCT: "/products/:id",
  ASSIGN_CATEGORIES: "/products/:id/categories",
};

productRoutes.post(ROUTES.PRODUCTS, validateProductSchema, createProduct);

productRoutes.get(ROUTES.PRODUCTS, getProducts);
productRoutes.get(ROUTES.PRODUCT, validateGetEntityById, getProductById);

productRoutes.put(
  ROUTES.ASSIGN_CATEGORIES,
  validateGetEntityById,
  assignCategoriesToProduct
);

export default productRoutes;

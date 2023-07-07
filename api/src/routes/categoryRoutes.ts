import { Router } from "express";

import { validateGetEntityById } from "../validators/commonsValidator";
import {
  getCategories,
  getCategoryById,
} from "../controllers/categoryController";

const ROUTES = {
  CATEGORIES: "/categories",
  CATEGORY: "/categories/:id",
};

const categoryRoutes = Router();

categoryRoutes.get(ROUTES.CATEGORIES, getCategories);
categoryRoutes.get(ROUTES.CATEGORY, validateGetEntityById, getCategoryById);

export default categoryRoutes;

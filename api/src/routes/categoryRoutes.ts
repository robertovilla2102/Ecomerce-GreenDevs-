import { Request, Response, Router } from "express";

import { QueryOptions } from "../types";
import {
  success,
  internalServerError,
  badRequestError,
} from "../helpers/responseHandler/responseHandler";
import { getCategoriesQuery, getCategoryQuery } from "../queries/categories";
import { notFoundError } from "../helpers/responseHandler/responseHandler";
import { validateGetEntityById } from "../validators/commonsValidator";
import { validationResult } from "express-validator";

const ROUTES = {
  CATEGORIES: "/categories",
  CATEGORY: "/categories/:id",
};

const categoryRoutes = Router();

categoryRoutes.get(ROUTES.CATEGORIES, async (req: Request, res: Response) => {
  try {
    const { orderBy, skip, take } = req.query as QueryOptions;
    const options = { orderBy, skip, take };
    const categories = await getCategoriesQuery(options);

    success(res, categories);
  } catch (error) {
    internalServerError(res);
  }
});

categoryRoutes.get(
  ROUTES.CATEGORY,
  validateGetEntityById,
  async (req: Request, res: Response) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return badRequestError(res, "Validation failed", errors.array());
      }

      const { id } = req.params;
      const category = await getCategoryQuery(id);

      if (!category)
        return notFoundError(res, `Product with ID ${id} does not exist`);

      success(res, category);
    } catch (error) {
      internalServerError(res);
    }
  }
);

export default categoryRoutes;

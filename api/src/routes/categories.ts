import { Request, Router } from "express";

import { QueryOptions } from "../types";
import { success, internalServerError } from "../helpers/responseHandler";
import { getCategoriesQuery } from "../queries/categories";

const routes = Router();

const ROUTES = {
  CATEGORIES: "/categories",
  CATEGORY: "/categories/:id",
};

routes.get(ROUTES.CATEGORIES, async (req: Request, res) => {
  try {
    const { orderBy, skip, take } = req.query as QueryOptions;

    const options = { orderBy, skip, take };
    const categories = await getCategoriesQuery(options);
    success(res, categories);
  } catch (error) {
    internalServerError(res);
  }
});

export default routes;

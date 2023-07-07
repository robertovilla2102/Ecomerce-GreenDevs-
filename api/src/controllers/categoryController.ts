import { Request, Response } from "express";
import {
  success,
  internalServerError,
  badRequestError,
  notFoundError,
} from "../helpers/responseHandler/responseHandler";
import {
  getCategoriesQuery,
  getCategoryQuery,
} from "../queries/categoryQueries";
import { QueryOptions } from "../types";
import { validationResult } from "express-validator";

export const getCategories = async (req: Request, res: Response) => {
  try {
    const { orderBy, skip, take } = req.query as QueryOptions;
    const options = { orderBy, skip, take };
    const categories = await getCategoriesQuery(options);

    success(res, categories);
  } catch (error) {
    internalServerError(res);
  }
};

export const getCategoryById = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return badRequestError(res, "Validation failed", errors.array());
  }

  try {
    const { id } = req.params;
    const category = await getCategoryQuery(id);

    if (!category)
      return notFoundError(res, `Product with ID ${id} does not exist`);

    success(res, category);
  } catch (error) {
    internalServerError(res);
  }
};

import { Request, Response } from "express";
import { QueryOptions } from "../types";

import {
  success,
  internalServerError,
  badRequestError,
  notFoundError,
  conflictRequestError,
} from "../helpers/responseHandler/responseHandler";
import {
  assignCategoriesToProductQuery,
  createProductQuery,
  getProductQuery,
  getProductsQuery,
  isProductTitleUniqueQuery,
} from "../queries/productQueries";
import { validationResult } from "express-validator";

export const createProduct = async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return badRequestError(res, "Validation failed", errors.array());
    }

    const body = req.body;
    const isTitleUnique = await isProductTitleUniqueQuery(body.title);

    if (!isTitleUnique) {
      return conflictRequestError(
        res,
        `Product with title ${body.title} already exists`
      );
    }

    const product = await createProductQuery(body);
    return success(res, product);
  } catch (error) {
    internalServerError(res);
  }
};

export const getProducts = async (req: Request, res: Response) => {
  try {
    const { orderBy, skip, take } = req.query as QueryOptions;

    const options = { orderBy, skip, take };
    const products = await getProductsQuery(options);
    success(res, products);
  } catch (error) {
    internalServerError(res);
  }
};

export const getProductById = async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return badRequestError(res, "Validation failed", errors.array());
    }

    const { id } = req.params;
    const product = await getProductQuery(id);
    if (!product)
      return notFoundError(res, `Product with ID ${id} does not exist`);

    success(res, product);
  } catch (error) {
    internalServerError(res);
  }
};

export const assignCategoriesToProduct = async (
  req: Request,
  res: Response
) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return badRequestError(res, "Validation failed", errors.array());
    }

    const { id } = req.params;
    const { categories } = req.body;

    const product = await getProductQuery(id);
    if (!product) {
      return notFoundError(res, `Product with ID ${id} does not exist`);
    }

    const updatedProduct = await assignCategoriesToProductQuery(id, categories);

    success(res, updatedProduct);
  } catch (error) {
    internalServerError(res);
  }
};

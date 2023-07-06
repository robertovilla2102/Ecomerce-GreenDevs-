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
  createProductQuery,
  getProductQuery,
  getProductsQuery,
  isProductTitleUnique,
} from "../queries/products";
import { validationResult } from "express-validator";

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

export const createProduct = async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return badRequestError(res, "Validation failed", errors.array());
    }

    const body = req.body;
    const isTitleUnique = await isProductTitleUnique(body.title);

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

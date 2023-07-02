import { Request, Response, Router } from "express";
import {
  createProductQuery,
  getProductQuery,
  getProductsQuery,
} from "../queries/products";
import { QueryOptions } from "../types";
import {
  success,
  internalServerError,
  notFound,
  badRequest,
} from "../helpers/responseHandler/responseHandler";
import { validateProductSchema } from "../validators/productValidator";
import { validationResult } from "express-validator";
import { validateGetEntityById } from "../validators/commonsValidator";

const productRoutes = Router();

const ROUTES = {
  PRODUCTS: "/products",
  PRODUCT: "/products/:id",
};

productRoutes.post(
  ROUTES.PRODUCTS,
  validateProductSchema,
  async (req: Request, res: Response) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return badRequest(res, "Validation failed", errors.array());
      }

      const body = req.body;
      const product = await createProductQuery(body);
      return success(res, product);
    } catch (error) {
      internalServerError(res);
    }
  }
);

productRoutes.get(ROUTES.PRODUCTS, async (req: Request, res) => {
  try {
    const { orderBy, skip, take } = req.query as QueryOptions;

    const options = { orderBy, skip, take };
    const products = await getProductsQuery(options);
    success(res, products);
  } catch (error) {
    internalServerError(res);
  }
});

productRoutes.get(
  ROUTES.PRODUCT,
  validateGetEntityById,
  async (req: Request, res: Response) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return badRequest(res, "Validation failed", errors.array());
      }

      const { id } = req.params;
      const product = await getProductQuery(id);
      if (!product)
        return notFound(res, `Product with ID ${id} does not exist`);

      success(res, product);
    } catch (error) {
      internalServerError(res);
    }
  }
);

export default productRoutes;

import { Request, Router } from "express";
import {
  createProductQuery,
  getProductQuery,
  getProductsQuery,
} from "../queries/products";
import { QueryOptions } from "../types";
import {
  success,
  internalServerError,
  badRequest,
  notFound,
} from "../helpers/responseHandler";

const routes = Router();

const ROUTES = {
  PRODUCTS: "/products",
  PRODUCT: "/products/:id",
};

routes.post(ROUTES.PRODUCTS, async (req: Request, res) => {
  try {
    const body = req.body;
    const product = await createProductQuery(body);
    return success(res, product);
  } catch (error) {
    internalServerError(res);
  }
});

routes.get(ROUTES.PRODUCTS, async (req: Request, res) => {
  try {
    const { orderBy, skip, take } = req.query as QueryOptions;

    const options = { orderBy, skip, take };
    const products = await getProductsQuery(options);
    success(res, products);
  } catch (error) {
    internalServerError(res);
  }
});

routes.get(ROUTES.PRODUCT, async (req: Request, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return badRequest(res, "ID is required ");
    }
    const product = await getProductQuery(id);

    if (!product) {
      return notFound(res, `Product with ID ${id} does not exist`);
    }

    success(res, product);
  } catch (error) {
    internalServerError(res);
  }
});

export default routes;

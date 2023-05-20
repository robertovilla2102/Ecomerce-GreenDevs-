import { Product } from "@prisma/client";
import client from "../client";
import { QueryOptions } from "../types";

const { create } = client.product;

export const createProductQuery = async (body: Product): Promise<Product> => {
  const result = await create({ data: body });

  console.log(result);

  return result;
};

export const getProductsQuery = async (
  options?: QueryOptions
): Promise<Product[]> => {
  const { orderBy, skip, take } = options || {};

  const products = await client.product.findMany({
    take: Number(take) || undefined,
    skip: Number(skip) || undefined,
    orderBy: { updatedAt: orderBy },
  });

  return products;
};

export const getProductQuery = async (id: string): Promise<Product | null> => {
  const product = await client.product.findUnique({
    where: { id: Number(id) },
  });

  return product;
};

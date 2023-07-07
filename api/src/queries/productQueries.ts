import { Product } from "@prisma/client";
import client from "../client";
import { QueryOptions } from "../types";

const { create } = client.product;

export const createProductQuery = async (body: Product): Promise<Product> => {
  return create({ data: body });
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
    include: { categories: true },
  });

  return product;
};

export const isProductTitleUniqueQuery = async (
  title: string
): Promise<boolean> => {
  const product = await client.product.findMany({
    where: { title },
  });

  return !product.length;
};

export const assignCategoriesToProductQuery = async (
  productId: string,
  categoriesIds: string[]
): Promise<Product> => {
  const product = await client.product.update({
    where: { id: Number(productId) },
    data: {
      categories: {
        connect: categoriesIds.map((categoryId) => ({
          id: Number(categoryId),
        })),
      },
    },
  });

  return product;
};

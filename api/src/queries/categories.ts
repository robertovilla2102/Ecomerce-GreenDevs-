import { Category } from "@prisma/client";
import client from "../client";
import { QueryOptions } from "../types";

export const getCategoriesQuery = async (
  options?: QueryOptions
): Promise<Category[]> => {
  const { orderBy, skip, take } = options || {};

  const categories = await client.category.findMany({
    take: Number(take) || undefined,
    skip: Number(skip) || undefined,
    orderBy: { updatedAt: orderBy },
  });

  return categories;
};

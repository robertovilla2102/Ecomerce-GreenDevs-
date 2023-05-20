import { Product } from "@prisma/client";
import client from "../client";

const { create } = client.product;

export const createProduct = async (body: Product) => {
  const result = await create({
    data: body,
  });

  console.log(result);

  return result;
};

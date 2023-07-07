import { Prisma } from "@prisma/client";

export type QueryOptions = {
  take?: number;
  skip?: number;
  orderBy?: Prisma.SortOrder;
};

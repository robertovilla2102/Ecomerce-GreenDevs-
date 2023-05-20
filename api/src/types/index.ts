import { Prisma } from "@prisma/client";
import { Response } from "express";

export type QueryOptions = {
  take?: number;
  skip?: number;
  orderBy?: Prisma.SortOrder;
};

export interface CustomResponse extends Response {
  sendResponse(statusCode: number, data: unknown): void;
}

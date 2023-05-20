import { Request, Response } from "express";
import logger from "../logs/logger";

interface ApiError {
  statusCode: number;
  message: string;
}

const errorHandler = (err: Error, _req: Request, res: Response): ApiError => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  const message = err.message || "Internal Server Error";

  const error: ApiError = {
    statusCode,
    message,
  };

  logger.error(err.message, { error: err });

  return error;
};

export default errorHandler;

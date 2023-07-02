import { Response } from "express";
import { ERROR_NAMES, STATUS_CODES } from "./responseHandler.consts";
import { ApiError, ApiResponse } from "./responseHandle.types";
import { ValidationError } from "express-validator";

export const success = (res: Response, data: unknown) => {
  const response: ApiResponse = {
    status: STATUS_CODES.OK,
    message: "OK",
    data,
  };

  return res.json(response.data);
};

export const badRequest = (
  res: Response,
  message: string,
  errors: ValidationError[]
) => {
  const response: ApiError = {
    message,
    errors: errors || [],
    status: STATUS_CODES.BAD_REQUEST,
    errorName: ERROR_NAMES.BAD_REQUEST,
  };

  return res.status(STATUS_CODES.BAD_REQUEST).json(response);
};

export const notFound = (res: Response, message: string) => {
  const response: ApiError = {
    message: message,
    status: STATUS_CODES.NOT_FOUND,
    errorName: ERROR_NAMES.NOT_FOUND,
  };

  return res.status(STATUS_CODES.NOT_FOUND).json(response);
};

export const internalServerError = (res: Response) => {
  const response: ApiError = {
    message: "Internal Server Error",
    status: STATUS_CODES.INTERNAL_SERVER_ERROR,
    errorName: ERROR_NAMES.INTERNAL_SERVER_ERROR,
  };

  return res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json(response);
};

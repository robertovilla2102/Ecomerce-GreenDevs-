import { Response } from "express";
import { ERROR_NAMES, STATUS_CODES } from "./responseHandler.consts";
import { ApiResponse } from "./responseHandle.types";
import { ValidationError } from "express-validator";
import { generateResponse } from "./responseHandler.helpers";

export const success = (res: Response, data: unknown) => {
  const response: ApiResponse = {
    status: STATUS_CODES.OK,
    message: "OK",
    data,
  };

  return res.json(response);
};

export const createdResponse = (res: Response) => {
  const response = {
    status: STATUS_CODES.CREATED,
    message: "Created",
  };

  return res.status(STATUS_CODES.CREATED).json(response);
};

export const badRequestError = (
  res: Response,
  message: string,
  errors: ValidationError[] = []
) => {
  const response = generateResponse({
    message,
    errorsDetails: errors,
    status: STATUS_CODES.BAD_REQUEST,
    errorName: ERROR_NAMES.BAD_REQUEST,
  });

  return res.status(STATUS_CODES.BAD_REQUEST).json(response);
};

export const notFoundError = (res: Response, message: string) => {
  const response = generateResponse({
    message: message,
    status: STATUS_CODES.NOT_FOUND,
    errorName: ERROR_NAMES.NOT_FOUND,
  });

  return res.status(STATUS_CODES.NOT_FOUND).json(response);
};

export const internalServerError = (res: Response) => {
  const response = generateResponse({
    message: "Internal Server Error",
    status: STATUS_CODES.INTERNAL_SERVER_ERROR,
    errorName: ERROR_NAMES.INTERNAL_SERVER_ERROR,
  });

  return res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json(response);
};

export const conflictRequestError = (res: Response, message: string) => {
  const response = generateResponse({
    message: message,
    status: STATUS_CODES.CONFLICT,
    errorName: ERROR_NAMES.CONFLICT,
  });

  return res.status(STATUS_CODES.CONFLICT).json(response);
};

export const unauthorizedError = (res: Response, message: string) => {
  const response = generateResponse({
    message: message,
    status: STATUS_CODES.UNAUTHORIZED,
    errorName: ERROR_NAMES.UNAUTHORIZED,
  });

  return res.status(STATUS_CODES.UNAUTHORIZED).json(response);
};

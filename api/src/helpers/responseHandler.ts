import { Response } from "express";

interface ApiResponse {
  message: string;
  data: unknown;
  status: number;
}

interface ApiError extends Partial<ApiResponse> {
  errorName: string;
}

const STATUS_CODES = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
};

const ERROR_NAMES = {
  BAD_REQUEST: "Bad Request",
  NOT_FOUND: "Not Found",
  INTERNAL_SERVER_ERROR: "Internal Server Error",
};

export const success = (res: Response, data: unknown) => {
  const response: ApiResponse = {
    status: STATUS_CODES.OK,
    message: "OK",
    data,
  };

  res.status(response.status).json(response.data);
};

export const badRequest = (res: Response, message: string) => {
  const response: ApiError = {
    message,
    status: STATUS_CODES.BAD_REQUEST,
    errorName: ERROR_NAMES.BAD_REQUEST,
  };

  res.status(STATUS_CODES.BAD_REQUEST).json(response);
};

export const notFound = (res: Response, message: string) => {
  const response: ApiError = {
    message: message,
    status: STATUS_CODES.NOT_FOUND,
    errorName: ERROR_NAMES.NOT_FOUND,
  };

  res.status(STATUS_CODES.NOT_FOUND).json(response);
};

export const internalServerError = (res: Response) => {
  const response: ApiError = {
    message: "Internal Server Error",
    status: STATUS_CODES.INTERNAL_SERVER_ERROR,
    errorName: ERROR_NAMES.INTERNAL_SERVER_ERROR,
  };

  res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json(response);
};

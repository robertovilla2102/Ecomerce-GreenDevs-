import { ValidationError } from "express-validator";

export interface ApiResponse {
  message: string;
  data: unknown;
  status: number;
}

export interface ApiError extends Partial<ApiResponse> {
  errorName: string;
  timestamp: string;
  errorsDetails?: ValidationError[];
}

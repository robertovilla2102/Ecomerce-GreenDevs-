import { ApiError } from "./responseHandle.types";

type GenerateResponse = Partial<ApiError>;

export const generateResponse = (input: GenerateResponse) => {
  const response = {
    status: input.status,
    message: input.message,
    errorName: input.errorName,
    timestamp: new Date().toISOString(),
    errorsDetails: input.errorsDetails || null,
  };

  return response as ApiError;
};

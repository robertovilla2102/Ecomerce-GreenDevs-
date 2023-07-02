import { param } from "express-validator";

export const validateGetEntityById = [
  param("id").isInt().withMessage("ID must be an integer"),
];

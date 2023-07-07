import { body } from "express-validator";

export const validateUserSchema = [
  body("name").isString().withMessage("Name must be a string"),
  body("email").isEmail().withMessage("Email must be a valid email address"),
  body("password")
    .isLength({ min: 4 })
    .withMessage("Password must be at least 6 characters long"),
];

export const validateLoginSchema = [
  body("email").isEmail().withMessage("Email must be a valid email address"),
  body("password")
    .isLength({ min: 4 })
    .withMessage("Password must be at least 6 characters long"),
];

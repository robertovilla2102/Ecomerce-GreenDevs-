import { body } from "express-validator";

export const validateProductSchema = [
  body("price").isFloat().withMessage("Price must be a floating-point number"),
  body("description").isString().withMessage("Description must be a string"),
  body("image").isString().withMessage("Image must be a string"),
  body("quantity").isInt().withMessage("Quantity must be an integer"),
  body("averageRating")
    .isFloat()
    .withMessage("Average rating must be a floating-point number"),
  body("availability")
    .isBoolean()
    .withMessage("Availability must be a boolean"),
  body("title").isString().withMessage("Title must be a string"),
];

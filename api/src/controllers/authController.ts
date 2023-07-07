import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { getUserByEmailQuery, registerUserQuery } from "../queries/userQueries";

import { validationResult } from "express-validator";
import {
  badRequestError,
  createdResponse,
  internalServerError,
  success,
  unauthorizedError,
} from "../helpers/responseHandler/responseHandler";
import { generateToken } from "../helpers/jwt/generateToken";

export const registerController = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return badRequestError(res, "Validation failed", errors.array());
  }

  console.log(
    "%cauthController.ts line:20 password",
    "color: #26bfa5;",
    password
  );

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await registerUserQuery({
      name,
      email,
      password: hashedPassword,
    });

    console.log("%cuserController.ts line:29 user", "color: #26bfa5;", user);

    return createdResponse(res);
  } catch (error) {
    res.status(500).json({ error: "Failed to register user." });
  }
};

export const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return badRequestError(res, "Validation failed", errors.array());
  }

  try {
    const user = await getUserByEmailQuery(email);

    if (!user) {
      return unauthorizedError(res, "Bad credentials");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return unauthorizedError(res, "Bad credentials");
    }

    const response = generateToken(user);

    success(res, response);
  } catch (error) {
    internalServerError(res);
  }
};

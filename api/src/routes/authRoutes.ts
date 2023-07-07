import { Router } from "express";

import {
  registerController,
  loginController,
} from "../controllers/authController";
import {
  validateLoginSchema,
  validateUserSchema,
} from "../validators/uservalidator";

const ROUTES = {
  LOGIN: "/auth/login",
  REGISTER: "/auth/register",
};

const authRoutes = Router();

authRoutes.post(ROUTES.LOGIN, validateLoginSchema, loginController);
authRoutes.post(ROUTES.REGISTER, validateUserSchema, registerController);

export default authRoutes;

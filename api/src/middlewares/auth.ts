import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT_SECRET } from "../config";
import { unauthorizedError } from "../helpers/responseHandler/responseHandler";

interface AuthRequest extends Request {
  userId?: number;
}

const authMiddleware = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return unauthorizedError(res, "No token provided.");
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
    req.userId = decoded.userId;
    next();
  } catch (error) {
    return unauthorizedError(res, "Invalid token.");
  }
};

export default authMiddleware;

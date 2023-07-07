import { User } from "@prisma/client";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../../config";

export const generateToken = (user: User) => {
  const payload = {
    id: user.id,
    name: user.name,
    email: user.email,
  };

  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: "24h",
  });

  return token;
};

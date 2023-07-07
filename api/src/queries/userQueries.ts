import { User } from "@prisma/client";
import client from "../client";

type PartialUser = Pick<User, "name" | "email" | "password">;
export const registerUserQuery = async (body: PartialUser) => {
  const user = await client.user.create({
    data: body,
  });

  return user;
};

export const getUserByEmailQuery = async (email: string) => {
  const user = await client.user.findUnique({
    where: { email },
  });

  return user;
};

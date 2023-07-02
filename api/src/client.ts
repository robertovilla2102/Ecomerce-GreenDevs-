import { PrismaClient } from "@prisma/client";

const client = new PrismaClient({
  log: ["info", "warn"],
  errorFormat: "pretty",
});

export default client;

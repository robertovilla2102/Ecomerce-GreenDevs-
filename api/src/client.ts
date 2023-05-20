import { PrismaClient } from "@prisma/client";

const client = new PrismaClient({
  log: ["query", "info", "warn"],
  errorFormat: "pretty",
});

export default client;

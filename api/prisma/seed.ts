import { PrismaClient, Prisma } from "@prisma/client";
import { mockedCategories } from "./mocks/categories";

const prisma = new PrismaClient({
  log: ["query", "info", "warn"],
  errorFormat: "pretty",
});

const userData: Prisma.UserCreateInput[] = [
  {
    name: "admin",
    email: "admin@admin.com",
    password: "admin",
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    });
    console.log(`Created user with id: ${user.id}`);
  }

  for (const p of mockedCategories) {
    const plant = await prisma.category.create({
      data: p,
    });
    console.log(`Created category with id: ${plant.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

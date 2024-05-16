import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function getCustomers() {
  const allCustomers = await prisma.customer.findMany();
  return allCustomers;
}

getCustomers()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

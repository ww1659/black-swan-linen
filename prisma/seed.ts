const { PrismaClient } = require("@prisma/client");
const customers = require("./data/customers.json");
const linen = require("./data/linen.json");
const orders = require("./data/order.json");

const prisma = new PrismaClient();

async function main() {
  // Seed customers
  for (const customer of customers) {
    await prisma.customer.create({
      data: customer,
    });
  }

  // Seed linen items
  for (const item of linen) {
    await prisma.linen.create({
      data: item,
    });
  }

  // Seed orders
  for (const order of orders) {
    await prisma.order.create({
      data: {
        customerId: order.customerId,
        items: order.items,
      },
    });
  }
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

import { prisma } from "../lib/prisma";

async function main() {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      status: true,
      college: true,
      department: true,
      year: true,
      phone: true,
    },
    orderBy: { role: "asc" },
  });

  console.log("Total users:", users.length);
  console.log("\nUsers List:");
  console.log(JSON.stringify(users, null, 2));

  await prisma.$disconnect();
}

main();

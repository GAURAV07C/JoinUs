import { prisma } from "../lib/prisma";

async function checkSchema() {
  console.log("Checking database schema...\n");

  try {
    await prisma.$connect();
    console.log("✅ Database connected\n");

    const result = await prisma.$queryRaw<any[]>`
      SELECT column_name, data_type, is_nullable
      FROM information_schema.columns
      WHERE table_name = 'events'
      ORDER BY ordinal_position
    `;

    console.log("Events table columns:");
    console.table(result);

    const result2 = await prisma.$queryRaw<any[]>`
      SELECT column_name, data_type, is_nullable
      FROM information_schema.columns
      WHERE table_name = 'users'
      ORDER BY ordinal_position
    `;

    console.log("\nUsers table columns:");
    console.table(result2);

    await prisma.$disconnect();
  } catch (error) {
    console.error("Error checking schema:", error);
    await prisma.$disconnect();
    process.exit(1);
  }
}

checkSchema();

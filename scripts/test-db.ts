import { prisma } from "../lib/prisma";
import bcrypt from "bcryptjs";

async function testDatabase() {
  console.log("🔍 Testing database connection...");
  
  try {
    await prisma.$connect();
    console.log("✅ Database connected successfully!");

    const userCount = await prisma.user.count();
    console.log(`📊 Total users in database: ${userCount}`);

    const adminExists = await prisma.user.findFirst({
      where: { role: "ADMIN" },
    });

    if (adminExists) {
      console.log("✅ Admin user exists:", adminExists.email);
    } else {
      console.log("⚠️  No admin user found. Creating test admin...");
      
      const hashedPassword = await bcrypt.hash("Admin@123", 12);
      
      const admin = await prisma.user.create({
        data: {
          name: "Test Admin",
          email: "admin@test.com",
          password: hashedPassword,
          role: "ADMIN",
          status: "APPROVED",
        },
      });
      
      console.log("✅ Test admin created:", admin.email);
      console.log("   Password: Admin@123");
    }

    const eventCount = await prisma.event.count();
    console.log(`📊 Total events in database: ${eventCount}`);

    console.log("\n✅ All database tests passed!");
  } catch (error) {
    console.error("❌ Database test failed:", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

testDatabase();

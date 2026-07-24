import { NextRequest } from "next/server";
import { prisma } from "../lib/prisma";
import bcrypt from "bcryptjs";

async function testAuthFlow() {
  console.log("🔍 Testing Authentication Flow...\n");

  try {
    await prisma.$connect();
    console.log("✅ Database connected");

    const adminEmail = "admin@test.com";
    const adminPassword = "Admin@123";

    const user = await prisma.user.findUnique({
      where: { email: adminEmail },
    });

    if (!user) {
      console.log("❌ Admin user not found. Run test-db.ts first!");
      process.exit(1);
    }

    console.log("✅ Admin user found:", user.email);
    console.log("   Role:", user.role);
    console.log("   Status:", user.status);

    const passwordMatch = await bcrypt.compare(adminPassword, user.password!);
    if (!passwordMatch) {
      console.log("❌ Password mismatch!");
      process.exit(1);
    }
    console.log("✅ Password verified");

    console.log("\n📋 Credentials for login:");
    console.log(`   Email: ${adminEmail}`);
    console.log(`   Password: ${adminPassword}`);
    console.log(`   Role: ${user.role}`);
    console.log(`\n🌐 Login URL: http://127.0.0.1:3001/auth/login`);
    console.log(`\n✅ Auth flow test completed successfully!`);
  } catch (error) {
    console.error("❌ Test failed:", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

testAuthFlow();

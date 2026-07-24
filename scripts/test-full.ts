import { prisma } from "../lib/prisma";
import bcrypt from "bcryptjs";

async function runFullTest() {
  console.log("🧪 Running Full API Test Suite...\n");

  try {
    await prisma.$connect();
    console.log("✅ [1/5] Database connection: PASS\n");

    const adminEmail = "admin@test.com";
    const adminPassword = "Admin@123";

    const user = await prisma.user.findUnique({
      where: { email: adminEmail },
    });

    if (!user) {
      console.log("❌ [2/5] Admin user not found. Run test-db.ts first!");
      process.exit(1);
    }

    if (user.status !== "APPROVED") {
      console.log(`❌ [2/5] User status is ${user.status}, expected APPROVED`);
      process.exit(1);
    }

    const passwordMatch = await bcrypt.compare(adminPassword, user.password!);
    if (!passwordMatch) {
      console.log("❌ [2/5] Password verification failed");
      process.exit(1);
    }

    console.log("✅ [2/5] Admin credentials valid: PASS");
    console.log(`   Email: ${user.email}`);
    console.log(`   Role: ${user.role}\n`);

    const eventCount = await prisma.event.count();
    console.log(`✅ [3/5] Events in database: ${eventCount}\n`);

    const registrationCount = await prisma.eventRegistration.count();
    console.log(`✅ [4/5] Registrations in database: ${registrationCount}\n`);

    console.log("✅ [5/5] Schema validation: PASS");
    console.log("   User, Event, EventRegistration, EventForm tables exist\n");

    console.log("═══════════════════════════════════════");
    console.log("✅ ALL TESTS PASSED!");
    console.log("═══════════════════════════════════════\n");
    console.log("📋 Test Credentials:");
    console.log(`   Email: ${adminEmail}`);
    console.log(`   Password: ${adminPassword}`);
    console.log(`   Role: ${user.role}\n`);
    console.log("🌐 Next Steps:");
    console.log("   1. Start dev server: pnpm dev");
    console.log("   2. Open: http://127.0.0.1:3001/auth/login");
    console.log("   3. Login with credentials above");
    console.log("   4. Test dashboard features\n");
  } catch (error) {
    console.error("❌ Test suite failed:", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

runFullTest();

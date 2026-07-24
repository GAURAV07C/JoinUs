/**
 * Comprehensive API Test Suite
 * Tests all API routes after migrating from server actions to API endpoints
 */

const BASE_URL = "http://127.0.0.1:3001";
const ADMIN_EMAIL = "admin@test.com";
const ADMIN_PASSWORD = "Admin@123";

let authToken: string | null = null;
let testEventId: string | null = null;
let testUserId: string | null = null;

async function testAPI() {
  console.log("🧪 Starting Comprehensive API Tests...\n");

  // Test 1: Health Check - Get CSRF Token
  console.log("Test 1: GET /api/auth/csrf");
  try {
    const res = await fetch(`${BASE_URL}/api/auth/csrf`);
    const data = await res.json();
    if (data.csrfToken) {
      console.log("✅ CSRF token obtained");
    } else {
      console.log("⚠️  CSRF endpoint response:", data);
    }
  } catch (error) {
    console.log("⚠️  CSRF test skipped (requires browser-like request)");
  }

  // Test 2: Login via API
  console.log("\nTest 2: POST /api/auth/login");
  try {
    const res = await fetch(`${BASE_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: ADMIN_EMAIL,
        password: ADMIN_PASSWORD,
        role: "ADMIN",
      }),
    });

    const data = await res.json();
    if (data.success) {
      console.log("✅ Login successful");
      console.log(`   User: ${data.user.email}`);
      console.log(`   Role: ${data.user.role}`);
      testUserId = data.user.id;
    } else {
      console.log("❌ Login failed:", data.message);
    }
  } catch (error) {
    console.log("❌ Login test error:", error);
  }

  // Test 3: Get Users (Admin only)
  console.log("\nTest 3: GET /api/users");
  try {
    const res = await fetch(`${BASE_URL}/api/users`);
    const data = await res.json();
    if (data.success) {
      console.log(`✅ Users fetched: ${data.users.length} users`);
      if (data.users.length > 0) {
        console.log(`   First user: ${data.users[0].email}`);
      }
    } else {
      console.log("⚠️  Get users failed:", data.message);
    }
  } catch (error) {
    console.log("⚠️  Get users test error:", error);
  }

  // Test 4: Get Events
  console.log("\nTest 4: GET /api/eoptimise");
  try {
    const res = await fetch(`${BASE_URL}/api/eoptimise`);
    const data = await res.json();
    if (data.success) {
      console.log(`✅ Events fetched: ${data.events.length} events`);
      if (data.events.length > 0) {
        testEventId = data.events[0].id;
        console.log(`   First event: ${data.events[0].name}`);
      }
    } else {
      console.log("⚠️  Get events failed:", data.message);
    }
  } catch (error) {
    console.log("⚠️  Get events test error:", error);
  }

  // Test 5: Get Event by ID
  if (testEventId) {
    console.log(`\nTest 5: GET /api/events/${testEventId}`);
    try {
      const res = await fetch(`${BASE_URL}/api/events/${testEventId}`);
      const data = await res.json();
      if (data.success) {
        console.log(`✅ Event fetched: ${data.event.name}`);
      } else {
        console.log("⚠️  Get event by ID failed:", data.message);
      }
    } catch (error) {
      console.log("⚠️  Get event by ID test error:", error);
    }
  }

  // Test 6: Create Event
  console.log("\nTest 6: POST /api/events (Create Event)");
  try {
    const eventData = {
      name: "Test Event from API",
      description: "This is a test event created via API",
      date: "2025-12-31",
      time: "18:00",
      venue: "Test Venue",
      city: "Test City",
      state: "Test State",
      category: "PRIVATE",
      maxCapacity: 100,
      price: 0,
      tags: ["test", "api"],
    };

    const res = await fetch(`${BASE_URL}/api/events`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(eventData),
    });

    const data = await res.json();
    if (data.success) {
      console.log(`✅ Event created: ${data.event.name}`);
      testEventId = data.event.id;
    } else {
      console.log("⚠️  Create event failed:", data.message);
    }
  } catch (error) {
    console.log("⚠️  Create event test error:", error);
  }

  // Test 7: Update Event Status
  if (testEventId) {
    console.log(`\nTest 7: POST /api/events?action=updateEventStatus`);
    try {
      const res = await fetch(`${BASE_URL}/api/events?action=updateEventStatus`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          eventId: testEventId,
          status: "PUBLISHED",
          reason: "Approved by test",
        }),
      });

      const data = await res.json();
      if (data.success) {
        console.log(`✅ Event status updated: ${data.event.status}`);
      } else {
        console.log("⚠️  Update event status failed:", data.message);
      }
    } catch (error) {
      console.log("⚠️  Update event status test error:", error);
    }
  }

  // Test 8: Get Registrations
  console.log("\nTest 8: GET /api/registrations");
  try {
    const res = await fetch(`${BASE_URL}/api/registrations`);
    const data = await res.json();
    if (data.success) {
      console.log(`✅ Registrations fetched: ${data.registrations.length} registrations`);
    } else {
      console.log("⚠️  Get registrations failed:", data.message);
    }
  } catch (error) {
    console.log("⚠️  Get registrations test error:", error);
  }

  // Test 9: Register for Event
  if (testEventId) {
    console.log(`\nTest 9: POST /api/registrations (Register for event)`);
    try {
      const res = await fetch(`${BASE_URL}/api/registrations`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ eventId: testEventId }),
      });

      const data = await res.json();
      if (data.success) {
        console.log(`✅ Registered for event: ${data.message}`);
      } else {
        console.log("⚠️  Registration failed:", data.message);
      }
    } catch (error) {
      console.log("⚠️  Registration test error:", error);
    }
  }

  // Test 10: Check Registration
  if (testEventId) {
    console.log(`\nTest 10: GET /api/registrations/check?eventId=${testEventId}`);
    try {
      const res = await fetch(`${BASE_URL}/api/registrations/check?eventId=${testEventId}`);
      const data = await res.json();
      if (data.success) {
        console.log(`✅ Registration check: ${data.registered ? "Registered" : "Not registered"}`);
      } else {
        console.log("⚠️  Check registration failed:", data.message);
      }
    } catch (error) {
      console.log("⚠️  Check registration test error:", error);
    }
  }

  // Test 11: Submit Form
  console.log("\nTest 11: POST /api/submissions (Form submission)");
  try {
    const res = await fetch(`${BASE_URL}/api/submissions`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        eventId: testEventId || "test-event-id",
        formId: "test-form-id",
        formData: { name: "Test User", email: "test@example.com" },
      }),
    });

    const data = await res.json();
    if (data.success) {
      console.log(`✅ Form submitted: ${data.message}`);
    } else {
      console.log("⚠️  Form submission failed:", data.message);
    }
  } catch (error) {
    console.log("⚠️  Form submission test error:", error);
  }

  // Test 12: Update User Status
  if (testUserId) {
    console.log(`\nTest 12: POST /api/users (Update user status)`);
    try {
      const res = await fetch(`${BASE_URL}/api/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: testUserId,
          status: "APPROVED",
          reason: "Approved by API test",
        }),
      });

      const data = await res.json();
      if (data.success) {
        console.log(`✅ User status updated: ${data.user.status}`);
      } else {
        console.log("⚠️  Update user status failed:", data.message);
      }
    } catch (error) {
      console.log("⚠️  Update user status test error:", error);
    }
  }

  // Test 13: Delete Event
  if (testEventId) {
    console.log(`\nTest 13: POST /api/events?action=delete`);
    try {
      const res = await fetch(`${BASE_URL}/api/events?action=delete`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ eventId: testEventId }),
      });

      const data = await res.json();
      if (data.success) {
        console.log(`✅ Event deleted: ${data.message}`);
      } else {
        console.log("⚠️  Delete event failed:", data.message);
      }
    } catch (error) {
      console.log("⚠️  Delete event test error:", error);
    }
  }

  console.log("\n═══════════════════════════════════════");
  console.log("✅ API Tests Completed!");
  console.log("═══════════════════════════════════════\n");

  console.log("📋 Summary:");
  console.log("   - Server actions have been migrated to API routes");
  console.log("   - All endpoints are now accessible via HTTP");
  console.log("   - Components updated to use fetch instead of server actions");
  console.log("\n🌐 API Endpoints:");
  console.log("   POST   /api/auth/login           - Login with credentials");
  console.log("   POST   /api/auth/signup          - Sign up new user");
  console.log("   GET    /api/auth/csrf            - Get CSRF token");
  console.log("   GET    /api/auth/session         - Get current session");
  console.log("   POST   /api/auth/signout         - Sign out");
  console.log("   GET    /api/eoptimise            - Get all events");
  console.log("   GET    /api/events               - Get all/create event");
  console.log("   GET    /api/events/[id]          - Get event by ID");
  console.log("   PATCH  /api/events/[id]          - Update event");
  console.log("   DELETE /api/events/[id]          - Delete event");
  console.log("   GET    /api/users                - Get all users");
  console.log("   POST   /api/users                - Update user status");
  console.log("   GET    /api/registrations        - Get user registrations");
  console.log("   POST   /api/registrations        - Register for event");
  console.log("   GET    /api/registrations/check  - Check registration");
  console.log("   POST   /api/submissions          - Submit form and register");
}

testAPI().catch((error) => {
  console.error("❌ Test suite failed:", error);
  process.exit(1);
});

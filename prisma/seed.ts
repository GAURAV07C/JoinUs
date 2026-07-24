import { PrismaClient, UserRole, UserStatus, EventType, EventStatus, RegistrationStatus } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting database seed...\n");

  const hashedPassword = await bcrypt.hash("password123", 10);

  const admin = await prisma.user.upsert({
    where: { email: "admin@joinus.com" },
    update: {},
    create: {
      name: "System Admin",
      email: "admin@joinus.com",
      password: hashedPassword,
      role: "ADMIN",
      status: "APPROVED",
      college: "JoinUs HQ",
      department: "Administration",
      year: "N/A",
      phone: "+91-9999999999",
    },
  });

  const organizer1 = await prisma.user.upsert({
    where: { email: "organizer1@joinus.com" },
    update: {},
    create: {
      name: "Rahul Sharma",
      email: "organizer1@joinus.com",
      password: hashedPassword,
      role: "ORGANIZER",
      status: "APPROVED",
      college: "IIT Delhi",
      department: "Computer Science",
      year: "3rd Year",
      phone: "+91-9876543210",
    },
  });

  const organizer2 = await prisma.user.upsert({
    where: { email: "organizer2@joinus.com" },
    update: {},
    create: {
      name: "Priya Patel",
      email: "organizer2@joinus.com",
      password: hashedPassword,
      role: "ORGANIZER",
      status: "APPROVED",
      college: "IIT Bombay",
      department: "Electronics",
      year: "2nd Year",
      phone: "+91-9876543211",
    },
  });

  const organizerPending = await prisma.user.upsert({
    where: { email: "organizer_pending@joinus.com" },
    update: {},
    create: {
      name: "Amit Kumar",
      email: "organizer_pending@joinus.com",
      password: hashedPassword,
      role: "ORGANIZER",
      status: "PENDING",
      college: "NIT Trichy",
      department: "Mechanical",
      year: "4th Year",
      phone: "+91-9876543212",
    },
  });

  const organizerRejected = await prisma.user.upsert({
    where: { email: "organizer_rejected@joinus.com" },
    update: {},
    create: {
      name: "Rejected Organizer",
      email: "organizer_rejected@joinus.com",
      password: hashedPassword,
      role: "ORGANIZER",
      status: "REJECTED",
      rejectionReason: "Incomplete profile information",
      college: "XYZ College",
      department: "Civil",
      year: "2nd Year",
      phone: "+91-9876543213",
    },
  });

  const students = await prisma.$transaction(
    [
      { name: "Vikram Singh", email: "vikram@student.com", college: "IIT Delhi", department: "Computer Science", year: "2nd Year" },
      { name: "Anjali Gupta", email: "anjali@student.com", college: "IIT Bombay", department: "Electronics", year: "1st Year" },
      { name: "Karthik Reddy", email: "karthik@student.com", college: "NIT Trichy", department: "Mechanical", year: "3rd Year" },
      { name: "Sneha Joshi", email: "sneha@student.com", college: "IIT Delhi", department: "Chemical", year: "4th Year" },
      { name: "Rohan Das", email: "rohan@student.com", college: "IIT Bombay", department: "Computer Science", year: "2nd Year" },
      { name: "Priya Nair", email: "priya@student.com", college: "NIT Trichy", department: "Civil", year: "1st Year" },
      { name: "Arjun Mehta", email: "arjun@student.com", college: "IIT Delhi", department: "Electrical", year: "3rd Year" },
      { name: "Diya Kapoor", email: "diya@student.com", college: "IIT Bombay", department: "Computer Science", year: "4th Year" },
    ].map(
      (s) =>
        prisma.user.upsert({
          where: { email: s.email },
          update: {},
          create: {
            ...s,
            password: hashedPassword,
            role: "USER",
            status: "APPROVED",
            phone: `+91-${Math.floor(9000000000 + Math.random() * 9999999999)}`,
          },
        })
    )
  );

  const allUsers = [admin, organizer1, organizer2, organizerPending, organizerRejected, ...students];

  const event1 = await prisma.event.upsert({
    where: { id: "event-1" },
    update: {},
    create: {
      name: "Tech Fest 2025",
      description: "Annual technical festival with hackathons, workshops, and competitions.",
      date: "2025-09-15",
      time: "09:00",
      venue: "Main Auditorium",
      city: "Delhi",
      state: "Delhi",
      type: "COLLEGE",
      isPaid: false,
      price: 0,
      maxAttendees: 500,
      status: "PUBLISHED",
      featured: true,
      tags: ["tech", "hackathon", "workshop"],
      organizerId: organizer1.id,
      reason: null,
    },
  });

  const event2 = await prisma.event.upsert({
    where: { id: "event-2" },
    update: {},
    create: {
      name: "Cultural Night",
      description: "An evening of music, dance, and drama performances.",
      date: "2025-10-20",
      time: "18:00",
      venue: "Open Air Theatre",
      city: "Mumbai",
      state: "Maharashtra",
      type: "COLLEGE",
      isPaid: true,
      price: 150,
      maxAttendees: 200,
      status: "PUBLISHED",
      featured: false,
      tags: ["cultural", "music", "dance"],
      organizerId: organizer2.id,
      reason: null,
    },
  });

  const event3 = await prisma.event.upsert({
    where: { id: "event-3" },
    update: {},
    create: {
      name: "AI Workshop",
      description: "Hands-on workshop on Artificial Intelligence and Machine Learning.",
      date: "2025-11-05",
      time: "10:00",
      venue: "Seminar Hall",
      city: "Chennai",
      state: "Tamil Nadu",
      type: "COLLEGE",
      isPaid: false,
      price: 0,
      maxAttendees: 100,
      status: "PENDING",
      featured: false,
      tags: ["ai", "ml", "workshop"],
      organizerId: organizer1.id,
      reason: null,
    },
  });

  const event4 = await prisma.event.upsert({
    where: { id: "event-4" },
    update: {},
    create: {
      name: "Private Party",
      description: "Exclusive private party with DJ and dinner.",
      date: "2025-12-31",
      time: "20:00",
      venue: "Sky Lounge",
      city: "Bangalore",
      state: "Karnataka",
      type: "PRIVATE",
      isPaid: true,
      price: 999,
      maxAttendees: 50,
      status: "DRAFT",
      featured: false,
      tags: ["party", "dj", "private"],
      organizerId: organizer2.id,
      reason: null,
    },
  });

  const event5 = await prisma.event.upsert({
    where: { id: "event-5" },
    update: {},
    create: {
      name: "Rejected Event",
      description: "This event was rejected due to incomplete details.",
      date: "2025-09-01",
      time: "11:00",
      venue: "TBD",
      city: "TBD",
      state: "TBD",
      type: "COLLEGE",
      isPaid: false,
      price: 0,
      maxAttendees: 100,
      status: "REJECTED",
      featured: false,
      tags: ["rejected"],
      organizerId: organizerPending.id,
      reason: "Venue details incomplete",
    },
  });

  const event6 = await prisma.event.upsert({
    where: { id: "event-6" },
    update: {},
    create: {
      name: "Completed Conference",
      description: "A past conference that was successfully completed.",
      date: "2025-08-01",
      time: "09:00",
      venue: "Conference Hall",
      city: "Delhi",
      state: "Delhi",
      type: "COLLEGE",
      isPaid: false,
      price: 0,
      maxAttendees: 300,
      status: "COMPLETED",
      featured: false,
      tags: ["conference", "past"],
      organizerId: organizer1.id,
      reason: null,
    },
  });

  const event7 = await prisma.event.upsert({
    where: { id: "event-7" },
    update: {},
    create: {
      name: "Cancelled Event",
      description: "This event was cancelled due to unavoidable circumstances.",
      date: "2025-10-10",
      time: "14:00",
      venue: "Auditorium",
      city: "Mumbai",
      state: "Maharashtra",
      type: "COLLEGE",
      isPaid: false,
      price: 0,
      maxAttendees: 150,
      status: "CANCELLED",
      featured: false,
      tags: ["cancelled"],
      organizerId: organizer2.id,
      reason: "COVID-19 restrictions",
    },
  });

  const event8 = await prisma.event.upsert({
    where: { id: "event-8" },
    update: {},
    create: {
      name: "Startup Pitch",
      description: "Pitch your startup idea to investors and win funding.",
      date: "2025-12-01",
      time: "10:00",
      venue: "Innovation Lab",
      city: "Bangalore",
      state: "Karnataka",
      type: "PRIVATE",
      isPaid: true,
      price: 250,
      maxAttendees: 80,
      status: "PENDING",
      featured: true,
      tags: ["startup", "pitch", "funding"],
      organizerId: organizerPending.id,
      reason: null,
    },
  });

  const events = [event1, event2, event3, event4, event5, event6, event7, event8];

  const eventForms = [];
  for (const event of events) {
    const form = await prisma.eventForm.upsert({
      where: { eventId: event.id },
      update: {},
      create: {
        eventId: event.id,
        fields: [
          { id: "f1", label: "Full Name", type: "text", required: true },
          { id: "f2", label: "Email", type: "email", required: true },
          { id: "f3", label: "Phone", type: "tel", required: false },
        ],
      },
    });
    eventForms.push(form);
  }

  const registrationStatuses: RegistrationStatus[] = ["CONFIRMED", "CONFIRMED", "CONFIRMED", "PENDING", "CANCELLED"];

  for (let i = 0; i < students.length; i++) {
    const student = students[i];
    const eventIndex = i % events.length;
    const event = events[eventIndex];
    const form = eventForms[eventIndex];

    if (event.status !== "PUBLISHED" && event.status !== "PENDING") continue;

    await prisma.eventRegistration.upsert({
      where: { userId_eventId: { userId: student.id, eventId: event.id } },
      update: {},
      create: {
        userId: student.id,
        eventId: event.id,
        status: registrationStatuses[i % registrationStatuses.length],
        qrCode: `QR-${Date.now()}-${i}`,
        notes: i % 3 === 0 ? "Vegetarian meal required" : undefined,
      },
    });

    if (i % 2 === 0 && form) {
      await prisma.formSubmission.create({
        data: {
          formId: form.id,
          userId: student.id,
          eventId: event.id,
          data: {
            fullName: student.name,
            email: student.email,
            phone: student.phone ?? "",
            college: student.college ?? "",
          },
        },
      });
    }
  }

  console.log("✅ Seed completed successfully!");
  console.log("\n📊 Summary:");
  console.log(`   Users: ${await prisma.user.count()}`);
  console.log(`   Events: ${await prisma.event.count()}`);
  console.log(`   Registrations: ${await prisma.eventRegistration.count()}`);
  console.log(`   Event Forms: ${await prisma.eventForm.count()}`);
  console.log(`   Form Submissions: ${await prisma.formSubmission.count()}`);
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

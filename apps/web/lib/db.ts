import type { User, Event, Registration } from "@/types";
import bcrypt from "bcryptjs";

// In-memory database simulation
const users: User[] = [
  {
    id: "1",
    email: "admin@joinus.com",
    name: "Admin User",
    password: bcrypt.hashSync("admin123", 10),
    role: "ADMIN",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    email: "organizer@joinus.com",
    name: "Event Organizer",
    password: bcrypt.hashSync("organizer123", 10),
    role: "ORGANIZER",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3",
    email: "student@joinus.com",
    name: "Student User",
    password: bcrypt.hashSync("student123", 10),
    role: "USER",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const events: Event[] = [
  {
    id: "1",
    name: "Tech Conference 2024",
    description:
      "Annual technology conference featuring the latest innovations",
    date: "2024-03-15",
    time: "09:00",
    venue: "Convention Center",
    city: "Mumbai",
    state: "Maharashtra",
    address: "Convention Center, Bandra Kurla Complex",
    posterUrl: "/tech-conference.png",
    type: "PRIVATE",
    isPaid: true,
    price: 99.99,
    maxAttendees: 500,
    status: "PUBLISHED",
    featured: true,
    tags: ["Technology", "Conference", "Networking"],
    organizerId: "2",
    organizer: {
      id: "2",
      name: "Event Organizer",
      email: "organizer@joinus.com",
      phone: "+91-9876543210",
      avatar: "/organizer-avatar.png",
      college: "IIT Bombay",
    },
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    name: "Startup Pitch Night",
    description: "Watch innovative startups pitch their ideas to investors",
    date: "2024-03-20",
    time: "18:00",
    venue: "Innovation Hub",
    city: "Bangalore",
    state: "Karnataka",
    address: "Innovation Hub, Koramangala",
    posterUrl: "/startup-pitch-event.png",
    type: "PRIVATE",
    isPaid: true,
    price: 25.0,
    maxAttendees: 200,
    status: "PUBLISHED",
    featured: false,
    tags: ["Startup", "Pitch", "Investors"],
    organizerId: "2",
    organizer: {
      id: "2",
      name: "Event Organizer",
      email: "organizer@joinus.com",
      phone: "+91-9876543210",
      avatar: "/organizer-avatar.png",
      college: "IIT Bombay",
    },
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const registrations: Registration[] = [
  {
    id: "1",
    userId: "3",
    eventId: "1",
    status: "CONFIRMED",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

// Database interface that matches Prisma's API
export const db = {
  user: {
    findUnique: async ({
      where,
    }: {
      where: { id?: string; email?: string };
    }) => {
      return (
        users.find(
          (user) =>
            (where.id && user.id === where.id) ||
            (where.email && user.email === where.email)
        ) || null
      );
    },
    findMany: async (p0: {}) => users,
    create: async ({
      data,
    }: {
      data: Omit<User, "id" | "createdAt" | "updatedAt">;
    }) => {
      const newUser: User = {
        ...data,
        id: (users.length + 1).toString(),
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      users.push(newUser);
      return newUser;
    },
    update: async ({
      where,
      data,
    }: {
      where: { id: string };
      data: Partial<User>;
    }) => {
      const index = users.findIndex((user) => user.id === where.id);
      if (index === -1) throw new Error("User not found");
      users[index] = { ...users[index], ...data, updatedAt: new Date() };
      return users[index];
    },
    delete: async ({ where }: { where: { id: string } }) => {
      const index = users.findIndex((user) => user.id === where.id);
      if (index === -1) throw new Error("User not found");
      return users.splice(index, 1)[0];
    },
  },
  event: {
    findUnique: async ({ where }: { where: { id: string } }) => {
      return events.find((event) => event.id === where.id) || null;
    },
    findMany: async ({ where }: { where?: { organizerId?: string } } = {}) => {
      if (where?.organizerId) {
        return events.filter(
          (event) => event.organizerId === where.organizerId
        );
      }
      return events;
    },
    create: async ({
      data,
    }: {
      data: Omit<Event, "id" | "createdAt" | "updatedAt">;
    }) => {
      const newEvent: Event = {
        ...data,
        id: (events.length + 1).toString(),
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      events.push(newEvent);
      return newEvent;
    },
    update: async ({
      where,
      data,
    }: {
      where: { id: string };
      data: Partial<Event>;
    }) => {
      const index = events.findIndex((event) => event.id === where.id);
      if (index === -1) throw new Error("Event not found");
      events[index] = { ...events[index], ...data, updatedAt: new Date() };
      return events[index];
    },
    delete: async ({ where }: { where: { id: string } }) => {
      const index = events.findIndex((event) => event.id === where.id);
      if (index === -1) throw new Error("Event not found");
      return events.splice(index, 1)[0];
    },
  },
  registration: {
    findUnique: async ({
      where,
    }: {
      where: {
        id?: string;
        userId_eventId?: { userId: string; eventId: string };
      };
    }) => {
      return (
        registrations.find(
          (reg) =>
            (where.id && reg.id === where.id) ||
            (where.userId_eventId &&
              reg.userId === where.userId_eventId.userId &&
              reg.eventId === where.userId_eventId.eventId)
        ) || null
      );
    },
    findMany: async ({
      where,
    }: { where?: { userId?: string; eventId?: string } } = {}) => {
      return registrations.filter(
        (reg) =>
          (!where?.userId || reg.userId === where.userId) &&
          (!where?.eventId || reg.eventId === where.eventId)
      );
    },
    create: async ({
      data,
    }: {
      data: Omit<Registration, "id" | "createdAt" | "updatedAt">;
    }) => {
      const newRegistration: Registration = {
        ...data,
        id: (registrations.length + 1).toString(),
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      registrations.push(newRegistration);
      return newRegistration;
    },
    update: async ({
      where,
      data,
    }: {
      where: { id: string };
      data: Partial<Registration>;
    }) => {
      const index = registrations.findIndex((reg) => reg.id === where.id);
      if (index === -1) throw new Error("Registration not found");
      registrations[index] = {
        ...registrations[index],
        ...data,
        updatedAt: new Date(),
      };
      return registrations[index];
    },
    delete: async ({ where }: { where: { id: string } }) => {
      const index = registrations.findIndex((reg) => reg.id === where.id);
      if (index === -1) throw new Error("Registration not found");
      return registrations.splice(index, 1)[0];
    },
  },
};

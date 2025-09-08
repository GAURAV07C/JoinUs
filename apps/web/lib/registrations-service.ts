import { randomUUID } from 'crypto';
import { prisma } from "@/lib/prisma";
import type { RegistrationStatus } from "@/types";

export async function createRegistration(userId: string, eventId: string) {
  try {
    // Check if user is already registered
    const existingRegistration = await prisma.eventRegistration.findUnique({
      where: {
        userId_eventId: {
          userId,
          eventId,
        },
      },
    });

    if (existingRegistration) {
      throw new Error("You are already registered for this event");
    }

    // Check event capacity
    const event = await prisma.event.findUnique({ where: { id: eventId } });
    if (!event) {
      throw new Error("Event not found");
    }

    // Get current registration count
    const registrationCount = await prisma.eventRegistration.count({
      where: { eventId },
    });

    if (registrationCount >= event.maxAttendees) {
      throw new Error("Event is full");
    }

    const registration = await prisma.eventRegistration.create({
      data: {
        userId,
        eventId,
        status: "CONFIRMED",
        qrCode: randomUUID(),
      },
    });

    return {
      id: registration.id,
      userId: registration.userId,
      eventId: registration.eventId,
      status: registration.status,
      createdAt: registration.registeredAt,
      updatedAt: registration.updatedAt,
    };
  } catch (error) {
    console.error("Error creating registration:", error);
    throw error;
  }
}

export async function getUserRegistrations(userId: string) {
  try {
    const registrations = await prisma.eventRegistration.findMany({
      where: { userId },
    });

    return registrations.map((reg) => ({
      id: reg.id,
      userId: reg.userId,
      eventId: reg.eventId,
      status: reg.status,
      createdAt: reg.registeredAt,
      updatedAt: reg.updatedAt,
    }));
  } catch (error) {
    console.error("Error fetching user registrations:", error);
    return [];
  }
}

export async function getEventRegistrations(eventId: string) {
  try {
    const registrations = await prisma.eventRegistration.findMany({
      where: { eventId },
    });

    return registrations.map((reg) => ({
      id: reg.id,
      userId: reg.userId,
      eventId: reg.eventId,
      status: reg.status,
      createdAt: reg.registeredAt,
      updatedAt: reg.updatedAt,
    }));
  } catch (error) {
    console.error("Error fetching event registrations:", error);
    return [];
  }
}

export async function updateRegistrationStatus(
  id: string,
  status: RegistrationStatus
) {
  try {
    const registration = await prisma.eventRegistration.update({
      where: { id },
      data: { status },
    });

    return {
      id: registration.id,
      userId: registration.userId,
      eventId: registration.eventId,
      status: registration.status,
      createdAt: registration.registeredAt,
      updatedAt: registration.updatedAt,
    };
  } catch (error) {
    console.error("Error updating registration status:", error);
    throw error;
  }
}

export async function cancelRegistration(id: string) {
  try {
    const registration = await prisma.eventRegistration.update({
      where: { id },
      data: { status: "CANCELLED" },
    });

    return {
      id: registration.id,
      userId: registration.userId,
      eventId: registration.eventId,
      status: registration.status,
      createdAt: registration.registeredAt,
      updatedAt: registration.updatedAt,
    };
  } catch (error) {
    console.error("Error cancelling registration:", error);
    throw error;
  }
}

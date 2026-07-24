



import { randomUUID } from "crypto";
import { prisma } from "@/lib/prisma";
import type { Prisma } from "@prisma/client";

export async function submitFormAndRegister(
  userId: string,
  eventId: string,
  formId: string,
  formData: any
) {
  return await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
    // 1️⃣ Check if user already registered
    const existingRegistration = await tx.eventRegistration.findUnique({
      where: {
        userId_eventId: { userId, eventId },
      },
    });

    if (existingRegistration) {
      throw new Error("You are already registered for this event");
    }

    // 2️⃣ Check event capacity
    const event = await tx.event.findUnique({ where: { id: eventId } });
    if (!event) {
      throw new Error("Event not found");
    }

    const registrationCount = await tx.eventRegistration.count({
      where: { eventId },
    });

    if (registrationCount >= event.maxAttendees) {
      throw new Error("Event is full");
    }

    // 3️⃣ Create form submission
    await tx.formSubmission.create({
      data: {
        userId,
        eventId,
        formId,
        data: formData,
      },
    });

    // 4️⃣ Create event registration
    const registration = await tx.eventRegistration.create({
      data: {
        userId,
        eventId,
        status: "CONFIRMED",
        qrCode: randomUUID(),
      },
    });

    return {
      registrationId: registration.id,
      status: registration.status,
      message: "Registration successful",
    };
  });
}

import { prisma } from "@/lib/prisma";
import type { EventStatus, Prisma } from "@prisma/client";

export async function getAllEvents() {
  try {
    const events = await prisma.event.findMany({
      include: {
        registrations: true, // include full registration data
        organizer: {
          select: {
            id: true,
            name: true,
            email: true,
            phone: true,
            avatar: true,
            college: true,
          },
        },
        eventForm: true,
        formSubmissions: true,
        _count: true,
      },
    });

    return events.map((event) => ({
      ...event,
      status: event.status as EventStatus,
      currentAttendees: event.registrations.length,
      registrations: event.registrations.map((r) => ({
        ...r,
        attendedAt: r.attendedAt ?? undefined, // ✅ Fix null → undefined
      })),
    }));
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
}

export async function getEventById(id: string) {
  try {
    const event = await prisma.event.findUnique({
      where: { id },
      include: { registrations: { select: { id: true } } },
    });

    if (!event) return null;

    return {
      ...event,
      status: event.status as EventStatus,
      currentAttendees: event.registrations.length,
    };
  } catch (error) {
    console.error("Error fetching event by ID:", error);
    return null;
  }
}

// export async function createEvent(
//   eventData: Prisma.EventCreateInput & {
//     organizer: {
//       id: string;
//       name: string;
//       email: string;
//       phone?: string;
//       avatar?: string;
//       college?: string;
//     };
//   }
// ) {
//   try {
//     const { organizer, ...createData } = eventData;
//     const event = await prisma.event.create({
//       data: {
//         ...createData,
//         organizerId: organizer.id,
//       },
//     });

//     return {
//       ...event,
//       status: event.status as EventStatus,
//       organizer: eventData.organizer,
//       currentAttendees: 0,
//     };
//   } catch (error) {
//     console.error("Error creating event:", error);
//     throw error;
//   }
// }

export async function updateEvent(
  id: string,
  eventData: Prisma.EventUpdateInput
) {
  try {
    const updateData = Object.fromEntries(
      Object.entries(eventData).filter(([_, value]) => value !== undefined)
    );

    const updatedEvent = await prisma.event.update({
      where: { id },
      data: updateData,
      include: { registrations: { select: { id: true } } },
    });

    return {
      ...updatedEvent,
      status: updatedEvent.status as EventStatus,
      currentAttendees: updatedEvent.registrations.length,
    };
  } catch (error) {
    throw error;
  }
}

export async function deleteEvent(id: string) {
  try {
    await prisma.event.delete({ where: { id } });
    return true;
  } catch (error) {
    console.error("Error deleting event:", error);
    return false;
  }
}

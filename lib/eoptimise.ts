import { prisma } from "@/lib/prisma";
import type { EventStatus } from "@prisma/client";

export async function getAllEvents() {
  try {
    const events = await prisma.event.findMany({
      select: {
        id: true,
        name: true,
        description: true,
        date: true,
        time: true,
        venue: true,
        city: true,
        state: true,
        address: true,
        posterUrl: true,
        type: true,
        isPaid: true,
        price: true,
        maxAttendees: true,
        status: true,
        featured: true,
        tags: true,
        organizerId: true,
        reason: true,
        createdAt: true,
        updatedAt: true,
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
        _count: {
          select: {
            registrations: true,
          },
        },
      },
    });

    return events.map((event) => ({
      ...event,
      status: event.status as EventStatus,
      currentAttendees: event._count?.registrations ?? 0,
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
      select: {
        id: true,
        name: true,
        description: true,
        date: true,
        time: true,
        venue: true,
        city: true,
        state: true,
        address: true,
        posterUrl: true,
        type: true,
        isPaid: true,
        price: true,
        maxAttendees: true,
        status: true,
        featured: true,
        tags: true,
        organizerId: true,
        reason: true,
        createdAt: true,
        updatedAt: true,
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
        _count: {
          select: {
            registrations: true,
          },
        },
      },
    });

    if (!event) return null;

    return {
      ...event,
      status: event.status as EventStatus,
      currentAttendees: event._count?.registrations ?? 0,
    };
  } catch (error) {
    console.error("Error fetching event by ID:", error);
    return null;
  }
}

export async function updateEvent(
  id: string,
  eventData: {
    name?: string;
    description?: string;
    date?: string;
    time?: string;
    venue?: string;
    city?: string;
    state?: string;
    address?: string;
    posterUrl?: string;
    type?: "COLLEGE" | "PRIVATE";
    isPaid?: boolean;
    price?: number;
    maxAttendees?: number;
    status?: string;
    featured?: boolean;
    tags?: string[];
  }
) {
  try {
    const updateData = Object.fromEntries(
      Object.entries(eventData).filter(([_, value]) => value !== undefined)
    );

    const updatedEvent = await prisma.event.update({
      where: { id },
      data: updateData,
      select: {
        id: true,
        name: true,
        description: true,
        date: true,
        time: true,
        venue: true,
        city: true,
        state: true,
        address: true,
        posterUrl: true,
        type: true,
        isPaid: true,
        price: true,
        maxAttendees: true,
        status: true,
        featured: true,
        tags: true,
        organizerId: true,
        reason: true,
        createdAt: true,
        updatedAt: true,
        _count: {
          select: {
            registrations: true,
          },
        },
      },
    });

    return {
      ...updatedEvent,
      status: updatedEvent.status as EventStatus,
      currentAttendees: updatedEvent._count?.registrations ?? 0,
    };
  } catch (error) {
    console.error("Error updating event:", error);
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

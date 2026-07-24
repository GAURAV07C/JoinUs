// import { db } from "@/lib/db";
import { prisma } from "@/lib/prisma";
import type { EventStatus, Event, EventForm } from "@prisma/client";

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

export async function createEvent(eventData: {
  name: string;
  description: string;
  date: string;
  time: string;
  venue: string;
  city: string;
  state: string;
  address?: string;
  posterUrl?: string;
  type: "COLLEGE" | "PRIVATE";
  isPaid: boolean;
  price: number;
  maxAttendees: number;
  organizerId: string;
  organizer: {
    id: string;
    name: string;
    email: string;
    phone?: string;
    avatar?: string;
    college?: string;
  };
  tags?: string[];
  featured?: boolean;
  formFields?: Record<string, any>[];
  status?: EventStatus;
  reason?: string;
}) {
  const {
    name,
    description,
    date,
    time,
    venue,
    city,
    state,
    address,
    posterUrl,
    type,
    isPaid,
    price,
    maxAttendees,
    organizerId,
    tags,
    featured,
    formFields,
    status,
    reason,
    organizer,
  } = eventData;

  try {
    const [event, eventForm] = await prisma.$transaction([
      prisma.event.create({
        data: {
          name,
          description,
          date,
          time,
          venue,
          city,
          state,
          address,
          posterUrl,
          type,
          isPaid,
          price,
          maxAttendees,
          organizerId,
          tags: tags || [],
          featured: featured || false,
          status: status ?? "DRAFT",
          reason: status === "REJECTED" ? (reason ?? null) : null,
        },
      }),
      prisma.eventForm.create({
        data: {
          eventId: "TEMP",
          fields: formFields ?? [],
        },
      }),
    ]);

    const updatedForm = await prisma.eventForm.update({
      where: { id: eventForm.id },
      data: { eventId: event.id },
    });

    return {
      ...event,
      organizer,
      currentAttendees: 0,
      eventForm: updatedForm,
    };
  } catch (error) {
    console.error("Error creating event:", error);
    throw error;
  }
}

export async function updateEvent(
  id: string,
  eventData: Partial<{
    name: string;
    description: string;
    date: string;
    time: string;
    venue: string;
    city: string;
    state: string;
    address?: string;
    posterUrl?: string;
    type: "COLLEGE" | "PRIVATE";
    isPaid: boolean;
    price: number;
    maxAttendees: number;
    status: EventStatus;
    featured?: boolean;
    tags?: string[];
  }>
) {
  try {
    const updateData: any = {};

    if (eventData.name) updateData.name = eventData.name;
    if (eventData.description) updateData.description = eventData.description;
    if (eventData.date) updateData.date = eventData.date;
    if (eventData.time) updateData.time = eventData.time;
    if (eventData.venue) updateData.venue = eventData.venue;
    if (eventData.city) updateData.city = eventData.city;
    if (eventData.state) updateData.state = eventData.state;
    if (eventData.address !== undefined) updateData.address = eventData.address;
    if (eventData.posterUrl !== undefined) updateData.posterUrl = eventData.posterUrl;
    if (eventData.type) updateData.type = eventData.type;
    if (eventData.isPaid !== undefined) updateData.isPaid = eventData.isPaid;
    if (eventData.price !== undefined) updateData.price = eventData.price;
    if (eventData.maxAttendees) updateData.maxAttendees = eventData.maxAttendees;
    if (eventData.status) updateData.status = eventData.status;
    if (eventData.featured !== undefined) updateData.featured = eventData.featured;
    if (eventData.tags !== undefined) updateData.tags = eventData.tags;

    const event = await prisma.event.findUnique({ where: { id } });
    if (!event) throw new Error("Event not found");

    const updatedEvent = await prisma.event.update({
      where: { id },
      data: updateData,
    });

    const registrationCount = await prisma.eventRegistration.count({
      where: { eventId: id },
    });

    return {
      id: updatedEvent.id,
      name: updatedEvent.name,
      description: updatedEvent.description,
      date: updatedEvent.date,
      time: updatedEvent.time,
      venue: updatedEvent.venue,
      city: updatedEvent.city,
      state: updatedEvent.state,
      address: updatedEvent.address,
      posterUrl: updatedEvent.posterUrl,
      type: updatedEvent.type,
      isPaid: updatedEvent.isPaid,
      price: updatedEvent.price,
      maxAttendees: updatedEvent.maxAttendees,
      status: updatedEvent.status as EventStatus,
      featured: updatedEvent.featured,
      tags: updatedEvent.tags,
      organizerId: updatedEvent.organizerId,
      currentAttendees: registrationCount,
      createdAt: updatedEvent.createdAt,
      updatedAt: updatedEvent.updatedAt,
    };
  } catch (error) {
    console.error("Error updating event:", error);
    throw error;
  }
}

export async function updateEventStatus(
  eventId: string,
  status: EventStatus,
  reason?: string
) {
  try {
    const updatedEvent = await prisma.event.update({
      where: { id: eventId },
      data: {
        status,
        reason: status === "REJECTED" ? (reason ?? null) : null,
      },
    });

    return { success: true, data: updatedEvent };
  } catch (error) {
    console.error("Failed to update event status:", error);
    return { success: false, message: "Could not update event status" };
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


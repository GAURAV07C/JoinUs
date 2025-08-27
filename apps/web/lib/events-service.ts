import { db } from "@/lib/db";
import type { EventStatus } from "@/types";

export async function getAllEvents() {
  try {
    const events = await db.event.findMany({});
    const allRegistrations = await db.registration.findMany({});
    const allUsers = await db.user.findMany({});

    return events.map((event) => {
      const registrationCount = allRegistrations.filter(
        (reg) => reg.eventId === event.id
      ).length;
      const organizer = allUsers.find((user) => user.id === event.organizerId);

      return {
        id: event.id,
        name: event.name,
        description: event.description,
        date: event.date,
        time: event.time,
        venue: event.venue,
        city: event.city,
        state: event.state,
        address: event.address,
        posterUrl: event.posterUrl,
        type: event.type,
        isPaid: event.isPaid,
        price: event.price,
        maxAttendees: event.maxAttendees,
        status: event.status as EventStatus,
        featured: event.featured,
        tags: event.tags,
        organizerId: event.organizerId,
        organizer: organizer
          ? {
              id: organizer.id,
              name: organizer.name,
              email: organizer.email,
              phone: organizer.phone,
              avatar: organizer.avatar,
              college: organizer.college,
            }
          : null,
        currentAttendees: registrationCount,
        rejectionReason: event.rejectionReason,
        createdAt: event.createdAt,
        updatedAt: event.updatedAt,
      };
    });
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
}

export async function getEventById(id: string) {
  try {
    const event = await db.event.findUnique({ where: { id } });
    if (!event) return null;

    const registrations = await db.registration.findMany({
      where: { eventId: id },
    });
    const registrationCount = registrations.length;

    return {
      id: event.id,
      name: event.name,
      description: event.description,
      date: event.date,
      time: event.time,
      venue: event.venue,
      city: event.city,
      state: event.state,
      address: event.address,
      posterUrl: event.posterUrl,
      type: event.type,
      isPaid: event.isPaid,
      price: event.price,
      maxAttendees: event.maxAttendees,
      status: event.status as EventStatus,
      featured: event.featured,
      tags: event.tags,
      organizerId: event.organizerId,
      currentAttendees: registrationCount,
      rejectionReason: event.rejectionReason,
      createdAt: event.createdAt,
      updatedAt: event.updatedAt,
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
}) {
  try {
    const event = await db.event.create({
      data: {
        name: eventData.name,
        description: eventData.description,
        date: eventData.date,
        time: eventData.time,
        venue: eventData.venue,
        city: eventData.city,
        state: eventData.state,
        address: eventData.address,
        posterUrl: eventData.posterUrl,
        type: eventData.type,
        isPaid: eventData.isPaid,
        price: eventData.price,
        maxAttendees: eventData.maxAttendees,
        organizerId: eventData.organizerId,
        organizer: eventData.organizer,
        tags: eventData.tags || [],
        featured: eventData.featured || false,
        status: "DRAFT" as EventStatus,
      },
    });

    return {
      id: event.id,
      name: event.name,
      description: event.description,
      date: event.date,
      time: event.time,
      venue: event.venue,
      city: event.city,
      state: event.state,
      address: event.address,
      posterUrl: event.posterUrl,
      type: event.type,
      isPaid: event.isPaid,
      price: event.price,
      maxAttendees: event.maxAttendees,
      status: event.status as EventStatus,
      featured: event.featured,
      tags: event.tags,
      organizerId: event.organizerId,
      organizer: event.organizer,
      currentAttendees: 0,
      rejectionReason: event.rejectionReason,
      createdAt: event.createdAt,
      updatedAt: event.updatedAt,
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
    if (eventData.posterUrl !== undefined)
      updateData.posterUrl = eventData.posterUrl;
    if (eventData.type) updateData.type = eventData.type;
    if (eventData.isPaid !== undefined) updateData.isPaid = eventData.isPaid;
    if (eventData.price !== undefined) updateData.price = eventData.price;
    if (eventData.maxAttendees)
      updateData.maxAttendees = eventData.maxAttendees;
    if (eventData.status) updateData.status = eventData.status;
    if (eventData.featured !== undefined)
      updateData.featured = eventData.featured;
    if (eventData.tags !== undefined) updateData.tags = eventData.tags;

    const event = await db.event.findUnique({ where: { id } });
    if (!event) throw new Error("Event not found");

    const updatedEvent = await db.event.update({
      where: { id },
      data: updateData,
    });

    const registrations = await db.registration.findMany({
      where: { eventId: id },
    });
    const registrationCount = registrations.length;

    return {
      id: event.id,
      name: event.name,
      description: event.description,
      date: event.date,
      time: event.time,
      venue: event.venue,
      city: event.city,
      state: event.state,
      address: event.address,
      posterUrl: event.posterUrl,
      type: event.type,
      isPaid: event.isPaid,
      price: event.price,
      maxAttendees: event.maxAttendees,
      status: event.status as EventStatus,
      featured: event.featured,
      tags: event.tags,
      organizerId: event.organizerId,
      currentAttendees: registrationCount,
      rejectionReason: event.rejectionReason,
      createdAt: event.createdAt,
      updatedAt: event.updatedAt,
    };
  } catch (error) {
    console.error("Error updating event:", error);
    throw error;
  }
}

export async function deleteEvent(id: string) {
  try {
    await db.event.delete({ where: { id } });
    return true;
  } catch (error) {
    console.error("Error deleting event:", error);
    return false;
  }
}

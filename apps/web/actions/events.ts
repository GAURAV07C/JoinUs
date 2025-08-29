"use server";
import { prisma } from "@joinUs/database";
import { auth } from "@/lib/auth";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import type { EventStatus } from "@joinUs/validation/types";
// import {
//   getAllEvents,
//   getEventById,
//   createEvent,
//   updateEvent,
//   deleteEvent,
// } from "@/lib/events-service";

import { eventSchema } from "@joinUs/validation/eventTypes";

// export async function getEventsAction() {
//   try {
//     const events = await getAllEvents();
//     return { success: true, events };
//   } catch (error) {
//     return { success: false, message: "Failed to fetch events" };
//   }
// }

// export async function getEventByIdAction(id: string) {
//   try {
//     const event = await getEventById(id);
//     if (!event) {
//       return { success: false, message: "Event not found" };
//     }
//     return { success: true, event };
//   } catch (error) {
//     return { success: false, message: "Failed to fetch event" };
//   }
// }

// export async function createEventAction(prevState: any, formData: FormData) {
//   const session = await auth();

//   if (
//     !session?.user ||
//     (session.user.role !== "ORGANIZER" && session.user.role !== "ADMIN")
//   ) {
//     return { success: false, message: "Unauthorized" };
//   }

//   const rawData = {
//     title: formData.get("title"),
//     description: formData.get("description"),
//     date: formData.get("date"),
//     time: formData.get("time"),
//     venue: formData.get("venue"),
//     category: formData.get("category"),
//     maxCapacity: Number(formData.get("maxCapacity")),
//     price: Number(formData.get("price")),
//     tags: formData.get("tags") ? JSON.parse(String(formData.get("tags"))) : [],
//     requirements: formData.get("requirements")
//       ? JSON.parse(String(formData.get("requirements")))
//       : [],
//   };

//   try {
//     const validatedData = eventSchema.parse(rawData);

//     // Map form data to the expected event structure
//     const eventData = {
//       name: validatedData.title,
//       description: validatedData.description,
//       date: validatedData.date,
//       time: validatedData.time,
//       venue: validatedData.venue,
//       city: "", // Default value, should be added to form
//       state: "", // Default value, should be added to form
//       type: "PRIVATE" as const, // Default value, should be added to form
//       isPaid: validatedData.price > 0,
//       price: validatedData.price,
//       maxAttendees: validatedData.maxCapacity,
//       organizerId: session.user.id,
//       organizer: {
//         id: session.user.id,
//         name: session.user.name || "Unknown",
//         email: session.user.email || "",
//       },
//       tags: validatedData.tags,
//     };

//     const event = await createEvent(eventData);

//     revalidatePath("/dashboard/events");
//     revalidatePath("/");

//     return { success: true, message: "Event created successfully", event };
//   } catch (error) {
//     if (error instanceof z.ZodError) {
//       return {
//         success: false,
//         message: "Invalid form data",
//         errors: error.flatten().fieldErrors,
//       };
//     }

//     return { success: false, message: "Failed to create event" };
//   }
// }

// export async function updateEventAction(
//   eventId: string,
//   prevState: any,
//   formData: FormData
// ) {
//   const session = await auth();

//   if (!session?.user) {
//     return { success: false, message: "Unauthorized" };
//   }

//   const event = await getEventById(eventId);
//   if (!event) {
//     return { success: false, message: "Event not found" };
//   }

//   // Check if user owns the event or is admin
//   if (event.organizerId !== session.user.id && session.user.role !== "ADMIN") {
//     return { success: false, message: "Unauthorized" };
//   }

//   const rawData = {
//     title: formData.get("title"),
//     description: formData.get("description"),
//     date: formData.get("date"),
//     time: formData.get("time"),
//     venue: formData.get("venue"),
//     category: formData.get("category"),
//     maxCapacity: Number(formData.get("maxCapacity")),
//     price: Number(formData.get("price")),
//     tags: formData.get("tags") ? JSON.parse(String(formData.get("tags"))) : [],
//     requirements: formData.get("requirements")
//       ? JSON.parse(String(formData.get("requirements")))
//       : [],
//   };

//   try {
//     const validatedData = eventSchema.parse(rawData);

//     // Map form data to the expected event structure
//     const eventData = {
//       name: validatedData.title,
//       description: validatedData.description,
//       date: validatedData.date,
//       time: validatedData.time,
//       venue: validatedData.venue,
//       city: "", // Default value, should be added to form
//       state: "", // Default value, should be added to form
//       type: "PRIVATE" as const, // Default value, should be added to form
//       isPaid: validatedData.price > 0,
//       price: validatedData.price,
//       maxAttendees: validatedData.maxCapacity,
//       tags: validatedData.tags,
//     };

//     const updatedEvent = await updateEvent(eventId, eventData);

//     revalidatePath("/dashboard/events");
//     revalidatePath("/");
//     revalidatePath(`/event/${eventId}`);

//     return {
//       success: true,
//       message: "Event updated successfully",
//       event: updatedEvent,
//     };
//   } catch (error) {
//     if (error instanceof z.ZodError) {
//       return {
//         success: false,
//         message: "Invalid form data",
//         errors: error.flatten().fieldErrors,
//       };
//     }

//     return { success: false, message: "Failed to update event" };
//   }
// }

// export async function updateEventStatusAction(
//   eventId: string,
//   status: EventStatus
// ) {
//   const session = await auth();

//   if (!session?.user) {
//     return { success: false, message: "Unauthorized" };
//   }

//   const event = await getEventById(eventId);
//   if (!event) {
//     return { success: false, message: "Event not found" };
//   }

//   // Check if user owns the event or is admin
//   if (event.organizerId !== session.user.id && session.user.role !== "ADMIN") {
//     return { success: false, message: "Unauthorized" };
//   }

//   try {
//     const updatedEvent = await updateEvent(eventId, { status });

//     revalidatePath("/dashboard/events");
//     revalidatePath("/");
//     revalidatePath(`/event/${eventId}`);

//     return {
//       success: true,
//       message: `Event ${status.toLowerCase()} successfully`,
//       event: updatedEvent,
//     };
//   } catch (error) {
//     return { success: false, message: "Failed to update event status" };
//   }
// }

// export async function deleteEventAction(eventId: string) {
//   const session = await auth();

//   if (!session?.user) {
//     return { success: false, message: "Unauthorized" };
//   }

//   const event = await getEventById(eventId);
//   if (!event) {
//     return { success: false, message: "Event not found" };
//   }

//   // Check if user owns the event or is admin
//   if (event.organizerId !== session.user.id && session.user.role !== "ADMIN") {
//     return { success: false, message: "Unauthorized" };
//   }

//   try {
//     await deleteEvent(eventId);

//     revalidatePath("/dashboard/events");
//     revalidatePath("/");

//     return { success: true, message: "Event deleted successfully" };
//   } catch (error) {
//     return { success: false, message: "Failed to delete event" };
//   }
// }

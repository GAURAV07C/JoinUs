"use server";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { z } from "zod";
import { eventSchema } from "@/lib/vali";
import { revalidatePath } from "next/cache";

// export async function createEventAction(formData: FormData) {
//   const session = await auth();

//   if (
//     !session?.user ||
//     (session.user.role !== "ORGANIZER" && session.user.role !== "ADMIN")
//   ) {
//     return { success: false, message: "Unauthorized" };
//   }

//   // ✅ Collect raw data safely
//   const rawData = {
//     name: formData.get("name"),
//     description: formData.get("description"),
//     date: formData.get("date"),
//     time: formData.get("time"),
//     venue: formData.get("venue"),
//     city: formData.get("city"),
//     state: String(formData.get("state")),
//     address: formData.get("address") ?? "",
//     price: Number(formData.get("price")),
//     maxAttendees: Number(formData.get("maxAttendees")),
//     tags: formData.get("tags") ? JSON.parse(String(formData.get("tags"))) : [],
//     requirements: formData.get("requirements")
//       ? JSON.parse(String(formData.get("requirements")))
//       : [],
//     featured: formData.get("featured") === "true",
//     formFields: formData.get("formFields")
//       ? JSON.parse(String(formData.get("formFields")))
//       : [],
//     status: ["PENDING", "APPROVED", "REJECTED"].includes(
//       String(formData.get("status"))
//     )
//       ? String(formData.get("status"))
//       : "PENDING", // ✅ fallback to PENDING if invalid
//     reason: formData.get("reason") ?? "",
//   };

//   try {
//     // ✅ Validate with Zod
//     const validatedData = eventSchema.parse(rawData);

//     // ✅ Use Prisma transaction if saving event + eventForm separately
//     const event = await prisma.event.create({
//       data: {
//         ...validatedData,
//         isPaid: validatedData.price > 0,
//         organizerId: session.user.id,
//       },
//     });

//     // If you have a separate EventForm model, insert formFields here:
//     if (validatedData.formFields && validatedData.formFields.length > 0) {
//       await prisma.eventForm.create({
//         data: {
//           eventId: event.id,
//           fields: validatedData.formFields,
//         },
//       });
//     }

//     revalidatePath("/dashboard/events");

//     return { success: true, message: "Event created successfully", event };
//   } catch (error) {
//     if (error instanceof z.ZodError) {
//       console.error("Validation errors:", error.flatten().fieldErrors);
//       return {
//         success: false,
//         message: "Invalid form data",
//         errors: error.flatten().fieldErrors,
//       };
//     }

//     console.error("Create event error:", error);
//     return { success: false, message: "Failed to create event" };
//   }
// }


export async function createEventAction(formData: FormData) {
  const session = await auth();

  if (
    !session?.user ||
    (session.user.role !== "ORGANIZER" && session.user.role !== "ADMIN")
  ) {
    return { success: false, message: "Unauthorized" };
  }

  // Collect raw data safely
  const rawData = {
    name: formData.get("name"),
    description: formData.get("description"),
    date: formData.get("date"),
    time: formData.get("time"),
    venue: formData.get("venue"),
    city: formData.get("city"),
    state: String(formData.get("state")),
    address: formData.get("address") ?? "",
    price: Number(formData.get("price")),
    maxAttendees: Number(formData.get("maxAttendees")),
    type: String(formData.get("type")),
    featured: formData.get("featured") === "true",
    tags: formData.get("tags") ? JSON.parse(String(formData.get("tags"))) : [],
    requirements: formData.get("requirements")
      ? JSON.parse(String(formData.get("requirements")))
      : [],
    status: ["PENDING", "APPROVED", "REJECTED"].includes(
      String(formData.get("status"))
    )
      ? String(formData.get("status"))
      : "PENDING",
    reason: formData.get("reason") ?? "",
    formFields: formData.get("formFields")
      ? JSON.parse(String(formData.get("formFields")))
      : [],
  };

  

  try {
    // Validate using Zod
    const validatedData = eventSchema.parse(rawData);

    // Create Event without formFields
    const event = await prisma.event.create({
      data: {
        name: validatedData.name,
        description: validatedData.description,
        date: validatedData.date,
        time: validatedData.time,
        venue: validatedData.venue,
        city: validatedData.city,
        state: validatedData.state,
        address: validatedData.address,
        price: validatedData.price,
        maxAttendees: validatedData.maxAttendees,
        type: validatedData.type,
        featured: validatedData.featured,
        tags: validatedData.tags,
        status: validatedData.status,
        rejectionReason: validatedData.reason,
        isPaid: validatedData.price > 0,
        organizerId: session.user.id,
      },
    });

    // Create EventForm separately if fields exist
    if (validatedData?.formFields.length > 0) {
      await prisma.eventForm.create({
        data: {
          eventId: event.id,
          fields: validatedData.formFields,
        },
      });
    }

    revalidatePath("/dashboard/events");

    return { success: true, message: "Event created successfully", event };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Invalid form data",
        errors: error.flatten().fieldErrors,
      };
    }

    console.error("Create event error:", error);
    return { success: false, message: "Failed to create event" };
  }
}



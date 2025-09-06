"use server";

import { auth } from "@/lib/auth"; // adjust based on your project
import { prisma } from "@/lib/prisma";
import { z } from "zod";
import { eventSchema } from "@/lib/vali";
import { revalidatePath } from "next/cache";

export async function createEventAction(formData: FormData) {
  const session = await auth();

  if (
    !session?.user ||
    (session.user.role !== "ORGANIZER" && session.user.role !== "ADMIN")
  ) {
    return { success: false, message: "Unauthorized" };
  }

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
  maxAttendees: Number(formData.get("maxAttendees")), // ✅ Added
  tags: formData.get("tags") ? JSON.parse(String(formData.get("tags"))) : [],
  requirements: formData.get("requirements")
    ? JSON.parse(String(formData.get("requirements")))
    : [],
};



  try {
    const validatedData = eventSchema.parse(rawData);

    const event = await prisma.event.create({
      data: {
        ...validatedData,
        isPaid: validatedData.price > 0,
        organizerId: session.user.id,
      },
    });

    revalidatePath("/dashboard/events");
    return { success: true, message: "Event created successfully", event };
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("Validation errors:", error.flatten().fieldErrors);
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

"use server"

import { z } from "zod"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"

const createEventSchema = z.object({
  name: z.string().min(1, "Event name is required"),
  description: z.string().min(1, "Description is required"),
  date: z.string().min(1, "Date is required"),
  time: z.string().min(1, "Time is required"),
  venue: z.string().min(1, "Venue is required"),
  type: z.enum(["COLLEGE", "PRIVATE"]),
  isPaid: z.boolean(),
  price: z.number().min(0),
  formFields: z.array(
    z.object({
      id: z.string(),
      label: z.string(),
      type: z.string(),
      required: z.boolean(),
      options: z.array(z.string()).optional(),
    }),
  ),
})

const registerEventSchema = z.object({
  eventId: z.string(),
  formData: z.record(z.any()),
})

export async function createEventAction(formData: FormData) {
  const rawData = {
    name: formData.get("name"),
    description: formData.get("description"),
    date: formData.get("date"),
    time: formData.get("time"),
    venue: formData.get("venue"),
    type: formData.get("type"),
    isPaid: formData.get("isPaid") === "true",
    price: Number(formData.get("price")) || 0,
    formFields: JSON.parse((formData.get("formFields") as string) || "[]"),
  }

  const validatedData = createEventSchema.parse(rawData)

  // TODO: Replace with actual database call
  const event = {
    id: `event-${Date.now()}`,
    ...validatedData,
    organizerId: "current-user-id", // TODO: Get from session
    status: "PUBLISHED",
    createdAt: new Date(),
  }

  revalidatePath("/dashboard/my-events")
  redirect("/dashboard/my-events")
}

export async function registerForEventAction(formData: FormData) {
  const rawData = {
    eventId: formData.get("eventId"),
    formData: JSON.parse((formData.get("formData") as string) || "{}"),
  }

  const validatedData = registerEventSchema.parse(rawData)

  // TODO: Replace with actual database call
  const registration = {
    id: `reg-${Date.now()}`,
    userId: "current-user-id", // TODO: Get from session
    eventId: validatedData.eventId,
    data: validatedData.formData,
    qrCode: `qr-${Date.now()}`,
    status: "CONFIRMED",
    registeredAt: new Date(),
  }

  revalidatePath(`/event/${validatedData.eventId}`)
  redirect(`/event/${validatedData.eventId}/qr`)
}

export async function updateProfileAction(formData: FormData) {
  const profileSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email"),
    phone: z.string().min(10, "Phone must be at least 10 digits"),
    college: z.string().optional(),
    department: z.string().optional(),
    year: z.string().optional(),
  })

  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    college: formData.get("college"),
    department: formData.get("department"),
    year: formData.get("year"),
  }

  const validatedData = profileSchema.parse(rawData)

  // TODO: Replace with actual database call
  const updatedUser = {
    id: "current-user-id",
    ...validatedData,
    updatedAt: new Date(),
  }

  revalidatePath("/dashboard/profile")
  return { success: true, message: "Profile updated successfully" }
}

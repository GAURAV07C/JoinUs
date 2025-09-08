import { z } from "zod";

// ✅ Form Field Schema for better validation
export const formFieldSchema = z.object({
  label: z.string().min(1, "Field label is required"),
  type: z.enum(["text", "number", "checkbox", "select"]), // adjust based on your UI
  placeholder: z.string().optional(),
  required: z.boolean().optional(),
  options: z.array(z.string()).optional(), // only used for "select"
});

// ✅ Final Event Schema
export const eventSchema = z.object({
  name: z.string().min(1, "Event name is required"),
  description: z.string().min(1, "Description is required"),
  date: z.string().min(1, "Date is required"),
  time: z.string().min(1, "Time is required"),
  venue: z.string().min(1, "Venue is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  address: z.string().nullable().optional(),

  posterUrl: z.string().url().optional().or(z.literal("")), // allow empty string
  type: z.enum(["COLLEGE", "PRIVATE"]).default("PRIVATE"),

  price: z.coerce.number().min(0).default(0),
  maxAttendees: z.coerce.number().min(1, "Max attendees is required"),

  tags: z.array(z.string()).optional(),

  // ✅ Custom fields
  featured: z.boolean().default(false),
  status: z
    .enum([
      "DRAFT",
      "PENDING",
      "PUBLISHED",
      "CANCELLED",
      "COMPLETED",
      "REJECTED",
    ])
    .default("PENDING"),
  reason: z.string().optional(),

  // ✅ This will ALWAYS be an array, never undefined
  formFields: z.array(formFieldSchema).default([]),
});

import { z } from "zod";

export const eventSchema = z.object({
  name: z.string().min(1, "Event name is required"),
  description: z.string().min(1, "Description is required"),
  date: z.string().min(1, "Date is required"),
  time: z.string().min(1, "Time is required"),
  venue: z.string().min(1, "Venue is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  address: z.string().nullable().optional(), // optional
  posterUrl: z.string().url().optional().or(z.literal("")), // allow empty string
  type: z.enum(["COLLEGE", "PRIVATE"]).default("PRIVATE"),
  price: z.coerce.number().min(0).default(0), // coerce string → number
  maxAttendees: z.coerce.number().min(1, "Max attendees is required"),
  tags: z.array(z.string()).optional(),
});

import { z } from "zod";

export const eventSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  date: z.string().min(1, "Date is required"),
  time: z.string().min(1, "Time is required"),
  venue: z.string().min(1, "Venue is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  category: z.string().min(1, "Category is required"),
  maxCapacity: z.number().min(1, "Capacity must be at least 1"),
  price: z.number().min(0, "Price cannot be negative"),
  tags: z.array(z.string()).optional(),
  requirements: z.array(z.object({
    id: z.string(),
    label: z.string(),
    fields: z.enum(["text", "email", "dropdown", "file"]),
    required: z.boolean(),
    options: z.array(z.string()).optional(),
  })).optional(),
});

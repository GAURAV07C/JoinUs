import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(1, "Password is required"),
  role: z.enum(["USER", "ORGANIZER", "ADMIN"], {
    required_error: "Please select a role",
  }),
});

export const signupSchema = z
  .object({
    name: z
      .string()
      .min(2, "Name must be at least 2 characters")
      .max(50, "Name must be less than 50 characters"),
    email: z.string().email("Please enter a valid email address"),
    phone: z
      .string()
      .min(10, "Phone number must be at least 10 digits")
      .max(15, "Phone number is too long"),
    role: z.enum(["USER", "ORGANIZER", "ADMIN"], {
      required_error: "Please select a role",
    }),
    college: z.string().optional(),
    department: z.string().optional(),
    year: z.string().optional(),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(100, "Password is too long")
      .regex(/[A-Za-z]/, "Password must contain at least one letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(
        /[^A-Za-z0-9]/,
        "Password must contain at least one special character"
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  })
  .refine(
    (data) => {
      if (data.role === "USER" || data.role === "ORGANIZER") {
        return data.college && data.department;
      }
      return true;
    },
    {
      message:
        "College and department are required for students and organizers",
      path: ["college"],
    }
  )
  .refine(
    (data) => {
      if (data.role === "USER") {
        return data.year;
      }
      return true;
    },
    {
      message: "Year of study is required for students",
      path: ["year"],
    }
  );

export const eventSchema = z.object({
  title: z
    .string()
    .min(1, "Event title is required")
    .max(100, "Title is too long"),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters")
    .max(1000, "Description is too long"),
  date: z.string().min(1, "Date is required"),
  time: z.string().min(1, "Time is required"),
  venue: z
    .string()
    .min(1, "Venue is required")
    .max(200, "Venue name is too long"),
  category: z.string().min(1, "Category is required"),
  maxCapacity: z
    .number()
    .min(1, "Capacity must be at least 1")
    .max(10000, "Capacity is too large"),
  price: z
    .number()
    .min(0, "Price cannot be negative")
    .max(100000, "Price is too high"),
  tags: z.array(z.string()).optional(),
  requirements: z.array(z.string()).optional(),
});

export const userStatusSchema = z.object({
  userId: z.string().min(1, "User ID is required"),
  status: z.enum(["APPROVED", "REJECTED", "SUSPENDED"]),
  reason: z.string().optional(),
});

export const registrationSchema = z.object({
  eventId: z.string().min(1, "Event ID is required"),
  additionalData: z.record(z.any()).optional(),
});

export type LoginFormData = z.infer<typeof loginSchema>;
export type SignupFormData = z.infer<typeof signupSchema>;
export type EventFormData = z.infer<typeof eventSchema>;
export type UserStatusFormData = z.infer<typeof userStatusSchema>;
export type RegistrationFormData = z.infer<typeof registrationSchema>;

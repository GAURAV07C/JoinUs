import * as z from "zod";

// ✅ Common Login Schema (For both Buyer & Seller)
export const LoginSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z.string().min(1, { message: "Password is required" }),
  role: z
    .enum(["ADMIN"], {
      errorMap: () => ({ message: "Role is required" }),
    })
    .transform((role) => role.toUpperCase()), // Ensure uppercase consistency
  rememberMe: z.boolean().optional(),
});

// ✅ Base Register Schema (Used by both Buyer & Seller)
export const BaseRegisterSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  name: z.string().min(1, { message: "Name is required" }),
  password: z.string().min(6, { message: "Minimum 6 characters required" }),
  confirm_password: z.string(),
  role: z.enum(["ADMIN"], {
    errorMap: () => ({ message: "Role is required" }),
  }),
  phone: z.string().optional(),
});

// ✅ Buyer Register Schema (Added role explicitly + refined password validation)
export const BuyerRegisterSchema = BaseRegisterSchema.extend({
  role: z.literal("ADMIN"),
}).refine((data) => data.password === data.confirm_password, {
  message: "Passwords do not match",
  path: ["confirm_password"],
});

// ✅ Seller Register Schema (Added extra fields + refined password validation)

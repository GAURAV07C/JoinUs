"use server";

import { prisma } from "@joinUs/database";
import bcrypt from "bcryptjs";
import { signIn, signOut } from "@/lib/auth";
import { loginSchema, signupSchema } from "@joinUs/validation/authTypes";
import type { UserRole, UserStatus } from "@/types";
import { getUserByEmail } from "@/data/user";
import { redirect } from "next/navigation";
import { z } from "zod";

// 🔹 Utility for consistent responses
function makeResponse<T>(
  success: boolean,
  message: string,
  data?: T,
  errors?: Record<string, string[]>
) {
  return { success, message, data, errors };
}

// -------------------- LOGIN --------------------
export async function loginAction(values: z.infer<typeof loginSchema>) {
  try {
    // Validate inputs
    const parsed = loginSchema.safeParse(values);
    if (!parsed.success) {
      return makeResponse(
        false,
        "Invalid fields",
        undefined,
        parsed.error.flatten().fieldErrors
      );
    }

    const { email, password } = parsed.data;

    // Check user existence
    const existingUser = await getUserByEmail(email);
    if (!existingUser) {
      return makeResponse(false, "User not found");
    }

    // Trigger next-auth credentials login
    await signIn("credentials", { email, password });

    return makeResponse(true, "Login successful");
  } catch (error: any) {
    if (error?.type === "CredentialsSignin") {
      return makeResponse(false, "Invalid credentials");
    }

    console.error("Login error:", error);
    return makeResponse(false, "Something went wrong");
  }
}

// -------------------- SIGNUP --------------------
export async function signupAction(values: z.infer<typeof signupSchema>) {
  try {
    // Validate inputs
    const parsed = signupSchema.safeParse(values);
    if (!parsed.success) {
      return makeResponse(
        false,
        "Invalid fields",
        undefined,
        parsed.error.flatten().fieldErrors
      );
    }

    const { name, email, password, role, college, department, year, phone } =
      parsed.data;

    // Prevent duplicate accounts
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      return makeResponse(false, "Email already in use");
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12); 
 

 // Create new user

    // Create user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role,
        college,
        department,
        year,
        phone,
      },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        avatar: true,
        role: true,
        status: true,
        college: true,
        department: true,
        year: true,
        approvedAt: true,
        approvedBy: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    // Auto-login admin users
    if (user.role === "ADMIN") {
      await signIn("credentials", { email, password });
    }

    return makeResponse(true, "Account created successfully", user);
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return makeResponse(
        false,
        "Invalid form data",
        undefined,
       
      );
    }

    console.error("Signup error:", error);
    return makeResponse(false, "Unexpected error occurred");
  }
}

// -------------------- LOGOUT --------------------
export async function logoutAction() {
  try {
    await signOut({ redirect: false });
    redirect("/");
  } catch (error) {
    console.error("Logout error:", error);
    return makeResponse(false, "Failed to logout");
  }
}

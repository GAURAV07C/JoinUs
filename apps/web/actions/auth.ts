"use server";

import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { signIn, signOut } from "@/lib/auth";
import { loginSchema, signupSchema } from "@joinUs/validation/authTypes";
import type { UserRole, UserStatus } from "@/types";
import { getUserByEmail } from "@/data/user";
import { redirect } from "next/navigation";
import { z } from "zod";


// -------------------- LOGIN --------------------
export async function loginAction(values: z.infer<typeof loginSchema>) {
  try {
    // 1. Validate inputs
    const parsed = loginSchema.safeParse(values);
    if (!parsed.success) {
      return {
        success: false,
        message: "Invalid fields",
        errors: parsed.error.flatten().fieldErrors,
      };
    }

    const { email, password, role } = parsed.data;

    // 2. Find user
    const existingUser = await getUserByEmail(email);
    if (!existingUser) {
      return { success: false, message: "User not found" };
    }

    if (existingUser.role !== role) {
      return { success: false, message: "Please select the correct role" };
    }

    // 3. Check password
    if (!existingUser.password) {
      return { success: false, message: "Password not set for this account" };
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect) {
      return { success: false, message: "Invalid password" };
    }

    // 4. NextAuth sign in
    const res = await signIn("credentials", {
      role,
      email,
      password,
      redirect: false,
      callbackUrl: "/dashboard",
    });

    if (res?.error) {
      return { success: false, message: "Invalid credentials!" };
    }

    return {
      success: true,
      message: "Login successful!",
      redirectUrl: res?.url || "/dashboard",
    };
  } catch (error) {
    console.error("Login error:", error);
    return { success: false, message: "Something went wrong!" };
  }
}


// -------------------- SIGNUP --------------------
export async function signupAction( values: z.infer<typeof signupSchema>) {
  try {
    const parsed = signupSchema.safeParse(values);
   if (!parsed.success) {
     return {
       success: false,
       message: "Invalid fields",
       errors: parsed.error.flatten().fieldErrors,
     };
   }


    const { name, email, password, role, college, department, year, phone } =
      parsed.data;

     
    if (role === "ADMIN") {
      return { success: false, message: "You cannot self-register as admin" };
    }

   const existingUser = await getUserByEmail(email);
    if (existingUser) {
      return { success: false, message: "Email already in use!" };
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    await prisma.user.create({
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
    });

    // ✅ Just return success
    return { success: true, message: "Account created successfully!" };
  } catch (error) {
    console.error("Signup error:", error);
    return { success: false, message: "Something went wrong while creating your account." };
  }
};
// -------------------- LOGOUT --------------------
export async function logoutAction() {
  try {
    await signOut({ redirect: false });
    redirect("/");
  } catch (error) {
   console.error("Logout error:", error);
    return { success: false, message: "Failed to logout due to server error." };
  }
};
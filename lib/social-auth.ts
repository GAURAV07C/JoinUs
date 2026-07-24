"use client";

import { signIn } from "next-auth/react";

/**
 * Centralized Google OAuth sign-in helper.
 * Optionally pass a callbackUrl to redirect after successful sign-in.
 */
export async function signInWithGoogle(callbackUrl?: string) {
  try {
    await signIn("google", { callbackUrl: callbackUrl || "/dashboard" });
  } catch (err) {
    // Let callers decide how to handle UX (toasts, etc.)
    throw err;
  }
}

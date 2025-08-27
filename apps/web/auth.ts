// import { cookies } from "next/headers";
// import { redirect } from "next/navigation";
// import { db } from "./lib/db";
// import bcrypt from "bcryptjs";

// export interface User {
//   id: string;
//   email: string;
//   name: string;
//   role: "ADMIN" | "ORGANIZER" | "USER";
// }

// export interface Session {
//   user: User;
// }

// export async function auth(): Promise<Session | null> {
//   try {
//     const cookieStore = await cookies();
//     const sessionToken = cookieStore.get("session-token")?.value;

//     if (!sessionToken) return null;

//     // Decode the session token (in production, use proper JWT)
//     const userId = sessionToken;
//     const user = await db.user.findUnique({
//       where: { id: userId },
//     });

//     if (!user) return null;

//     return {
//       user: {
//         id: user.id,
//         email: user.email,
//         name: user.name,
//         role: user.role as "ADMIN" | "ORGANIZER" | "USER",
//       },
//     };
//   } catch (error) {
//     return null;
//   }
// }

// export async function signIn(
//   p0: string,
//   credentials: { email: string; password: string }
// ) {
//   try {
//     const user = await db.user.findUnique({
//       where: { email: credentials.email },
//     });

//     if (!user) {
//       throw new Error("Invalid credentials");
//     }

//     const isValidPassword = await bcrypt.compare(
//       credentials.password,
//       String(user.password)
//     );
//     if (!isValidPassword) {
//       throw new Error("Invalid credentials");
//     }

//     // Set session cookie (in production, use proper JWT)
//     const cookieStore = await cookies();
//     cookieStore.set("session-token", user.id, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === "production",
//       sameSite: "lax",
//       maxAge: 60 * 60 * 24 * 7, // 7 days
//     });

//     return { success: true, user };
//   } catch (error) {
//     throw error;
//   }
// }

// export async function signOut(p0: { redirect: boolean }) {
//   const cookieStore = await cookies();
//   cookieStore.delete("session-token");
//   redirect("/auth/login");
// }

// // Mock handlers for API routes compatibility
// export const handlers = {
//   GET: async () => new Response("Auth endpoint", { status: 200 }),
//   POST: async () => new Response("Auth endpoint", { status: 200 }),
// };

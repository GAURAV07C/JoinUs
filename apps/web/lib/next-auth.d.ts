import NextAuth, { DefaultSession, DefaultUser } from "next-auth";
import type { UserRole, UserStatus } from "@/types";

declare module "next-auth" {
  interface User extends DefaultUser {
    role?: UserRole;
    status?: UserStatus;
    college?: string | null;
    department?: string | null;
    year?: string | null;
    phone?: string | null;
    avatar?: string | null;
  }

  interface Session {
    user: {
      id: string;
      role?: UserRole;
      status?: UserStatus;
      college?: string | null;
      department?: string | null;
      year?: string | null;
      phone?: string | null;
      avatar?: string | null;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: UserRole;
    status?: UserStatus;
    college?: string;
    department?: string;
    year?: string;
    phone?: string;
    avatar?: string;
  }
}

import NextAuth, { type NextAuthResult } from "next-auth";

import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@joinUs/database";

import authConfig from "@/lib/auth.config";
import { UserRole, UserStatus } from "@joinUs/validation/types";

async function testprisma() {
  try {
    await prisma.$connect();
    console.log("Database connected successfully!");
  } catch (error) {
    console.error("Database connection failed:", error);
  }
}
testprisma();

export const { handlers, signIn, signOut, auth }: NextAuthResult = NextAuth({
  pages: {
    signIn: "/auth/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role as UserRole | undefined;
        token.status = user.status as UserStatus | undefined;
        token.college = user.college ?? undefined;
        token.department = user.department ?? undefined;
        token.year = user.year ?? undefined;
        token.phone = user.phone ?? undefined;
        token.avatar = user.avatar ?? undefined;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub!;
        session.user.role = token.role as UserRole | undefined;
        session.user.status = token.status as UserStatus | undefined;
        session.user.college = token.college as string | null;
        session.user.department = token.department as string | null;
        session.user.year = token.year as string | null;
        session.user.phone = token.phone as string | null;
        session.user.avatar = token.avatar as string | null;
      }
      return session;
    },
  },
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  ...authConfig,
});

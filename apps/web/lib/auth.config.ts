import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { loginSchema } from "@/lib/validations";
import { getUserByEmail, verifyPassword } from "@/lib/auth-service";

const authConfig: NextAuthConfig = {
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
        role: { label: "Role", type: "text" },
      },
      async authorize(credentials) {
        const validatedFields = loginSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          const user = await getUserByEmail(email);
          if (!user || !user.password) return null;

          // const passwordsMatch = await verifyPassword(password, user?.password);

          if (user.status !== "APPROVED") {
            throw new Error(
              `Account is ${user.status.toLowerCase()}. Please contact admin.`
            );
          }

          return {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            status: user.status,
            college: user.college,
            department: user.department,
            year: user.year,
            phone: user.phone,
            avatar: user.avatar,
          };
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.status = user.status;
        token.college = user.college;
        token.department = user.department;
        token.year = user.year;
        token.phone = user.phone;
        token.avatar = user.avatar;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.sub!;
        session.user.role = token.role as string;
        session.user.status = token.status as string;
        session.user.college = token.college as string;
        session.user.department = token.department as string;
        session.user.year = token.year as string;
        session.user.phone = token.phone as string;
        session.user.avatar = token.avatar as string;
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
  },
};

export default authConfig;
export { authConfig };

import Credentials from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { type AuthConfig } from "@auth/core";
import { loginSchema } from "@joinUs/validation/authTypes";
import { getUserByEmail, verifyPassword } from "@/data/user";

const authConfig = {
  providers: [
    Github({
      clientId: process.env.AUTH_GITHUB_ID!,
      clientSecret: process.env.AUTH_GITHUB_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    Google({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
        role: { label: "Role", type: "text" },
      },
      async authorize(credentials) {
        const validatedFields = loginSchema.safeParse(credentials);
        if (!validatedFields.success) return null;

        const { email, password } = validatedFields.data;

        const user = await getUserByEmail(email);
        if (!user || !user.password) return null;

        const passwordsMatch = await verifyPassword(password, user.password);
        if (!passwordsMatch) return null;

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
      },
    }),
  ],
  trustHost: true,
};

export default authConfig;

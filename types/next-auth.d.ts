import type { DefaultSession } from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      role: string
      status: string
      college?: string
      department?: string
      year?: string
      phone?: string
      avatar?: string
    } & DefaultSession["user"]
  }

  interface User {
    role: string
    status: string
    college?: string
    department?: string
    year?: string
    phone?: string
    avatar?: string
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role: string
    status: string
    college?: string
    department?: string
    year?: string
    phone?: string
    avatar?: string
  }
}

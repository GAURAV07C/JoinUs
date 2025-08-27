import type { User } from "@/types"

export const mockUser: User = {
  id: "user1",
  name: "John Doe",
  email: "john.doe@student.edu",
  phone: "+1234567890",
  avatar: "/placeholder.svg?height=100&width=100",
  password: function (password: string, password1: any): unknown {
    throw new Error("Function not implemented.");
  },
  role: "ADMIN",
  status: "PENDING",
  createdAt: new Date(),
  updatedAt: new Date(),
};

export default mockUser

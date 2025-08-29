import type { User } from "@/types"

export const mockUsers: User[] = [
  {
    id: "user1",
    name: "John Doe",
    email: "john.doe@student.edu",
    phone: "+1234567890",
    avatar: "/placeholder.svg?height=100&width=100",
    role: "USER",
    college: "Tech University",
    department: "Computer Science",
    status: "PENDING",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "org1",
    name: "Sarah Wilson",
    email: "sarah@techclub.edu",
    phone: "+1234567891",
    avatar: "/placeholder.svg?height=100&width=100",
    role: "ORGANIZER",
    college: "Tech University",
    department: "Event Management",
    status: "PENDING",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "admin1",
    name: "Admin User",
    email: "admin@joinus.com",
    phone: "+1234567892",
    avatar: "/placeholder.svg?height=100&width=100",
    role: "ADMIN",
    status: "PENDING",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const getCurrentUser = (): User => {
  // Mock current user - in real app this would come from auth context
  const user = mockUsers[0];
  if (!user) {
    throw new Error("No current user found.");
  }
  return user;
}

export default mockUsers

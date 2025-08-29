import type { User } from "@/types";
import { prisma } from "@joinUs/database";
import bcrypt from "bcryptjs";
import type { UserRole, UserStatus } from "@/types";
export const mockUser: User = {
  id: "user1",
  name: "John Doe",
  email: "john.doe@student.edu",
  phone: "+1234567890",
  avatar: "/placeholder.svg?height=100&width=100",
  role: "ADMIN",
  status: "PENDING",
  createdAt: new Date(),
  updatedAt: new Date(),
};

export default mockUser;

export const getUserById = async (id: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: id },
    });

    return user;
  } catch {
    return null;
  }
};

export const getUserByEmail = async (email: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    return user;
  } catch {
    return null;
  }
};

export async function verifyPassword(password: string, hashedPassword: string) {
  try {
    return await bcrypt.compare(password, hashedPassword);
  } catch (error) {
    console.error("Error verifying password:", error);
    return false;
  }
}


export async function getAllUsers() {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        avatar: true,
        role: true,
        status: true,
        college: true,
        department: true,
        year: true,
        approvedAt: true,
        approvedBy: true,
        rejectionReason: true,
        suspensionReason: true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: { createdAt: "desc" },
    });
    return users;
  } catch (error) {
    console.error("Error fetching all users:", error);
    return [];
  }
}



export async function updateUserStatus(
  userId: string,
  status: UserStatus,
  reason?: string,
  approvedBy?: string
) {
  try {
    const updateData: any = {
      status,
      updatedAt: new Date(),
    };

    if (status === "APPROVED") {
      updateData.approvedAt = new Date();
      updateData.approvedBy = approvedBy;
      updateData.rejectionReason = null;
      updateData.suspensionReason = null;
    } else if (status === "REJECTED") {
      updateData.rejectionReason = reason;
      updateData.approvedAt = null;
      updateData.approvedBy = null;
      updateData.suspensionReason = null;
    } else if (status === "SUSPENDED") {
      updateData.suspensionReason = reason;
    }

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: updateData,
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        avatar: true,
        role: true,
        status: true,
        college: true,
        department: true,
        year: true,
        approvedAt: true,
        approvedBy: true,
        rejectionReason: true,
        suspensionReason: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return updatedUser;
  } catch (error) {
    console.error("Error updating user status:", error);
    return null;
  }
}

export async function getUsersByStatus(status: UserStatus) {
  try {
    const users = await prisma.user.findMany({
      where: { status },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        avatar: true,
        role: true,
        status: true,
        college: true,
        department: true,
        year: true,
        approvedAt: true,
        approvedBy: true,
        rejectionReason: true,
        suspensionReason: true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: { createdAt: "desc" },
    });
    return users;
  } catch (error) {
    console.error("Error fetching users by status:", error);
    return [];
  }
}

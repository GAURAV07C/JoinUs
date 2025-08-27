import { db } from "@/lib/db"
import type { UserRole, UserStatus } from "@/types"
import bcrypt from "bcryptjs"

export async function getUserByEmail(email: string) {
  try {
    const user = await db.user.findUnique({
      where: { email },
    })
    return user
  } catch (error) {
    console.error("Error fetching user by email:", error)
    return null
  }
}

export async function getUserById(id: string) {
  try {
    const user = await db.user.findUnique({
      where: { id },
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
    })
    return user
  } catch (error) {
    console.error("Error fetching user by ID:", error)
    return null
  }
}

export async function createUser(userData: {
  name: string
  email: string
  password: string
  role: UserRole
  college?: string
  department?: string
  year?: string
  phone?: string
}) {
  try {
    // Check if user already exists
    const existingUser = await getUserByEmail(userData.email)
    if (existingUser) {
      throw new Error("User already exists")
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(userData.password, 12)

    // Create new user
    const newUser = await db.user.create({
      data: {
        name: userData.name,
        email: userData.email,
        password: hashedPassword,
        role: userData.role,
        status: userData.role === "ADMIN" ? "APPROVED" : "PENDING",
        college: userData.college,
        department: userData.department,
        year: userData.year,
        phone: userData.phone,
        ...(userData.role === "ADMIN" && {
          approvedAt: new Date(),
          approvedBy: "System",
        }),
      },
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
        createdAt: true,
        updatedAt: true,
      },
    })

    return newUser
  } catch (error) {
    console.error("Error creating user:", error)
    throw error
  }
}

export async function verifyPassword(password: string, hashedPassword: string) {
  try {
    return await bcrypt.compare(password, hashedPassword)
  } catch (error) {
    console.error("Error verifying password:", error)
    return false
  }
}

export async function getAllUsers() {
  try {
    const users = await db.user.findMany({
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
    })
    return users
  } catch (error) {
    console.error("Error fetching all users:", error)
    return []
  }
}

export async function updateUserStatus(userId: string, status: UserStatus, reason?: string, approvedBy?: string) {
  try {
    const updateData: any = {
      status,
      updatedAt: new Date(),
    }

    if (status === "APPROVED") {
      updateData.approvedAt = new Date()
      updateData.approvedBy = approvedBy
      updateData.rejectionReason = null
      updateData.suspensionReason = null
    } else if (status === "REJECTED") {
      updateData.rejectionReason = reason
      updateData.approvedAt = null
      updateData.approvedBy = null
      updateData.suspensionReason = null
    } else if (status === "SUSPENDED") {
      updateData.suspensionReason = reason
    }

    const updatedUser = await db.user.update({
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
    })

    return updatedUser
  } catch (error) {
    console.error("Error updating user status:", error)
    return null
  }
}

export async function getUsersByStatus(status: UserStatus) {
  try {
    const users = await db.user.findMany({
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
    })
    return users
  } catch (error) {
    console.error("Error fetching users by status:", error)
    return []
  }
}

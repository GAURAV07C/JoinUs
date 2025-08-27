// "use server"

// import { auth } from "@/auth"
// import { getAllUsers, getUsersByStatus, updateUserStatus } from "@/lib/auth-service"
// import type { UserStatus } from "@/types"
// import { revalidatePath } from "next/cache"

// export async function getUsersAction() {
//   const session = await auth()

//   if (!session?.user || session.user.role !== "ADMIN") {
//     return { success: false, message: "Unauthorized" }
//   }

//   try {
//     const users = await getAllUsers()
//     return { success: true, users }
//   } catch (error) {
//     return { success: false, message: "Failed to fetch users" }
//   }
// }

// export async function getPendingUsersAction() {
//   const session = await auth()

//   if (!session?.user || session.user.role !== "ADMIN") {
//     return { success: false, message: "Unauthorized" }
//   }

//   try {
//     const users = await getUsersByStatus("PENDING")
//     return { success: true, users }
//   } catch (error) {
//     return { success: false, message: "Failed to fetch pending users" }
//   }
// }

// export async function updateUserStatusAction(userId: string, status: UserStatus, reason?: string) {
//   const session = await auth()

//   if (!session?.user || session.user.role !== "ADMIN") {
//     return { success: false, message: "Unauthorized" }
//   }

//   try {
//     const updatedUser = await updateUserStatus(userId, status, reason, session.user.name)

//     if (!updatedUser) {
//       return { success: false, message: "User not found" }
//     }

//     revalidatePath("/dashboard/admin/approvals")
//     revalidatePath("/dashboard/admin/users")

//     return { success: true, message: `User ${status.toLowerCase()} successfully`, user: updatedUser }
//   } catch (error) {
//     return { success: false, message: "Failed to update user status" }
//   }
// }

// export async function approveUserAction(userId: string) {
//   return updateUserStatusAction(userId, "APPROVED")
// }

// export async function rejectUserAction(userId: string, reason: string) {
//   return updateUserStatusAction(userId, "REJECTED", reason)
// }

// export async function suspendUserAction(userId: string, reason: string) {
//   return updateUserStatusAction(userId, "SUSPENDED", reason)
// }

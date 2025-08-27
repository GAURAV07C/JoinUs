import { create } from "zustand"
import type { User, UserStatus } from "@/types"

interface UsersState {
  users: User[]
  pendingUsers: User[]
  isLoading: boolean
  error: string | null

  // Actions
  setUsers: (users: User[]) => void
  setPendingUsers: (users: User[]) => void
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
  updateUserStatus: (userId: string, status: UserStatus, reason?: string) => void
  removeUser: (userId: string) => void
  addUser: (user: User) => void
}

export const useUsersStore = create<UsersState>((set, get) => ({
  users: [],
  pendingUsers: [],
  isLoading: false,
  error: null,

  setUsers: (users) => set({ users }),

  setPendingUsers: (pendingUsers) => set({ pendingUsers }),

  setLoading: (isLoading) => set({ isLoading }),

  setError: (error) => set({ error }),

  updateUserStatus: (userId, status, reason) => {
    set((state) => ({
      users: state.users.map((user) =>
        user.id === userId
          ? {
              ...user,
              status,
              updatedAt: new Date(),
              ...(status === "APPROVED" && {
                approvedAt: new Date(),
                rejectionReason: undefined,
                suspensionReason: undefined,
              }),
              ...(status === "REJECTED" && {
                rejectionReason: reason,
                approvedAt: undefined,
                suspensionReason: undefined,
              }),
              ...(status === "SUSPENDED" && {
                suspensionReason: reason,
              }),
            }
          : user,
      ),
      pendingUsers: state.pendingUsers.filter((user) => user.id !== userId),
    }))
  },

  removeUser: (userId) => {
    set((state) => ({
      users: state.users.filter((user) => user.id !== userId),
      pendingUsers: state.pendingUsers.filter((user) => user.id !== userId),
    }))
  },

  addUser: (user) => {
    set((state) => ({
      users: [...state.users, user],
      ...(user.status === "PENDING" && {
        pendingUsers: [...state.pendingUsers, user],
      }),
    }))
  },
}))

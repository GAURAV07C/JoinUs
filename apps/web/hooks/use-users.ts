import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { getUsersAction, getPendingUsersAction, updateUserStatusAction } from "@/actions/users"
import { useUsersStore } from "@/stores/users-store"
import { toast } from "sonner"
import type { UserStatus } from "@/types"

export const USERS_QUERY_KEY = "users"
export const PENDING_USERS_QUERY_KEY = "pending-users"

export function useUsers() {
  const setUsers = useUsersStore((state) => state.setUsers)
  const setLoading = useUsersStore((state) => state.setLoading)
  const setError = useUsersStore((state) => state.setError)

  return useQuery({
    queryKey: [USERS_QUERY_KEY],
    queryFn: async () => {
      setLoading(true)
      const result = await getUsersAction()

      if (!result.success) {
        setError(result.message)
        throw new Error(result.message)
      }

      setUsers(result.users)
      setError(null)
      return result.users
    },
    onError: (error) => {
      setError(error instanceof Error ? error.message : "Failed to fetch users")
    },
    onSettled: () => {
      setLoading(false)
    },
  })
}

export function usePendingUsers() {
  const setPendingUsers = useUsersStore((state) => state.setPendingUsers)
  const setLoading = useUsersStore((state) => state.setLoading)
  const setError = useUsersStore((state) => state.setError)

  return useQuery({
    queryKey: [PENDING_USERS_QUERY_KEY],
    queryFn: async () => {
      setLoading(true)
      const result = await getPendingUsersAction()

      if (!result.success) {
        setError(result.message)
        throw new Error(result.message)
      }

      setPendingUsers(result.users)
      setError(null)
      return result.users
    },
    onError: (error) => {
      setError(error instanceof Error ? error.message : "Failed to fetch pending users")
    },
    onSettled: () => {
      setLoading(false)
    },
  })
}

export function useUpdateUserStatus() {
  const queryClient = useQueryClient()
  const updateUserStatus = useUsersStore((state) => state.updateUserStatus)

  return useMutation({
    mutationFn: async ({ userId, status, reason }: { userId: string; status: UserStatus; reason?: string }) => {
      const result = await updateUserStatusAction(userId, status, reason)

      if (!result.success) {
        throw new Error(result.message)
      }

      return result
    },
    onSuccess: (data, variables) => {
      updateUserStatus(variables.userId, variables.status, variables.reason)
      queryClient.invalidateQueries({ queryKey: [USERS_QUERY_KEY] })
      queryClient.invalidateQueries({ queryKey: [PENDING_USERS_QUERY_KEY] })
      toast.success(data.message)
    },
    onError: (error) => {
      toast.error(error instanceof Error ? error.message : "Failed to update user status")
    },
  })
}

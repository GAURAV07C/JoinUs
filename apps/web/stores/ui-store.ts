import { create } from "zustand"

interface UIState {
  // Modal states
  isCreateEventModalOpen: boolean
  isEditEventModalOpen: boolean
  isDeleteEventModalOpen: boolean
  isUserApprovalModalOpen: boolean

  // Loading states
  isSubmitting: boolean
  isDeleting: boolean

  // Selected items
  selectedEventId: string | null
  selectedUserId: string | null

  // Sidebar state
  isSidebarOpen: boolean

  // Toast notifications
  toasts: Array<{
    id: string
    type: "success" | "error" | "warning" | "info"
    message: string
    duration?: number
  }>

  // Actions
  openCreateEventModal: () => void
  closeCreateEventModal: () => void
  openEditEventModal: (eventId: string) => void
  closeEditEventModal: () => void
  openDeleteEventModal: (eventId: string) => void
  closeDeleteEventModal: () => void
  openUserApprovalModal: (userId: string) => void
  closeUserApprovalModal: () => void

  setSubmitting: (submitting: boolean) => void
  setDeleting: (deleting: boolean) => void

  toggleSidebar: () => void
  setSidebarOpen: (open: boolean) => void

  addToast: (toast: Omit<UIState["toasts"][0], "id">) => void
  removeToast: (id: string) => void
  clearToasts: () => void
}

export const useUIStore = create<UIState>((set, get) => ({
  // Modal states
  isCreateEventModalOpen: false,
  isEditEventModalOpen: false,
  isDeleteEventModalOpen: false,
  isUserApprovalModalOpen: false,

  // Loading states
  isSubmitting: false,
  isDeleting: false,

  // Selected items
  selectedEventId: null,
  selectedUserId: null,

  // Sidebar state
  isSidebarOpen: false,

  // Toast notifications
  toasts: [],

  // Modal actions
  openCreateEventModal: () => set({ isCreateEventModalOpen: true }),
  closeCreateEventModal: () => set({ isCreateEventModalOpen: false }),

  openEditEventModal: (eventId) =>
    set({
      isEditEventModalOpen: true,
      selectedEventId: eventId,
    }),
  closeEditEventModal: () =>
    set({
      isEditEventModalOpen: false,
      selectedEventId: null,
    }),

  openDeleteEventModal: (eventId) =>
    set({
      isDeleteEventModalOpen: true,
      selectedEventId: eventId,
    }),
  closeDeleteEventModal: () =>
    set({
      isDeleteEventModalOpen: false,
      selectedEventId: null,
    }),

  openUserApprovalModal: (userId) =>
    set({
      isUserApprovalModalOpen: true,
      selectedUserId: userId,
    }),
  closeUserApprovalModal: () =>
    set({
      isUserApprovalModalOpen: false,
      selectedUserId: null,
    }),

  // Loading actions
  setSubmitting: (isSubmitting) => set({ isSubmitting }),
  setDeleting: (isDeleting) => set({ isDeleting }),

  // Sidebar actions
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  setSidebarOpen: (isSidebarOpen) => set({ isSidebarOpen }),

  // Toast actions
  addToast: (toast) => {
    const id = Math.random().toString(36).substr(2, 9)
    set((state) => ({
      toasts: [...state.toasts, { ...toast, id }],
    }))

    // Auto-remove toast after duration
    const duration = toast.duration || 5000
    setTimeout(() => {
      get().removeToast(id)
    }, duration)
  },

  removeToast: (id) =>
    set((state) => ({
      toasts: state.toasts.filter((toast) => toast.id !== id),
    })),

  clearToasts: () => set({ toasts: [] }),
}))

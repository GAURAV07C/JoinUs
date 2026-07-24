import { create } from "zustand"
import type { EventRegistration } from "@/types"

interface RegistrationsState {
  registrations: EventRegistration[]
  userRegistrations: EventRegistration[]
  isLoading: boolean
  error: string | null

  // Actions
  setRegistrations: (registrations: EventRegistration[]) => void
  setUserRegistrations: (registrations: EventRegistration[]) => void
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
  addRegistration: (registration: EventRegistration) => void
  updateRegistration: (id: string, updates: Partial<EventRegistration>) => void
  removeRegistration: (id: string) => void
  markAttendance: (id: string) => void
}

export const useRegistrationsStore = create<RegistrationsState>((set, get) => ({
  registrations: [],
  userRegistrations: [],
  isLoading: false,
  error: null,

  setRegistrations: (registrations) => set({ registrations }),

  setUserRegistrations: (userRegistrations) => set({ userRegistrations }),

  setLoading: (isLoading) => set({ isLoading }),

  setError: (error) => set({ error }),

  addRegistration: (registration) => {
    set((state) => ({
      registrations: [...state.registrations, registration],
      userRegistrations: [...state.userRegistrations, registration],
    }))
  },

  updateRegistration: (id, updates) => {
    set((state) => ({
      registrations: state.registrations.map((reg) => (reg.id === id ? { ...reg, ...updates } : reg)),
      userRegistrations: state.userRegistrations.map((reg) => (reg.id === id ? { ...reg, ...updates } : reg)),
    }))
  },

  removeRegistration: (id) => {
    set((state) => ({
      registrations: state.registrations.filter((reg) => reg.id !== id),
      userRegistrations: state.userRegistrations.filter((reg) => reg.id !== id),
    }))
  },

  markAttendance: (id) => {
    get().updateRegistration(id, {
      status: "ATTENDED",
      attendedAt: new Date(),
    })
  },
}))

// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
// import {
//   getEventsAction,
//   getEventByIdAction,
//   createEventAction,
//   updateEventAction,
//   deleteEventAction,
// } from "@/actions/events"
// import { useEventsStore } from "@/stores/events-store"
// import { toast } from "sonner"

// export const EVENTS_QUERY_KEY = "events"

// export function useEvents() {
//   const setEvents = useEventsStore((state) => state.setEvents)
//   const setLoading = useEventsStore((state) => state.setLoading)
//   const setError = useEventsStore((state) => state.setError)

//   return useQuery({
//     queryKey: [EVENTS_QUERY_KEY],
//     queryFn: async () => {
//       setLoading(true)
//       const result = await getEventsAction()

//       if (!result.success) {
//         setError(result.message ?? null)
//         throw new Error(result.message)
//       }

//       setEvents(result.events)
//       setError(null)
//       return result.events
//     },
//     // Error and loading state are handled inside queryFn
//   })
// }

// export function useEvent(id: string) {
//   return useQuery({
//     queryKey: [EVENTS_QUERY_KEY, id],
//     queryFn: async () => {
//       const result = await getEventByIdAction(id)

//       if (!result.success) {
//         throw new Error(result.message)
//       }

//       return result.event
//     },
//     enabled: !!id,
//   })
// }

// export function useCreateEvent() {
//   const queryClient = useQueryClient()

//   return useMutation({
//     mutationFn: async (formData: FormData) => {
//       const result = await createEventAction(null, formData)

//       if (!result.success) {
//         throw new Error(result.message)
//       }

//       return result
//     },
//     onSuccess: (data) => {
//       queryClient.invalidateQueries({ queryKey: [EVENTS_QUERY_KEY] })
//       toast.success(data.message)
//     },
//     onError: (error) => {
//       toast.error(error instanceof Error ? error.message : "Failed to create event")
//     },
//   })
// }

// export function useUpdateEvent() {
//   const queryClient = useQueryClient()

//   return useMutation({
//     mutationFn: async ({ eventId, formData }: { eventId: string; formData: FormData }) => {
//       const result = await updateEventAction(eventId, null, formData)

//       if (!result.success) {
//         throw new Error(result.message)
//       }

//       return result
//     },
//     onSuccess: (data, variables) => {
//       queryClient.invalidateQueries({ queryKey: [EVENTS_QUERY_KEY] })
//       queryClient.invalidateQueries({ queryKey: [EVENTS_QUERY_KEY, variables.eventId] })
//       toast.success(data.message)
//     },
//     onError: (error) => {
//       toast.error(error instanceof Error ? error.message : "Failed to update event")
//     },
//   })
// }

// export function useDeleteEvent() {
//   const queryClient = useQueryClient()

//   return useMutation({
//     mutationFn: async (eventId: string) => {
//       const result = await deleteEventAction(eventId)

//       if (!result.success) {
//         throw new Error(result.message)
//       }

//       return result
//     },
//     onSuccess: (data) => {
//       queryClient.invalidateQueries({ queryKey: [EVENTS_QUERY_KEY] })
//       toast.success(data.message)
//     },
//     onError: (error) => {
//       toast.error(error instanceof Error ? error.message : "Failed to delete event")
//     },
//   })
// }

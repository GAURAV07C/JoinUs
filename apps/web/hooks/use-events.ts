import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import {
 
  getEventByIdAction,
  createEventAction,
  updateEventAction,
  updateEventStatusAction,
  deleteEventAction,
  getEventsAction,
} from "@/actions/events"
import { useEventsStore } from "@/stores/events-store"
import { toast } from "sonner"
import { EventStatus } from "@/types"

export const EVENTS_QUERY_KEY = "events"

export function useEvents() {
  const setEvents = useEventsStore((state) => state.setEvents)
  const setLoading = useEventsStore((state) => state.setLoading)
  const setError = useEventsStore((state) => state.setError)

  return useQuery({
    queryKey: [EVENTS_QUERY_KEY],
    queryFn: async () => {
      setLoading(true)
      try {
        const result = await getEventsAction()

        if (!result.success) {
          setError(result.message ?? null)
          throw new Error(result.message)
        }

        if (result.events) {
          setEvents(result.events as any)
          setError(null)
        }
        return result.events
      } finally {
        setLoading(false)
      }
    },
    // Error and loading state are handled inside queryFn
  })
}

export function useEvent(id: string) {
  return useQuery({
    queryKey: [EVENTS_QUERY_KEY, id],
    queryFn: async () => {
      const result = await getEventByIdAction(id)

      if (!result.success) {
        throw new Error(result.message)
      }

      return result.event
    },
    enabled: !!id,
  })
}

export function useCreateEvent() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (formData: FormData) => {
      const result = await createEventAction(formData)

      if (!result.success) {
        throw new Error(result.message)
      }

      return result
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: [EVENTS_QUERY_KEY] })
      toast.success(data.message)
    },
    onError: (error) => {
      toast.error(error instanceof Error ? error.message : "Failed to create event")
    },
  })
}

export function useUpdateEvent() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({ eventId, formData }: { eventId: string; formData: FormData }) => {
      const result = await updateEventAction(eventId, formData)

      if (!result.success) {
        throw new Error(result.message)
      }

      return result
    },
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: [EVENTS_QUERY_KEY] })
      queryClient.invalidateQueries({ queryKey: [EVENTS_QUERY_KEY, variables.eventId] })
      toast.success(data.message)
    },
    onError: (error) => {
      toast.error(error instanceof Error ? error.message : "Failed to update event")
    },
  })
}

export function useUpdateEventStatus() {
   const queryClient = useQueryClient();

   return useMutation({
     mutationFn: async ({
       eventId,
       status,
       reason,
     }: {
       eventId: string;
       status: EventStatus;
       reason?: string;
     }) => {
       const result = await updateEventStatusAction(eventId, status, reason);

       if (!result.success) {
         throw new Error(result.message);
       }

       return result;
     },
     onSuccess: (data, variables) => {
       queryClient.invalidateQueries({ queryKey: [EVENTS_QUERY_KEY] });
       queryClient.invalidateQueries({
         queryKey: [EVENTS_QUERY_KEY, variables.eventId],
       });
       toast.success(data.message);
     },
     onError: (error) => {
       toast.error(
         error instanceof Error ? error.message : "Failed to update event"
       );
     },
   });

}

export function useDeleteEvent() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (eventId: string) => {
      const result = await deleteEventAction(eventId)

      if (!result.success) {
        throw new Error(result.message)
      }

      return result
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: [EVENTS_QUERY_KEY] })
      toast.success(data.message)
    },
    onError: (error) => {
      toast.error(error instanceof Error ? error.message : "Failed to delete event")
    },
  })
}

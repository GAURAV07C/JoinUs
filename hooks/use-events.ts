import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useEventsStore } from "@/stores/events-store";
import type { EventStatus } from "@/types";

const API_BASE = "/api/eoptimise";

export const EVENTS_QUERY_KEY = "events";

export function useEvents() {
  const setEvents = useEventsStore((state) => state.setEvents);
  const setLoading = useEventsStore((state) => state.setLoading);
  const setError = useEventsStore((state) => state.setError);

  return useQuery({
    queryKey: [EVENTS_QUERY_KEY],
    queryFn: async () => {
      setLoading(true);
      try {
        const res = await fetch(API_BASE);
        const data = await res.json();

        if (!data.success) {
          setError(data.message ?? null);
          throw new Error(data.message);
        }

        if (data.events) {
          setEvents(data.events as any);
          setError(null);
        }
        return data.events;
      } finally {
        setLoading(false);
      }
    },
  });
}

export function useEvent(id: string) {
  return useQuery({
    queryKey: [EVENTS_QUERY_KEY, id],
    queryFn: async () => {
      const res = await fetch(`${API_BASE}?id=${encodeURIComponent(id)}`);
      const data = await res.json();

      if (!data.success) {
        throw new Error(data.message);
      }

      return data.event;
    },
    enabled: !!id,
  });
}

export function useCreateEvent() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (eventData: Record<string, any>) => {
      const formData = new FormData();
      Object.entries(eventData).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          formData.append(key, String(value));
        }
      });

      const res = await fetch("/api/events", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (!data.success) {
        throw new Error(data.message);
      }

      return data;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: [EVENTS_QUERY_KEY] });
      toast.success(data.message);
    },
    onError: (error) => {
      toast.error(error instanceof Error ? error.message : "Failed to create event");
    },
  });
}

export function useUpdateEvent() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ eventId, eventData }: { eventId: string; eventData: Record<string, any> }) => {
      const res = await fetch(`/api/events/${encodeURIComponent(eventId)}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(eventData),
      });
      const data = await res.json();

      if (!data.success) {
        throw new Error(data.message);
      }

      return data;
    },
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: [EVENTS_QUERY_KEY] });
      queryClient.invalidateQueries({ queryKey: [EVENTS_QUERY_KEY, variables.eventId] });
      toast.success(data.message);
    },
    onError: (error) => {
      toast.error(error instanceof Error ? error.message : "Failed to update event");
    },
  });
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
      const res = await fetch(`/api/events?action=updateEventStatus`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ eventId, status, reason }),
      });
      const data = await res.json();

      if (!data.success) {
        throw new Error(data.message);
      }

      return data;
    },
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: [EVENTS_QUERY_KEY] });
      queryClient.invalidateQueries({ queryKey: [EVENTS_QUERY_KEY, variables.eventId] });
      toast.success(data.message);
    },
    onError: (error) => {
      toast.error(error instanceof Error ? error.message : "Failed to update event");
    },
  });
}

export function useDeleteEvent() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (eventId: string) => {
      const res = await fetch(`/api/events?action=delete`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ eventId }),
      });
      const data = await res.json();

      if (!data.success) {
        throw new Error(data.message);
      }

      return data;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: [EVENTS_QUERY_KEY] });
      toast.success(data.message);
    },
    onError: (error) => {
      toast.error(error instanceof Error ? error.message : "Failed to delete event");
    },
  });
}

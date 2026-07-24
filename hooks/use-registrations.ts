import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  registerForEventAction,
  cancelRegistrationAction,
  getUserRegistrationsAction,
  getEventRegistrationsAction,
  markAttendanceAction,
  cheakRegistrationAction,
} from "@/actions/registrations";
import { useRegistrationsStore } from "@/stores/registrations-store";
import { toast } from "sonner";

export const REGISTRATIONS_QUERY_KEY = "registrations";
export const USER_REGISTRATIONS_QUERY_KEY = "user-registrations";

export function useUserRegistrations() {
  const setUserRegistrations = useRegistrationsStore(
    (state) => state.setUserRegistrations
  );
  const setLoading = useRegistrationsStore((state) => state.setLoading);
  const setError = useRegistrationsStore((state) => state.setError);

  return useQuery({
    queryKey: [USER_REGISTRATIONS_QUERY_KEY],
    queryFn: async () => {
      setLoading(true);
      const result = await getUserRegistrationsAction();

      if (!result.success) {
        setError(result.message ?? null);
        throw new Error(result.message ?? "Unknown error");
      }

      setUserRegistrations(result.registrations as any);
      setError(null);
      return result.registrations ? result.registrations as any : [];
    },
  });
}

export function useEventRegistrations(eventId: string) {
  return useQuery({
    queryKey: [REGISTRATIONS_QUERY_KEY, eventId],
    queryFn: async () => {
      const result = await getEventRegistrationsAction(eventId);

      if (!result.success) {
        throw new Error(result.message ?? "Unknown error");
      }

      return result.registrations;
    },
    enabled: !!eventId,
  });
}

export function useRegisterForEvent() {
  const queryClient = useQueryClient();
  const addRegistration = useRegistrationsStore(
    (state) => state.addRegistration
  );

  return useMutation({
    mutationFn: async (eventId: string) => {
      const result = await registerForEventAction(eventId);

      if (!result.success) {
        throw new Error(result.message ?? "Unknown error");
      }

      return result;
    },
    onSuccess: (data, eventId) => {
      if (data.registration) {
        addRegistration(data.registration as any);
      }
      queryClient.invalidateQueries({
        queryKey: [USER_REGISTRATIONS_QUERY_KEY],
      });
      queryClient.invalidateQueries({
        queryKey: [REGISTRATIONS_QUERY_KEY, eventId],
      });
      toast.success(data.message);
    },
    onError: (error) => {
      toast.error(
        error instanceof Error ? error.message : "Failed to register for event"
      );
    },
  });
}

export function useCancelRegistration() {
  const queryClient = useQueryClient();
  const updateRegistration = useRegistrationsStore(
    (state) => state.updateRegistration
  );

  return useMutation({
    mutationFn: async (registrationId: string) => {
      const result = await cancelRegistrationAction(registrationId);

      if (!result.success) {
        throw new Error(result.message ?? "Unknown error");
      }

      return result;
    },
    onSuccess: (data, registrationId) => {
      updateRegistration(registrationId, { status: "CANCELLED" });
      queryClient.invalidateQueries({
        queryKey: [USER_REGISTRATIONS_QUERY_KEY],
      });
      toast.success(data.message);
    },
    onError: (error) => {
      toast.error(
        error instanceof Error ? error.message : "Failed to cancel registration"
      );
    },
  });
}

export function useMarkAttendance() {
  const queryClient = useQueryClient();
  const markAttendance = useRegistrationsStore((state) => state.markAttendance);

  return useMutation({
    mutationFn: async (registrationId: string) => {
      const result = await markAttendanceAction(registrationId);

      if (!result.success) {
        throw new Error(result.message ?? "Unknown error");
      }

      return result;
    },
    onSuccess: (data, registrationId) => {
      markAttendance(registrationId);
      queryClient.invalidateQueries({ queryKey: [REGISTRATIONS_QUERY_KEY] });
      toast.success(data.message);
    },
    onError: (error) => {
      toast.error(
        error instanceof Error ? error.message : "Failed to mark attendance"
      );
    },
  });
}


export function useCheakRegistration(eventId: string) {
  return useQuery({
    queryKey: ["check-registration", eventId],
    queryFn: async () => {
      const result = await cheakRegistrationAction(eventId);

      if (!result.success) {
        throw new Error(result.message ?? "Failed to check registration");
      }

      return result; 
    },
    enabled: !!eventId, // only run if eventId is provided
  });
}
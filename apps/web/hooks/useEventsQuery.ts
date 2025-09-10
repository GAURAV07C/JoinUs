"use client";

import { useState, useEffect } from "react";

import { getEventByIdAction, getEventsAction } from "@/actions/events";
import { getUserRegistrationsAction } from "@/actions/registrations";

// Using any to avoid type mismatch with multiple event shapes in codebase

export function useEventsQuery() {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchEvents = async () => {
    try {
      setIsLoading(true);
      const result = await getEventsAction();
      
      if (result.success) {
        setData(result.events || []);
        setError(null);
      } else {
        setError(result.message ?? "Failed to fetch events");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch events");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return { data, isLoading, error, refetch: fetchEvents };
}

export function useEventQuery(id: string) {
  const [data, setData] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchEvent = async () => {
    try {
      setIsLoading(true);
      const event = await getEventByIdAction(id);

      setData(event);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch event");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchEvent();
    }
  }, [id]);

  return { data, isLoading, error, refetch: fetchEvent };
}

export function useUserRegistrationsQuery(userId: string) {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRegistrations = async () => {
    try {
      setIsLoading(true);
      const result = await getUserRegistrationsAction();
      if (result.success) {
        setData(result.registrations || []);
        setError(null);
      } else {
        setError(result.message ?? "Failed to fetch registrations");
      }
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to fetch registrations"
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchRegistrations();
    }
  }, [userId]);

  return { data, isLoading, error, refetch: fetchRegistrations };
}

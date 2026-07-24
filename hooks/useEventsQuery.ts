"use client";

import { useState, useEffect } from "react";

const API_BASE = "/api/eoptimise";

export function useEventsQuery() {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchEvents = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(API_BASE);
      const result = await res.json();

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
      const res = await fetch(`${API_BASE}?id=${encodeURIComponent(id)}`);
      const result = await res.json();
      setData(result);
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
      const res = await fetch("/api/registrations", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await res.json();

      if (result.success) {
        setData(result.registrations || []);
        setError(null);
      } else {
        setError(result.message ?? "Failed to fetch registrations");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch registrations");
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

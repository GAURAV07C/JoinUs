import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import type { Event } from "@/types";

interface EventsState {
  events: Event[];
  filteredEvents: Event[];
  isLoading: boolean;
  error: string | null;

  // Filters
  searchQuery: string;
  typeFilter: string;
  paidFilter: string;
  locationFilter: string;
  dateFilter: Date | undefined;

  // Actions
  setEvents: (events: Event[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  setSearchQuery: (query: string) => void;
  setTypeFilter: (type: string) => void;
  setPaidFilter: (paid: string) => void;
  setLocationFilter: (location: string) => void;
  setDateFilter: (date: Date | undefined) => void;
  clearFilters: () => void;
  addEvent: (event: Event) => void;
  updateEvent: (id: string, updates: Partial<Event>) => void;
  removeEvent: (id: string) => void;
  applyFilters: () => void;
}

export const useEventsStore = create<EventsState>()(
  subscribeWithSelector((set, get) => ({
    events: [],
    filteredEvents: [],
    isLoading: false,
    error: null,

    // Initial filter states
    searchQuery: "",
    typeFilter: "all",
    paidFilter: "all",
    locationFilter: "all",
    dateFilter: undefined,

    setEvents: (events) => {
      set({ events });
      get().applyFilters();
    },

    setLoading: (isLoading) => set({ isLoading }),

    setError: (error) => set({ error }),

    setSearchQuery: (searchQuery) => {
      set({ searchQuery });
      get().applyFilters();
    },

    setTypeFilter: (typeFilter) => {
      set({ typeFilter });
      get().applyFilters();
    },

    setPaidFilter: (paidFilter) => {
      set({ paidFilter });
      get().applyFilters();
    },

    setLocationFilter: (locationFilter) => {
      set({ locationFilter });
      get().applyFilters();
    },

    setDateFilter: (dateFilter) => {
      set({ dateFilter });
      get().applyFilters();
    },

    clearFilters: () => {
      set({
        searchQuery: "",
        typeFilter: "all",
        paidFilter: "all",
        locationFilter: "all",
        dateFilter: undefined,
      });
      get().applyFilters();
    },

    addEvent: (event) => {
      set((state) => ({ events: [...state.events, event] }));
      get().applyFilters();
    },

    updateEvent: (id, updates) => {
      set((state) => ({
        events: state.events.map((event) =>
          event.id === id ? { ...event, ...updates } : event
        ),
      }));
      get().applyFilters();
    },

    removeEvent: (id) => {
      set((state) => ({
        events: state.events.filter((event) => event.id !== id),
      }));
      get().applyFilters();
    },

    applyFilters: () => {
      const {
        events,
        searchQuery,
        typeFilter,
        paidFilter,
        locationFilter,
        dateFilter,
      } = get();

      let filtered = [...events];

      // Apply search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(
          (event) =>
            event.title?.toLowerCase().includes(query) ||
            event.description?.toLowerCase().includes(query) ||
            event.organizer?.toLowerCase().includes(query) ||
            event.tags?.some((tag) => tag.toLowerCase().includes(query))
        );
      }

      // Apply type filter
      if (typeFilter !== "all") {
        filtered = filtered.filter((event) => event.category === typeFilter);
      }

      // Apply paid filter
      if (paidFilter !== "all") {
        filtered = filtered.filter((event) => {
          const isPaid = event.price > 0;
          return paidFilter === "paid" ? isPaid : !isPaid;
        });
      }

      // Apply location filter
      if (locationFilter !== "all") {
        filtered = filtered.filter((event) => event.venue === locationFilter);
      }

      // Apply date filter
      if (dateFilter) {
        filtered = filtered.filter((event) => {
          const eventDate = new Date(event.date);
          return eventDate.toDateString() === dateFilter.toDateString();
        });
      }

      set({ filteredEvents: filtered });
    },
  }))
);

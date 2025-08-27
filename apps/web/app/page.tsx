"use client";

import { useState, useEffect, useMemo } from "react";
import { PageLayout } from "@/components/page-layout";
import { ErrorState } from "@/components/error-state";
import { HeroSection } from "@/components/hero-section";
import { WhyJoinUsSection } from "@/components/why-joinus-section";
// import { EventsSection } from "@/components/events-section";
// import { useEvents } from "@/hooks/use-events";
// import type { Event } from "@/types";

import type { FC } from "react";

export default function HomePage() {
  // const { data: events, isLoading, error } = useEvents();
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [paidFilter, setPaidFilter] = useState<string>("all");
  const [locationFilter, setLocationFilter] = useState<string>("all");
  const [dateFilter, setDateFilter] = useState<Date | undefined>();

  // Debounce search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchQuery);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  // const filteredEvents = useMemo(() => {
  //   if (!events || !Array.isArray(events)) return [];

  //   return events.filter((event: Event) => {
  //     const searchTerm = debouncedSearch.toLowerCase();
  //     const matchesSearch =
  //       !searchTerm ||
  //       (event.title && event.title.toLowerCase().includes(searchTerm)) ||
  //       (event.description &&
  //         event.description.toLowerCase().includes(searchTerm)) ||
  //       (event.tags &&
  //         Array.isArray(event.tags) &&
  //         event.tags.some(
  //           (tag) => tag && tag.toLowerCase().includes(searchTerm)
  //         )) ||
  //       (event.organizerName &&
  //         event.organizerName.toLowerCase().includes(searchTerm));

  //     const matchesType = typeFilter === "all" || event.category === typeFilter;
  //     const matchesPaid =
  //       paidFilter === "all" ||
  //       (paidFilter === "free" && event.price === 0) ||
  //       (paidFilter === "paid" && event.price > 0);

  //     const matchesLocation =
  //       locationFilter === "all" ||
  //       (event.venue && event.venue.includes(locationFilter));

  //     const matchesDate =
  //       !dateFilter ||
  //       (event.date &&
  //         new Date(event.date).toDateString() === dateFilter.toDateString());

  //     return (
  //       matchesSearch &&
  //       matchesType &&
  //       matchesPaid &&
  //       matchesLocation &&
  //       matchesDate
  //     );
  //   });
  // }, [
  //   events,
  //   debouncedSearch,
  //   typeFilter,
  //   paidFilter,
  //   locationFilter,
  //   dateFilter,
  // ]);

  // const cities = useMemo(() => {
  //   if (!events || !Array.isArray(events)) return [];
  //   return Array.from(
  //     new Set(events.map((event) => event.venue?.split(",")[0]).filter(Boolean))
  //   );
  // }, [events]);

  const clearAllFilters = () => {
    setTypeFilter("all");
    setPaidFilter("all");
    setLocationFilter("all");
    setDateFilter(undefined);
    setSearchQuery("");
  };

  const hasActiveFilters =
    typeFilter !== "all" ||
    paidFilter !== "all" ||
    locationFilter !== "all" ||
    !!dateFilter ||
    !!searchQuery;

  // if (error) {
  //   return <ErrorState />;
  // }

  return (
    <PageLayout>
      {/* Hero Section */}
      <HeroSection />

      {/* <EventsSection
        events={events}
        isLoading={isLoading}
        searchQuery={searchQuery}
        debouncedSearch={debouncedSearch}
        typeFilter={typeFilter}
        paidFilter={paidFilter}
        locationFilter={locationFilter}
        dateFilter={dateFilter}
        filteredEvents={filteredEvents}
        cities={cities}
        hasActiveFilters={hasActiveFilters}
        onSearchChange={setSearchQuery}
        onTypeChange={setTypeFilter}
        onPaidChange={setPaidFilter}
        onLocationChange={setLocationFilter}
        onDateChange={setDateFilter}
        onClearAllFilters={clearAllFilters}
      /> */}

      {/* Why JoinUs Section */}
      <WhyJoinUsSection />
    </PageLayout>
  );
}

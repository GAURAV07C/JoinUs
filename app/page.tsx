"use client";

import { useState, useEffect, useMemo, lazy, Suspense } from "react";
import { PageLayout } from "@/components/page-layout";
import { ErrorState } from "@/components/error-state";
import { useEvents } from "@/hooks/use-events";

const HeroSection = lazy(() => import("@/components/hero-section").then(mod => ({ default: mod.HeroSection })));
const WhyJoinUsSection = lazy(() => import("@/components/why-joinus-section").then(mod => ({ default: mod.WhyJoinUsSection })));
const EventsSection = lazy(() => import("@/components/events-section").then(mod => ({ default: mod.EventsSection })));

function LoadingFallback() {
  return (
    <div className="flex items-center justify-center h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
    </div>
  );
}

export default function HomePage() {
  const { data: events, isLoading, error } = useEvents();
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [paidFilter, setPaidFilter] = useState<string>("all");
  const [locationFilter, setLocationFilter] = useState<string>("all");
  const [dateFilter, setDateFilter] = useState<Date | undefined>();

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchQuery);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const filteredEvents = useMemo(() => {
    if (!events || !Array.isArray(events)) return [];

    return events.filter((event: any) => {
      if (!event) return false;
      if (event.status !== "PUBLISHED") return false;

      const searchTerm = debouncedSearch.toLowerCase();
      const matchesSearch =
        !searchTerm ||
        (event.name && event.name.toLowerCase().includes(searchTerm)) ||
        (event.description && event.description.toLowerCase().includes(searchTerm)) ||
        (event.tags && Array.isArray(event.tags) && event.tags.some((tag: string) => tag && tag.toLowerCase().includes(searchTerm))) ||
        (event.organizer && event.organizer.name && event.organizer.name.toLowerCase().includes(searchTerm));

      const matchesType = typeFilter === "all" || event.type === typeFilter;
      const matchesPaid = paidFilter === "all" || (paidFilter === "free" && !event.isPaid) || (paidFilter === "paid" && event.isPaid);
      const matchesLocation = locationFilter === "all" || (event.city && event.city.toLowerCase() === locationFilter.toLowerCase());
      const matchesDate = !dateFilter || (event.date && new Date(event.date).toDateString() === dateFilter.toDateString());

      return matchesSearch && matchesType && matchesPaid && matchesLocation && matchesDate;
    });
  }, [events, debouncedSearch, typeFilter, paidFilter, locationFilter, dateFilter]);

  const cities = useMemo(() => {
    if (!events || !Array.isArray(events)) return [];
    return Array.from(new Set(events.map((event) => event.city).filter(Boolean)));
  }, [events]);

  const clearAllFilters = () => {
    setTypeFilter("all");
    setPaidFilter("all");
    setLocationFilter("all");
    setDateFilter(undefined);
    setSearchQuery("");
  };

  const hasActiveFilters = Boolean(
    typeFilter !== "all" ||
      paidFilter !== "all" ||
      locationFilter !== "all" ||
      dateFilter ||
      searchQuery
  );

  if (error) return <PageLayout><ErrorState /></PageLayout>;

  return (
    <PageLayout>
      <Suspense fallback={<LoadingFallback />}>
        <HeroSection />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <EventsSection
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
        />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <WhyJoinUsSection />
      </Suspense>
    </PageLayout>
  );
}

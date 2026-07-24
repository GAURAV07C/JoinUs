"use client";

import { motion } from "framer-motion";
import { SearchBar } from "@/components/search-bar";
import { FilterControls } from "@/components/filter-controls";
import { ActiveFilters } from "@/components/active-filters";
import { EventsGrid } from "@/components/events-grid";
import { EmptyEventsState } from "@/components/empty-events-state";
import { EventsLoading } from "@/components/events-loading";
import type { Event } from "@/types";

interface EventsSectionProps {
  events: Event[] | undefined;
  isLoading: boolean;
  searchQuery: string;
  debouncedSearch: string;
  typeFilter: string;
  paidFilter: string;
  locationFilter: string;
  dateFilter: Date | undefined;
  filteredEvents: Event[];
  cities: string[];
  hasActiveFilters: boolean;
  onSearchChange: (query: string) => void;
  onTypeChange: (value: string) => void;
  onPaidChange: (value: string) => void;
  onLocationChange: (value: string) => void;
  onDateChange: (date: Date | undefined) => void;
  onClearAllFilters: () => void;
}

export function EventsSection({
  events,
  isLoading,
  searchQuery,
  typeFilter,
  paidFilter,
  locationFilter,
  dateFilter,
  filteredEvents,
  cities,
  hasActiveFilters,
  onSearchChange,
  onTypeChange,
  onPaidChange,
  onLocationChange,
  onDateChange,
  onClearAllFilters,
}: EventsSectionProps): React.JSX.Element {
  return (
    <section id="events" className="py-12 lg:py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-8 lg:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Discover{" "}
            <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
              Amazing Events
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Find the perfect events that match your interests and schedule
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          className="mb-8 space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Search Bar */}
          <SearchBar
            searchQuery={searchQuery}
            onSearchChange={onSearchChange}
          />

          {/* Filters */}
          <FilterControls
            typeFilter={typeFilter}
            paidFilter={paidFilter}
            locationFilter={locationFilter}
            dateFilter={dateFilter}
            cities={cities}
            hasActiveFilters={hasActiveFilters}
            onTypeChange={onTypeChange}
            onPaidChange={onPaidChange}
            onLocationChange={onLocationChange}
            onDateChange={onDateChange}
            onClearAll={onClearAllFilters}
          />

          {/* Active Filters */}
          <ActiveFilters
            typeFilter={typeFilter}
            paidFilter={paidFilter}
            locationFilter={locationFilter}
            dateFilter={dateFilter}
            searchQuery={searchQuery}
            hasActiveFilters={hasActiveFilters}
          />
        </motion.div>

        {/* Events Grid */}
        {isLoading ? (
          <EventsLoading />
        ) : filteredEvents && filteredEvents.length > 0 ? (
          <EventsGrid events={filteredEvents} />
        ) : (
          <EmptyEventsState
            hasActiveFilters={hasActiveFilters}
            onClearFilters={onClearAllFilters}
          />
        )}
      </div>
    </section>
  );
}

"use client"

import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"

interface ActiveFiltersProps {
  typeFilter: string
  paidFilter: string
  locationFilter: string
  dateFilter: Date | undefined
  searchQuery: string
  hasActiveFilters: boolean
}

import React from "react";

export function ActiveFilters({
  typeFilter,
  paidFilter,
  locationFilter,
  dateFilter,
  searchQuery,
  hasActiveFilters,
}: ActiveFiltersProps): React.ReactElement | null {
  if (!hasActiveFilters) return null

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {typeFilter !== "all" && (
        <Badge variant="secondary" className="bg-primary/10 text-primary">
          Type: {typeFilter}
        </Badge>
      )}
      {paidFilter !== "all" && (
        <Badge variant="secondary" className="bg-primary/10 text-primary">
          {paidFilter === "free" ? "Free Events" : "Paid Events"}
        </Badge>
      )}
      {locationFilter !== "all" && (
        <Badge variant="secondary" className="bg-primary/10 text-primary">
          Location: {locationFilter}
        </Badge>
      )}
      {dateFilter && (
        <Badge variant="secondary" className="bg-primary/10 text-primary">
          <Calendar className="w-3 h-3 mr-1" />
          {dateFilter.toLocaleDateString()}
        </Badge>
      )}
      {searchQuery && (
        <Badge variant="secondary" className="bg-primary/10 text-primary">
          Search: "{searchQuery}"
        </Badge>
      )}
    </div>
  )
}

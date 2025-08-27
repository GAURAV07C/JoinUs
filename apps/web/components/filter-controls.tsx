"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { DatePicker } from "@/components/date-picker"
import { Filter, X } from "lucide-react"

interface FilterControlsProps {
  typeFilter: string
  paidFilter: string
  locationFilter: string
  dateFilter: Date | undefined
  cities: string[]
  hasActiveFilters: boolean
  onTypeChange: (value: string) => void
  onPaidChange: (value: string) => void
  onLocationChange: (value: string) => void
  onDateChange: (date: Date | undefined) => void
  onClearAll: () => void
}

import React from "react";

export const FilterControls: React.FC<FilterControlsProps> = ({
  typeFilter,
  paidFilter,
  locationFilter,
  dateFilter,
  cities,
  hasActiveFilters,
  onTypeChange,
  onPaidChange,
  onLocationChange,
  onDateChange,
  onClearAll,
}) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      <Select value={typeFilter} onValueChange={onTypeChange}>
        <SelectTrigger className="w-full sm:w-[180px] h-12">
          <Filter className="w-4 h-4 mr-2" />
          <SelectValue placeholder="Event Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Types</SelectItem>
          <SelectItem value="COLLEGE">College Events</SelectItem>
          <SelectItem value="PRIVATE">Private Events</SelectItem>
        </SelectContent>
      </Select>

      <Select value={paidFilter} onValueChange={onPaidChange}>
        <SelectTrigger className="w-full sm:w-[180px] h-12">
          <SelectValue placeholder="Price" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Events</SelectItem>
          <SelectItem value="free">Free Events</SelectItem>
          <SelectItem value="paid">Paid Events</SelectItem>
        </SelectContent>
      </Select>

      <Select value={locationFilter} onValueChange={onLocationChange}>
        <SelectTrigger className="w-full sm:w-[180px] h-12">
          <SelectValue placeholder="Location" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Cities</SelectItem>
          {cities.map((city) => (
            <SelectItem key={city} value={city}>
              {city}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <div className="w-full sm:w-auto">
        <DatePicker date={dateFilter} onDateChange={onDateChange} placeholder="Select date" />
      </div>

      {hasActiveFilters && (
        <Button
          variant="outline"
          onClick={onClearAll}
          className="h-12 border-2 hover:bg-destructive hover:text-white hover:border-destructive bg-transparent"
        >
          <X className="w-4 h-4 mr-2" />
          Clear All
        </Button>
      )}
    </div>
  )
}

"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

interface EmptyEventsStateProps {
  hasActiveFilters: boolean
  onClearFilters: () => void
}

import React from "react";

export const EmptyEventsState: React.FC<EmptyEventsStateProps> = ({ hasActiveFilters, onClearFilters }) => {
  return (
    <motion.div
      className="text-center py-16"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-md mx-auto">
        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
          <Search className="w-12 h-12 text-muted-foreground" />
        </div>
        <h3 className="text-2xl font-semibold mb-2">No events found</h3>
        <p className="text-muted-foreground mb-6">
          No events match your current search criteria. Try adjusting your filters or search terms.
        </p>
        {hasActiveFilters && (
          <Button onClick={onClearFilters} variant="outline">
            Clear All Filters
          </Button>
        )}
      </div>
    </motion.div>
  )
}

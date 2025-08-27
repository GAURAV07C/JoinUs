"use client"

import { useState, useEffect } from "react"
import { EventCard } from "@/components/event-card"
import type { Event } from "@/types"

interface MasonryLayoutProps {
  events: Event[]
}

export function MasonryLayout({ events }: MasonryLayoutProps) {
  const [columns, setColumns] = useState(3)

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth < 768) {
        setColumns(1)
      } else if (window.innerWidth < 1024) {
        setColumns(2)
      } else {
        setColumns(3)
      }
    }

    updateColumns()
    window.addEventListener("resize", updateColumns)
    return () => window.removeEventListener("resize", updateColumns)
  }, [])

  const columnEvents = Array.from({ length: columns }, () => [] as Event[])

  events.forEach((event, index) => {
    columnEvents[index % columns]?.push(event)
  })

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {columnEvents.map((columnEvents, columnIndex) => (
        <div key={columnIndex} className="space-y-8">
          {columnEvents.map((event, eventIndex) => (
            <div
              key={event.id}
              className="animate-in fade-in-0 slide-in-from-bottom-4"
              style={{
                animationDelay: `${(columnIndex * columnEvents.length + eventIndex) * 100}ms`,
                animationFillMode: "both",
              }}
            >
              <EventCard event={event} />
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

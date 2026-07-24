"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, X } from "lucide-react"

interface SearchBarProps {
  searchQuery: string
  onSearchChange: (query: string) => void
  placeholder?: string
}

export function SearchBar({
  searchQuery,
  onSearchChange,
  placeholder = "Search events, tags, or organizers...",
}: SearchBarProps): React.JSX.Element {
  return (
    <div className="relative max-w-2xl mx-auto">
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
      <Input
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="pl-12 h-12 lg:h-14 text-base lg:text-lg border-2 focus:border-primary"
      />
      {searchQuery && (
        <Button
          variant="ghost"
          size="sm"
          className="absolute right-2 top-1/2 transform -translate-y-1/2"
          onClick={() => onSearchChange("")}
        >
          <X className="h-4 w-4" />
        </Button>
      )}
    </div>
  )
}

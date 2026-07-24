"use client"

import * as React from "react"
import { Badge, type BadgeProps } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface GradientBadgeProps extends BadgeProps {
  gradient?: "purple" | "pink" | "amber" | "emerald" | "violet" | "indigo"
  animated?: boolean
}

const gradientVariants = {
  purple: "bg-gradient-to-r from-purple-500 to-purple-600 text-white border-0",
  pink: "bg-gradient-to-r from-pink-500 to-pink-600 text-white border-0",
  amber: "bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0",
  emerald: "bg-gradient-to-r from-emerald-500 to-green-500 text-white border-0",
  violet: "bg-gradient-to-r from-violet-500 to-violet-600 text-white border-0",
  indigo: "bg-gradient-to-r from-indigo-500 to-indigo-600 text-white border-0",
}

export const GradientBadge = React.forwardRef<HTMLDivElement, GradientBadgeProps>(
  ({ className, gradient = "purple", animated = false, ...props }, ref) => {
    return (
      <Badge
        className={cn(gradientVariants[gradient], "font-semibold", animated && "animate-pulse", className)}
        {...props}
        // If Badge does not accept ref, remove ref here
      />
    )
  },
)
GradientBadge.displayName = "GradientBadge"

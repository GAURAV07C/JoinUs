"use client"

import * as React from "react"
import { Button, type ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface GradientButtonProps extends ButtonProps {
  gradient?: "purple" | "pink" | "amber" | "emerald" | "violet" | "indigo"
  animated?: boolean
}

const gradientVariants = {
  purple: "bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800",
  pink: "bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700",
  amber: "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600",
  emerald: "bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600",
  violet: "bg-gradient-to-r from-violet-500 to-violet-600 hover:from-violet-600 hover:to-violet-700",
  indigo: "bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700",
}

export const GradientButton = React.forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ className, gradient = "purple", animated = false, children, ...props }, ref) => {
    return (
      <Button
        className={cn(
          gradientVariants[gradient],
          "text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300",
          animated && "group",
          className,
        )}
        ref={ref}
        {...props}
      >
        {children}
        {animated && <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>}
      </Button>
    )
  },
)
GradientButton.displayName = "GradientButton"

"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface LoadingSpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg"
  variant?: "primary" | "secondary" | "gradient"
}

const sizeVariants = {
  sm: "w-4 h-4",
  md: "w-8 h-8",
  lg: "w-16 h-16",
}

const variantStyles = {
  primary: "border-primary border-t-transparent",
  secondary: "border-secondary border-t-transparent",
  gradient: "border-transparent border-t-purple-600",
}

export const LoadingSpinner = React.forwardRef<HTMLDivElement, LoadingSpinnerProps>(
  ({ className, size = "md", variant = "primary", ...props }, ref) => {
    return (
      <div
        className={cn("animate-spin rounded-full border-4", sizeVariants[size], variantStyles[variant], className)}
        ref={ref}
        {...props}
      />
    )
  },
)
LoadingSpinner.displayName = "LoadingSpinner"

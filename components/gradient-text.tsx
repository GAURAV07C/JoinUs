"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface GradientTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  gradient?: "purple" | "pink" | "rainbow" | "blue" | "emerald"
  as?: "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p"
}

const gradientVariants = {
  purple: "bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500",
  pink: "bg-gradient-to-r from-pink-500 to-pink-600",
  rainbow: "bg-gradient-to-r from-violet-600 via-purple-500 to-pink-500",
  blue: "bg-gradient-to-r from-blue-500 to-cyan-500",
  emerald: "bg-gradient-to-r from-emerald-500 to-green-500",
}

export const GradientText = React.forwardRef<
  HTMLSpanElement | HTMLHeadingElement | HTMLParagraphElement,
  GradientTextProps
>(
  ({ className, gradient = "purple", as: Component = "span", ...props }, ref) => {
    return (
      <Component
        className={cn(gradientVariants[gradient], "bg-clip-text text-transparent", className)}
        ref={ref as any}
        {...props}
      />
    )
  },
)
GradientText.displayName = "GradientText"

"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface IconWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl"
  variant?: "default" | "gradient" | "outline"
  color?: "purple" | "pink" | "amber" | "emerald" | "violet" | "indigo"
  animated?: boolean
  children: React.ReactNode
}

const sizeVariants = {
  sm: "w-8 h-8",
  md: "w-12 h-12",
  lg: "w-16 h-16",
  xl: "w-20 h-20",
}

const variantStyles = {
  default: {
    purple: "bg-purple-100 text-purple-600",
    pink: "bg-pink-100 text-pink-600",
    amber: "bg-amber-100 text-amber-600",
    emerald: "bg-emerald-100 text-emerald-600",
    violet: "bg-violet-100 text-violet-600",
    indigo: "bg-indigo-100 text-indigo-600",
  },
  gradient: {
    purple: "bg-gradient-to-r from-purple-500 to-purple-600 text-white",
    pink: "bg-gradient-to-r from-pink-500 to-pink-600 text-white",
    amber: "bg-gradient-to-r from-amber-500 to-orange-500 text-white",
    emerald: "bg-gradient-to-r from-emerald-500 to-green-500 text-white",
    violet: "bg-gradient-to-r from-violet-500 to-violet-600 text-white",
    indigo: "bg-gradient-to-r from-indigo-500 to-indigo-600 text-white",
  },
  outline: {
    purple: "border-2 border-purple-500 text-purple-600",
    pink: "border-2 border-pink-500 text-pink-600",
    amber: "border-2 border-amber-500 text-amber-600",
    emerald: "border-2 border-emerald-500 text-emerald-600",
    violet: "border-2 border-violet-500 text-violet-600",
    indigo: "border-2 border-indigo-500 text-indigo-600",
  },
}

export const IconWrapper = React.forwardRef<HTMLDivElement, IconWrapperProps>(
  ({ className, size = "md", variant = "default", color = "purple", animated = false, children, ...props }, ref) => {
    const Component = animated ? motion.div : "div"
    const animationProps = animated
      ? {
          whileHover: { scale: 1.1, rotate: 5 },
          transition: { type: "spring", stiffness: 300 },
        }
      : {}

    if (animated) {
      return (
        <motion.div
          className={cn(
            "inline-flex items-center justify-center rounded-2xl",
            sizeVariants[size],
            variantStyles[variant][color],
            className,
          )}
          {...animationProps}
          {...(props as React.ComponentProps<typeof motion.div>)}
          ref={ref}
        >
          {children}
        </motion.div>
      )
    }

    return (
      <div
        className={cn(
          "inline-flex items-center justify-center rounded-2xl",
          sizeVariants[size],
          variantStyles[variant][color],
          className,
        )}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    )
  },
)
IconWrapper.displayName = "IconWrapper"

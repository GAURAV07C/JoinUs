"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { CardProps } from "./card"

interface AnimatedCardProps extends CardProps {
  hoverEffect?: "lift" | "scale" | "glow" | "none"
  delay?: number
  children: React.ReactNode
}

export const AnimatedCard = React.forwardRef<HTMLDivElement, AnimatedCardProps>(
  ({ className, hoverEffect = "lift", delay = 0, children, ...props }, ref) => {
    const hoverVariants = {
      lift: { y: -8, transition: { type: "spring", stiffness: 300 } },
      scale: { scale: 1.02, transition: { type: "spring", stiffness: 300 } },
      glow: { boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)", transition: { duration: 0.3 } },
      none: {},
    }

    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
        whileHover={hoverVariants[hoverEffect]}
      >
        <Card
          className={cn(
            "border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm",
            className,
          )}
          ref={ref}
          {...props}
        >
          {children}
        </Card>
      </motion.div>
    )
  },
)
AnimatedCard.displayName = "AnimatedCard"

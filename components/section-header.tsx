"use client"

import { motion } from "framer-motion"

interface SectionHeaderProps {
  title: string
  highlightedText?: string
  description: string
  className?: string
}

export function SectionHeader({ title, highlightedText, description, className = "" }: SectionHeaderProps): React.JSX.Element {
  return (
    <motion.div
      className={`text-center mb-8 lg:mb-12 ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
        {title}{" "}
        {highlightedText && (
          <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
            {highlightedText}
          </span>
        )}
      </h2>
      <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">{description}</p>
    </motion.div>
  )
}

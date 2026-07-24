"use client"

import { useState, useEffect } from "react"

interface LoadingAnimationProps {
  text?: string
  duration?: number
}

export function LoadingAnimation({ text = "Processing", duration = 2000 }: LoadingAnimationProps) {
  const [dots, setDots] = useState("")

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => {
        if (prev === "...") return ""
        return prev + "."
      })
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      {/* Animated Spinner */}
      <div className="relative">
        <div className="w-16 h-16 border-4 border-primary/20 rounded-full animate-spin">
          <div className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-primary rounded-full animate-spin"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 bg-primary rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Loading Text */}
      <div className="text-center">
        <p className="text-lg font-medium text-primary">
          {text}
          {dots}
        </p>
        <p className="text-sm text-muted-foreground mt-1">Please wait while we process your request</p>
      </div>

      {/* Progress Bar */}
      <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-primary to-secondary animate-pulse"></div>
      </div>
    </div>
  )
}

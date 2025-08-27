"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Heart, Share2 } from "lucide-react"
import { toast } from "sonner"

interface EventCardActionsProps {
  eventId: string
  eventName: string
}

export function EventCardActions({ eventId, eventName }: EventCardActionsProps) {
  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault()
    toast.success("Added to your wishlist! ❤️")
  }

  const handleShare = (e: React.MouseEvent) => {
    e.preventDefault()
    if (navigator.share) {
      navigator.share({
        title: eventName,
        text: `Check out this amazing event: ${eventName}`,
        url: `/event/${eventId}`,
      })
    } else {
      navigator.clipboard.writeText(`${window.location.origin}/event/${eventId}`)
      toast.success("Event link copied to clipboard! 📋")
    }
  }

  return (
    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <motion.button
        onClick={handleLike}
        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Heart className="w-4 h-4 text-white" />
      </motion.button>
      <motion.button
        onClick={handleShare}
        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Share2 className="w-4 h-4 text-white" />
      </motion.button>
    </div>
  )
}

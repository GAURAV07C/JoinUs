"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";
import type { Event } from "@/types";

interface EventBadgesProps {
  event: Event;
  attendancePercentage: number;
}

export function EventBadges({
  event,
  attendancePercentage,
}: EventBadgesProps): React.ReactNode {
  if (!event) {
    return null;
  }

  const isAlmostFull = attendancePercentage > 80;

  return (
    <>
      {/* Top badges */}
      <div className="absolute top-4 left-4 flex flex-wrap gap-2">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Badge
            variant={event.type === "COLLEGE" ? "default" : "secondary"}
            className={`${
              event.type === "COLLEGE"
                ? "bg-gradient-to-r from-purple-500 to-purple-600 text-white border-0"
                : "bg-gradient-to-r from-pink-500 to-pink-600 text-white border-0"
            } font-semibold`}
          >
            {event.type}
          </Badge>
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Badge
            variant={event.isPaid ? "destructive" : "outline"}
            className={`${
              event.isPaid
                ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0"
                : "bg-gradient-to-r from-emerald-500 to-green-500 text-white border-0"
            } font-semibold`}
          >
            {event.isPaid ? `₹${event.price}` : "FREE"}
          </Badge>
        </motion.div>

        {isAlmostFull && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white animate-pulse border-0 font-semibold">
              Almost Full!
            </Badge>
          </motion.div>
        )}
      </div>

      {/* Location badge */}
      <div className="absolute bottom-4 right-4">
        <Badge
          variant="outline"
          className="bg-white/90 text-slate-800 border-0 backdrop-blur-sm"
        >
          <MapPin className="w-3 h-3 mr-1" />
          {event.venue || "Location TBD"}
        </Badge>
      </div>
    </>
  );
}

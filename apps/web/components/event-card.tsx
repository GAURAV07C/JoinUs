"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { EventCardActions } from "@/components/event-card-actions";
import { EventBadges } from "@/components/event-badges";
import { Calendar, Clock, User, Users, Tag } from "lucide-react";
import type { Event } from "@/types";

interface EventCardProps {
  event: Event;
  index?: number;
}

export function EventCard({
  event,
  index = 0,
}: EventCardProps): React.ReactElement | null {
  if (!event) {
    return null;
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const formatTime = (timeString: string) => {
    return new Date(`2000-01-01T${timeString}`).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  const maxCapacity = event.maxAttendees || 0;
  const currentAttendees = event.price || 0;
  const attendancePercentage = maxCapacity
    ? (currentAttendees / maxCapacity) * 100
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      whileHover={{ y: -8 }}
      className="h-full"
    >
      <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white/90 backdrop-blur-sm h-full flex flex-col">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={event.city || "/placeholder.svg"}
            alt={event.name || "Event"}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

          <EventBadges
            event={event}
            attendancePercentage={attendancePercentage}
          />
          <EventCardActions
            eventId={event.id}
            eventName={event.name || "Event"}
          />

          {/* Bottom overlay info */}
          <div className="absolute bottom-4 left-4 right-20">
            <div className="flex items-center gap-4 text-white text-sm">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span className="font-medium">{formatDate(event.date)}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span className="font-medium">{formatTime(event.time)}</span>
              </div>
            </div>
          </div>
        </div>

        <CardContent className="p-6 flex-grow">
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-xl mb-2 line-clamp-2 group-hover:text-purple-600 transition-colors duration-300">
                {event.name || "Untitled Event"}
              </h3>

              <div className="flex items-center gap-2 text-sm text-slate-600 mb-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                  <User className="h-4 w-4 text-white" />
                </div>
                <div>
                  <span className="font-medium">
                    {event.organizer?.name || "Unknown Organizer"}
                  </span>
                  {event.organizer?.college && (
                    <div className="text-xs text-slate-500">
                      {event.organizer.college}
                    </div>
                  )}
                </div>
              </div>

              <p className="text-sm text-slate-600 line-clamp-2 mb-4 leading-relaxed">
                {event.description || "No description available"}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1">
              {(event.tags || []).slice(0, 3).map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="text-xs bg-purple-50 text-purple-600 border-purple-200 hover:bg-purple-100 transition-colors"
                >
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </Badge>
              ))}
              {(event.tags || []).length > 3 && (
                <Badge
                  variant="outline"
                  className="text-xs bg-slate-50 text-slate-600 border-slate-200"
                >
                  +{(event.tags || []).length - 3}
                </Badge>
              )}
            </div>

            {/* Attendance Progress */}
            {maxCapacity > 0 && (
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-600 font-medium">Registered</span>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-slate-500" />
                    <span className="font-semibold text-slate-800">
                      {currentAttendees} / {maxCapacity}
                    </span>
                  </div>
                </div>
                <Progress
                  value={attendancePercentage}
                  className="h-2 bg-slate-200"
                />
              </div>
            )}
          </div>
        </CardContent>

        <CardFooter className="p-6 pt-0">
          <Button
            asChild
            className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <Link href={`/event/${event.id}`}>
              Register Now
              {event.isPaid && <span className="ml-2">• ₹{event.price}</span>}
              <motion.div
                className="ml-2"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              >
                →
              </motion.div>
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

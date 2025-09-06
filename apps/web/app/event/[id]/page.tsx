"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useEventQuery, useEventsQuery } from "@/hooks/useEventsQuery";
import {
  Calendar,
  Clock,
  MapPin,
  User,
  Mail,
  Users,
  Share2,
  Heart,
  Timer,
} from "lucide-react";

export default function EventDetailsPage() {
  const params = useParams();
  const eventId = params.id as string;
  const { data: event, isLoading, error } = useEventQuery(eventId);
  const { data: allEvents } = useEventsQuery();
  const [showStickyButton, setShowStickyButton] = useState(false);
  const [timeLeft, setTimeLeft] = useState("");

  // Handle sticky button visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setShowStickyButton(scrolled > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Countdown timer
  useEffect(() => {
    if (!event) return;

    const updateCountdown = () => {
      const eventDate = new Date(`${event.date}T${event.time}`);
      const now = new Date();
      const difference = eventDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );

        setTimeLeft(`${days}d ${hours}h ${minutes}m`);
      } else {
        setTimeLeft("Event started");
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 60000); // Update every minute

    return () => clearInterval(timer);
  }, [event]);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Skeleton className="aspect-video w-full mb-8" />
        <div className="space-y-4">
          <Skeleton className="h-8 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-32 w-full" />
        </div>
      </div>
    );
  }

  if (error || !event) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-destructive">Event not found.</p>
          <Button asChild className="mt-4">
            <Link href="/">Back to Events</Link>
          </Button>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatTime = (timeString: string) => {
    return new Date(`2000-01-01T${timeString}`).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  const attendancePercentage = event.maxAttendees
    ? (event.currentAttendees / event.maxAttendees) * 100
    : 0;
  const similarEvents =
    allEvents
      ?.filter(
        (e) =>
          e.id !== event.id &&
          (e.type === event.type || e.location.city === event.location.city)
      )
      .slice(0, 3) || [];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <div className="relative aspect-video w-full">
        <Image
          src={event.posterUrl || "/placeholder.svg"}
          alt={event.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* Floating Action Buttons */}
        <div className="absolute top-6 right-6 flex gap-2">
          <Button
            size="sm"
            variant="secondary"
            className="bg-white/90 hover:bg-white"
          >
            <Heart className="w-4 h-4" />
          </Button>
          <Button
            size="sm"
            variant="secondary"
            className="bg-white/90 hover:bg-white"
          >
            <Share2 className="w-4 h-4" />
          </Button>
        </div>

        <div className="absolute bottom-8 left-8 right-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge
              variant={event.type === "COLLEGE" ? "default" : "secondary"}
              className="text-sm"
            >
              {event.type}
            </Badge>
            <Badge
              variant={event.isPaid ? "destructive" : "outline"}
              className="text-sm"
            >
              {event.isPaid ? `₹${event.price}` : "FREE"}
            </Badge>
            {timeLeft && (
              <Badge className="bg-orange-500 text-white">
                <Timer className="w-3 h-3 mr-1" />
                {timeLeft}
              </Badge>
            )}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {event.name}
          </h1>
          <div className="flex flex-wrap gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span className="text-lg">{formatDate(event.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span className="text-lg">{formatTime(event.time)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span className="text-lg">
                {event.currentAttendees} registered
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Event Details */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Event Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">{formatDate(event.date)}</p>
                        <p className="text-sm text-muted-foreground">
                          Event Date
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">{formatTime(event.time)}</p>
                        <p className="text-sm text-muted-foreground">
                          Start Time
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">{event.venue}</p>
                        <p className="text-sm text-muted-foreground">
                          {event.location.city}, {event.location.state}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">
                          {event.currentAttendees} / {event.maxAttendees || "∞"}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Registered
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Description */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>About This Event</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {event.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {event.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="bg-primary/5 text-primary border-primary/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Organizer */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Organizer</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-lg">
                      {event.organizer.name}
                    </p>
                    {event.organizer.college && (
                      <p className="text-muted-foreground">
                        {event.organizer.college}
                      </p>
                    )}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                      <Mail className="h-4 w-4" />
                      <span>{event.organizer.email}</span>
                    </div>
                  </div>
                  <Button variant="outline">Contact</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Registration Card */}
            <Card className="border-0 shadow-lg sticky top-24">
              <CardHeader>
                <CardTitle>Register for Event</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {event.isPaid && (
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <p className="text-3xl font-bold text-primary">
                      ₹{event.price}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Registration Fee
                    </p>
                  </div>
                )}

                {/* Progress Bar */}
                {event.maxAttendees && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Registered</span>
                      <span>{Math.round(attendancePercentage)}% Full</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all duration-300"
                        style={{ width: `${attendancePercentage}%` }}
                      />
                    </div>
                  </div>
                )}

                <Button asChild className="w-full" size="lg">
                  <Link href={`/event/${event.id}/register`}>
                    Register Now
                    {event.isPaid && (
                      <span className="ml-2">• ₹{event.price}</span>
                    )}
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Registration Requirements */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Registration Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {event.formFields.map((field) => (
                    <li
                      key={field.id}
                      className="flex items-center gap-3 text-sm"
                    >
                      <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                      <span>
                        {field.label}
                        {field.required && (
                          <span className="text-destructive ml-1">*</span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Similar Events */}
        {similarEvents.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8">Similar Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {similarEvents.map((similarEvent) => (
                <Card
                  key={similarEvent.id}
                  className="border-0 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="relative aspect-video">
                    <Image
                      src={similarEvent.posterUrl || "/placeholder.svg"}
                      alt={similarEvent.name}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2 line-clamp-2">
                      {similarEvent.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {formatDate(similarEvent.date)} •{" "}
                      {similarEvent.location.city}
                    </p>
                    <Button asChild size="sm" className="w-full">
                      <Link href={`/event/${similarEvent.id}`}>View Event</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Sticky Register Button (Mobile) */}
      {showStickyButton && (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur border-t z-50">
          <Button asChild className="w-full" size="lg">
            <Link href={`/event/${event.id}/register`}>
              Register Now
              {event.isPaid && <span className="ml-2">- ₹{event.price}</span>}
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
}

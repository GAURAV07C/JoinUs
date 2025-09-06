"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { QRDisplay } from "@/components/qr-display";
import { useEventQuery } from "@/hooks/useEventsQuery";
import { ArrowLeft, Home } from "lucide-react";

export default function QRCodePage() {
  const params = useParams();
  const eventId = params.id as string;
  const { data: event, isLoading, error } = useEventQuery(eventId);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto space-y-6">
          <Skeleton className="h-64 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
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

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-2">
          Registration Successful!
        </h1>
        <p className="text-muted-foreground">
          Your QR code is ready. Save it for event entry.
        </p>
      </div>

      <QRDisplay
        eventName={event.name}
        eventDate={event.date}
        eventTime={event.time}
        venue={event.venue}
      />

      {/* Navigation */}
      <div className="max-w-md mx-auto mt-8 space-y-3">
        <Button variant="outline" asChild className="w-full bg-transparent">
          <Link href={`/event/${eventId}`}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Event
          </Link>
        </Button>
        <Button variant="outline" asChild className="w-full bg-transparent">
          <Link href="/">
            <Home className="mr-2 h-4 w-4" />
            Browse More Events
          </Link>
        </Button>
      </div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSession } from "next-auth/react";
import {
  useEventsQuery,
  useUserRegistrationsQuery,
} from "@/hooks/useEventsQuery";
import { LoadingAnimation } from "@/components/loading-animation";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  QrCode,
  ExternalLink,
  Plus,
} from "lucide-react";
import Link from "next/link";
import { format } from "date-fns";

export default function MyEventsPage() {
  const { data: session } = useSession();
  const user = session?.user;

  const { data: events, isLoading: eventsLoading } = useEventsQuery();
  const { data: registrations, isLoading: registrationsLoading } =
    useUserRegistrationsQuery(user?.id || "");

  if (eventsLoading || registrationsLoading) {
    return <LoadingAnimation />;
  }

  // Events user is registered for
  const registeredEvents = (events || []).filter((event: any) =>
    (registrations || []).some((reg: any) => reg.eventId === event.id)
  );

  // Events created by user (support both shapes)
  const createdEvents = (events || []).filter(
    (event: any) =>
      event.organizerId === user?.id || event.organizer?.id === user?.id
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const EventCard = ({
    event,
    showQR = false,
  }: {
    event: any;
    showQR?: boolean;
  }) => {
    const registration = (registrations || []).find(
      (reg: any) => reg.eventId === event.id
    );

    const title = event.name || event.title;
    const category =
      event.category ||
      (Array.isArray(event.tags) && event.tags[0]) ||
      event.type ||
      "Event";
    const maxCap = event.maxCapacity ?? event.maxAttendees ?? 0;
    const regCount = event.registeredCount ?? event.currentAttendees ?? 0;

    return (
      <motion.div variants={itemVariants}>
        <Card className="hover:shadow-lg transition-all duration-300 border-0 shadow-md">
          <CardHeader className="pb-3">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <CardTitle className="text-lg font-semibold text-gray-900 mb-1">
                  {title}
                </CardTitle>
                <CardDescription className="text-sm text-gray-600">
                  {event.description?.length > 100
                    ? `${event.description.substring(0, 100)}...`
                    : event.description}
                </CardDescription>
              </div>
              <Badge
                variant={category === "Workshop" ? "default" : "secondary"}
                className="ml-2"
              >
                {category}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-600">
                <Calendar className="h-4 w-4 mr-2 text-sky-500" />
                {event.date ? format(new Date(event.date), "PPP") : "TBA"}
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Clock className="h-4 w-4 mr-2 text-sky-500" />
                {event.time || "TBA"}
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <MapPin className="h-4 w-4 mr-2 text-sky-500" />
                {event.venue || "TBA"}
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Users className="h-4 w-4 mr-2 text-sky-500" />
                {regCount} / {maxCap || "∞"} registered
              </div>

              {registration && (
                <div className="pt-2 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-green-600">
                      <div className="h-2 w-2 bg-green-500 rounded-full mr-2" />
                      Registered on{" "}
                      {format(new Date(registration.registeredAt), "PP")}
                    </div>
                    <Badge
                      variant="outline"
                      className="text-green-600 border-green-200"
                    >
                      {registration.status}
                    </Badge>
                  </div>
                </div>
              )}

              <div className="flex gap-2 pt-2">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="flex-1 bg-transparent"
                >
                  <Link href={`/event/${event.id}`}>
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Details
                  </Link>
                </Button>
                {showQR && registration && (
                  <Button
                    asChild
                    variant="default"
                    size="sm"
                    className="bg-gradient-to-r from-sky-500 to-cyan-500"
                  >
                    <Link href={`/event/${event.id}/qr`}>
                      <QrCode className="h-4 w-4 mr-2" />
                      QR Code
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  };

  const EmptyState = ({
    title,
    description,
    actionText,
    actionHref,
  }: {
    title: string;
    description: string;
    actionText?: string;
    actionHref?: string;
  }) => (
    <div className="text-center py-12">
      <div className="mx-auto h-24 w-24 rounded-full bg-gradient-to-r from-sky-100 to-cyan-100 flex items-center justify-center mb-4">
        <Calendar className="h-12 w-12 text-sky-500" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-6 max-w-md mx-auto">{description}</p>
      {actionText && actionHref && (
        <Button asChild className="bg-gradient-to-r from-sky-500 to-cyan-500">
          <Link href={actionHref}>
            <Plus className="h-4 w-4 mr-2" />
            {actionText}
          </Link>
        </Button>
      )}
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">My Events</h1>
        <p className="text-gray-600">
          Manage your registered events and created events
        </p>
      </div>

      <Tabs defaultValue="registered" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 lg:w-[400px]">
          <TabsTrigger value="registered">Registered Events</TabsTrigger>
          <TabsTrigger value="created">Created Events</TabsTrigger>
        </TabsList>

        <TabsContent value="registered">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {registeredEvents.length > 0 ? (
              registeredEvents.map((event: any) => (
                <EventCard key={event.id} event={event} showQR={true} />
              ))
            ) : (
              <div className="col-span-full">
                <EmptyState
                  title="No Registered Events"
                  description="You haven't registered for any events yet. Browse our events and register for the ones that interest you."
                  actionText="Browse Events"
                  actionHref="/"
                />
              </div>
            )}
          </motion.div>
        </TabsContent>

        <TabsContent value="created">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {createdEvents.length > 0 ? (
              createdEvents.map((event: any) => (
                <EventCard key={event.id} event={event} />
              ))
            ) : (
              <div className="col-span-full">
                <EmptyState
                  title="No Created Events"
                  description={
                    user?.role === "USER"
                      ? "You don't have permission to create events. Contact an administrator if you need organizer access."
                      : "You haven't created any events yet. Start by creating your first event."
                  }
                  actionText={
                    user?.role !== "USER" ? "Create Event" : undefined
                  }
                  actionHref={
                    user?.role !== "USER"
                      ? "/dashboard/create-event"
                      : undefined
                  }
                />
              </div>
            )}
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

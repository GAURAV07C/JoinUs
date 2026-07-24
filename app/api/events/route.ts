import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { z } from "zod";
import {
  getEventById,
  createEvent,
  updateEvent,
  updateEventStatus,
  deleteEvent,
} from "@/lib/events-service";
import { eventSchema } from "@/lib/validation/eventSchema";
import type { EventStatus } from "@/lib/validation/types";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get("id");

    if (id) {
      const event = await getEventById(id);
      if (!event) {
        return NextResponse.json({ success: false, message: "Event not found" }, { status: 404 });
      }
      return NextResponse.json({ success: true, event });
    }

    const events = await (await import("@/lib/events-service")).getAllEvents();
    return NextResponse.json({ success: true, events });
  } catch (error) {
    console.error("Get events API error:", error);
    return NextResponse.json({ success: false, message: "Failed to fetch events" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user || (session.user.role !== "ORGANIZER" && session.user.role !== "ADMIN")) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const action = request.nextUrl.searchParams.get("action");

    if (action === "updateEventStatus") {
      const { eventId, status, reason } = body as { eventId: string; status: EventStatus; reason?: string };
      const updatedEvent = await updateEventStatus(eventId, status, reason);
      return NextResponse.json({ success: true, message: `Event ${status.toLowerCase()} successfully`, event: updatedEvent });
    }

    if (action === "delete") {
      const { eventId } = body;
      const result = await deleteEvent(eventId);
      return NextResponse.json({ success: true, message: "Event deleted successfully" });
    }

    const validated = eventSchema.safeParse(body);
    if (!validated.success) {
      return NextResponse.json(
        { success: false, message: "Invalid event data", errors: validated.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const eventData = {
      ...validated.data,
      type: validated.data.category as "COLLEGE" | "PRIVATE",
      isPaid: validated.data.price > 0,
      maxAttendees: validated.data.maxCapacity,
      organizerId: session.user.id,
      organizer: {
        id: session.user.id,
        name: session.user.name || "Unknown",
        email: session.user.email || "",
      },
      tags: validated.data.tags,
    };

    const event = await createEvent(eventData);
    return NextResponse.json({ success: true, message: "Event created successfully", event });
  } catch (error) {
    console.error("Event API error:", error);
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: "Invalid form data", errors: error.flatten().fieldErrors },
        { status: 400 }
      );
    }
    return NextResponse.json({ success: false, message: "Failed to process event" }, { status: 500 });
  }
}

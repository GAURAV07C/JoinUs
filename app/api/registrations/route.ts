import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import {
  createRegistration,
  cancelRegistration,
  getUserRegistrations,
  getEventRegistrations,
  updateRegistrationStatus,
  checkUserRegistration,
} from "@/lib/registrations-service";
import { submitFormAndRegister } from "@/lib/submission-service";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const eventId = searchParams.get("eventId");

    const session = await auth();

    if (eventId) {
      const registrations = await getEventRegistrations(eventId);
      return NextResponse.json({ success: true, registrations });
    }

    if (!session?.user) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

    const registrations = await getUserRegistrations(session.user.id);
    return NextResponse.json({ success: true, registrations });
  } catch (error) {
    console.error("Get registrations API error:", error);
    return NextResponse.json({ success: false, message: "Failed to fetch registrations" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const action = request.nextUrl.searchParams.get("action");

    if (action === "cancel") {
      const { registrationId } = body;
      await cancelRegistration(registrationId);
      return NextResponse.json({ success: true, message: "Registration cancelled successfully" });
    }

    if (action === "markAttendance") {
      const { registrationId } = body;
      await updateRegistrationStatus(registrationId, "ATTENDED");
      return NextResponse.json({ success: true, message: "Attendance marked successfully" });
    }

    if (body.eventId && body.formId) {
      const result = await submitFormAndRegister(session.user.id, body.eventId, body.formId, body.formData);
      return NextResponse.json({
        success: true,
        message: "Registered successfully",
        registrationId: result.registrationId,
      });
    }

    const { eventId } = body;
    if (!eventId) {
      return NextResponse.json({ success: false, message: "Event ID required" }, { status: 400 });
    }

    await createRegistration(eventId, session.user.id);
    return NextResponse.json({ success: true, message: "Successfully registered for event" });
  } catch (error) {
    console.error("Registration API error:", error);
    return NextResponse.json(
      { success: false, message: error instanceof Error ? error.message : "Failed to register for event" },
      { status: 500 }
    );
  }
}

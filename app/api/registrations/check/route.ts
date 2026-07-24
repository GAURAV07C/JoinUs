import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { checkUserRegistration } from "@/lib/registrations-service";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const eventId = searchParams.get("eventId");

    if (!eventId) {
      return NextResponse.json({ success: false, message: "Event ID required" }, { status: 400 });
    }

    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ success: false, registered: false, message: "User not authenticated" }, { status: 401 });
    }

    const isRegistered = await checkUserRegistration(session.user.id, eventId);

    return NextResponse.json({
      success: true,
      registered: isRegistered,
      message: isRegistered ? "You are already registered for this event" : "You are not registered yet",
    });
  } catch (error) {
    console.error("Check registration API error:", error);
    return NextResponse.json(
      { success: false, registered: false, message: "Failed to check registration" },
      { status: 500 }
    );
  }
}

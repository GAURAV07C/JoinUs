import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { submitFormAndRegister } from "@/lib/submission-service";

export async function POST(request: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ success: false, message: "User not authenticated" }, { status: 401 });
    }

    const body = await request.json();
    const { eventId, formId, formData } = body;

    const result = await submitFormAndRegister(session.user.id, eventId, formId, formData);

    return NextResponse.json({
      success: true,
      message: "Registered successfully",
      registrationId: result.registrationId,
    });
  } catch (error) {
    console.error("Submission API error:", error);
    return NextResponse.json(
      { success: false, message: error instanceof Error ? error.message : "Failed to submit form" },
      { status: 500 }
    );
  }
}

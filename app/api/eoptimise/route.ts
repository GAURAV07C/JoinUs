import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { getAllEvents } from "@/lib/eoptimise";

export async function GET() {
  try {
    const events = await getAllEvents();
    return NextResponse.json({ success: true, events });
  } catch (error) {
    console.error("Get events API error:", error);
    return NextResponse.json({ success: false, message: "Failed to fetch events" }, { status: 500 });
  }
}

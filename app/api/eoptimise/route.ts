import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { getAllEvents } from "@/lib/eoptimise";

export async function GET(request: NextRequest) {
  const cacheKey = "eoptimise-events";
  const cacheControl = "s-maxage=60, stale-while-revalidate=30";

  try {
    const events = await getAllEvents();
    const response = NextResponse.json({ success: true, events });

    response.headers.set("Cache-Control", cacheControl);
    response.headers.set("CDN-Cache-Control", cacheControl);
    response.headers.set("Vercel-CDN-Cache-Control", cacheControl);

    return response;
  } catch (error) {
    console.error("Get events API error:", error);
    return NextResponse.json({ success: false, message: "Failed to fetch events" }, { status: 500, headers: { "Cache-Control": "no-store" } });
  }
}

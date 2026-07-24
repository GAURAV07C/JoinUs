import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { getAllUsers, updateUserStatus } from "@/data/user";
import type { UserStatus } from "@/types";

export async function GET(request: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user || session.user.role !== "ADMIN") {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

    const users = await getAllUsers();
    return NextResponse.json({ success: true, users });
  } catch (error) {
    console.error("Get users API error:", error);
    return NextResponse.json({ success: false, message: "Failed to fetch users" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user || session.user.role !== "ADMIN") {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { userId, status, reason } = body as { userId: string; status: UserStatus; reason?: string };

    if (!userId) {
      return NextResponse.json({ success: false, message: "User ID required" }, { status: 400 });
    }

    const approvedBy = typeof session.user.name === "string" ? session.user.name : undefined;

    const updatedUser = await updateUserStatus(userId, status, reason, approvedBy);
    if (!updatedUser) {
      return NextResponse.json({ success: false, message: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: `User ${status.toLowerCase()} successfully`, user: updatedUser });
  } catch (error) {
    console.error("Update user status API error:", error);
    return NextResponse.json({ success: false, message: "Failed to update user status" }, { status: 500 });
  }
}

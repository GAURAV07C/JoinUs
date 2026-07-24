import { NextRequest, NextResponse } from "next/server";
import { loginSchema } from "@/lib/validation/authSchema";
import { getUserByEmail, verifyPassword } from "@/data/user";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = loginSchema.safeParse(body);

    if (!validated.success) {
      return NextResponse.json(
        { success: false, message: "Invalid fields", errors: validated.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { email, password, role } = validated.data;

    const existingUser = await getUserByEmail(email);
    if (!existingUser) {
      return NextResponse.json({ success: false, message: "User not found" }, { status: 404 });
    }

    if (existingUser.role !== role) {
      return NextResponse.json({ success: false, message: "Please select the correct role" }, { status: 400 });
    }

    if (!existingUser.password) {
      return NextResponse.json({ success: false, message: "Password not set for this account" }, { status: 400 });
    }

    const isPasswordCorrect = await verifyPassword(password, existingUser.password);
    if (!isPasswordCorrect) {
      return NextResponse.json({ success: false, message: "Invalid password" }, { status: 401 });
    }

    if (existingUser.status !== "APPROVED") {
      return NextResponse.json(
        { success: false, message: `Account is ${existingUser.status.toLowerCase()}. Please contact admin.` },
        { status: 403 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Login successful!",
      user: {
        id: existingUser.id,
        name: existingUser.name,
        email: existingUser.email,
        role: existingUser.role,
        status: existingUser.status,
      },
    });
  } catch (error) {
    console.error("Login API error:", error);
    return NextResponse.json({ success: false, message: "Something went wrong!" }, { status: 500 });
  }
}

import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { signupSchema } from "@/lib/validation/authSchema";
import { getUserByEmail } from "@/data/user";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = signupSchema.safeParse(body);

    if (!validated.success) {
      return NextResponse.json(
        { success: false, message: "Invalid fields", errors: validated.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { name, email, password, role, college, department, year, phone } = validated.data;

    if (role === "ADMIN") {
      return NextResponse.json({ success: false, message: "You cannot self-register as admin" }, { status: 403 });
    }

    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      return NextResponse.json({ success: false, message: "Email already in use!" }, { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role,
        college,
        department,
        year,
        phone,
      },
    });

    return NextResponse.json({ success: true, message: "Account created successfully!" });
  } catch (error) {
    console.error("Signup API error:", error);
    return NextResponse.json({ success: false, message: "Something went wrong while creating your account." }, { status: 500 });
  }
}

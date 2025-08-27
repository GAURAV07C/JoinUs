import { redirect } from "next/navigation";
import { loginSchema, signupSchema } from "@/lib/validations";

export async function loginAction(formData: FormData) {
  const rawData = {
    email: formData.get("email"),
    password: formData.get("password"),
    role: formData.get("role"),
  };

  const validatedData = loginSchema.parse(rawData);

  // TODO: Replace with actual database call
  // Simulate authentication
  const user = {
    id: "1",
    name: "John Doe",
    email: validatedData.email,
    role: validatedData.role,
  };

  // TODO: Set session/cookies here

  if (user.role === "ADMIN") {
    redirect("/dashboard/admin/approvals");
  } else {
    redirect("/dashboard");
  }
}

export async function signupAction(formData: FormData) {
  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    role: formData.get("role"),
    college: formData.get("college"),
    department: formData.get("department"),
    year: formData.get("year"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  };

  const validatedData = signupSchema.parse(rawData);

  // TODO: Replace with actual database call
  const user = {
    id: "new-user-id",
    ...validatedData,
    status: validatedData.role === "ADMIN" ? "APPROVED" : "PENDING",
    createdAt: new Date(),
  };

  if (user.role === "ADMIN") {
    redirect("/dashboard");
  } else {
    redirect("/auth/signup?success=true");
  }
}

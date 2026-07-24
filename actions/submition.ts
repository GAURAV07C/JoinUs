"use server";

import { auth } from "@/lib/auth";
import { submitFormAndRegister } from "@/lib/submission-service";
import { revalidatePath } from "next/cache";

export async function submitFormAndRegisterAction(
  eventId: string,
  formId: string,
  formData: any
) {
  const session = await auth();
  const userId = session?.user.id;

  if (!userId) {
    return { success: false, message: "User not authenticated" };
  }

  try {
    const registration = await submitFormAndRegister(
      userId,
      eventId,
      formId,
      formData
    );

    // 🔄 Revalidate event page and dashboard after registration
    revalidatePath(`/event/${eventId}`);
    revalidatePath(`/dashboard/events`);
    
    return {
      success: true,
      message: "Registered successfully",
      registrationId: registration.registrationId, // use this for QR page
    };
  } catch (error) {
    console.error("Error during form submission + registration:", error);
    return { success: false, message: (error as Error).message };
  }
}

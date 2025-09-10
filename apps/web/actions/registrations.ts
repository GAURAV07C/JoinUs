"use server";

import { auth } from "@/lib/auth";
import { revalidatePath } from "next/cache";
import {
  createRegistration,
  getUserRegistrations,
  getEventRegistrations,
  updateRegistrationStatus,
  cancelRegistration,
  checkUserRegistration,
} from "@/lib/registrations-service";

export async function registerForEventAction(eventId: string) {
  const session = await auth();

  if (!session?.user) {
    return { success: false, message: "Please login to register for events" };
  }

  try {
    const registration = await createRegistration(session.user.id, eventId);

    revalidatePath(`/event/${eventId}`);
    revalidatePath("/dashboard");

    return {
      success: true,
      message: "Successfully registered for event",
      registration,
    };
  } catch (error) {
    return {
      success: false,
      message:
        error instanceof Error ? error.message : "Failed to register for event",
    };
  }
}

export async function cancelRegistrationAction(registrationId: string) {
  const session = await auth();

  if (!session?.user) {
    return { success: false, message: "Unauthorized" };
  }

  try {
    const registration = await cancelRegistration(registrationId);

    revalidatePath(`/event/${registration.eventId}`);
    revalidatePath("/dashboard");

    return { success: true, message: "Registration cancelled successfully" };
  } catch (error) {
    return { success: false, message: "Failed to cancel registration" };
  }
}

export async function getUserRegistrationsAction() {
  const session = await auth();

  if (!session?.user) {
    return { success: false, message: "Unauthorized" };
  }

  try {
    const registrations = await getUserRegistrations(session.user.id);
    return { success: true, registrations };
  } catch (error) {
    return { success: false, message: "Failed to fetch registrations" };
  }
}

export async function getEventRegistrationsAction(eventId: string) {
  const session = await auth();

  if (
    !session?.user ||
    (session.user.role !== "ORGANIZER" && session.user.role !== "ADMIN")
  ) {
    return { success: false, message: "Unauthorized" };
  }

  try {
    const registrations = await getEventRegistrations(eventId);
    return { success: true, registrations };
  } catch (error) {
    return { success: false, message: "Failed to fetch event registrations" };
  }
}

export async function markAttendanceAction(registrationId: string) {
  const session = await auth();

  if (
    !session?.user ||
    (session.user.role !== "ORGANIZER" && session.user.role !== "ADMIN")
  ) {
    return { success: false, message: "Unauthorized" };
  }

  try {
    const registration = await updateRegistrationStatus(
      registrationId,
      "ATTENDED"
    );

    revalidatePath(`/event/${registration.eventId}`);
    revalidatePath("/dashboard/events");

    return { success: true, message: "Attendance marked successfully" };
  } catch (error) {
    return { success: false, message: "Failed to mark attendance" };
  }
}

export async function cheakRegistrationAction(eventId: string) {
  const session = await auth();

  if (!session?.user?.id) {
    return {
      success: false,
      registered: false,
      message: "User not authenticated",
    };
  }

  const userId = session.user.id;

  try {
    const isRegistered = await checkUserRegistration(userId, eventId);

    return {
      success: true,
      registered: isRegistered, 
      message: isRegistered
        ? "You are already registered for this event"
        : "You are not registered yet",
    };
  } catch (error) {
    console.error("Error checking registration:", error);
    return {
      success: false,
      registered: false,
      message: "Failed to check registration",
    };
  }
}
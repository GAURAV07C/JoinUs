;

// Mock registrations data

import { getAllEvents } from "@/lib/eoptimise";

// Get all events
export async function getEvents() {
  return await getAllEvents();
}


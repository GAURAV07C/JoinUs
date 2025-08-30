// import { events } from "@/data/events"

// // Mock registrations data
// const mockRegistrations: any[] = [
//   {
//     id: "reg-1",
//     userId: "user-1",
//     eventId: "1",
//     registeredAt: new Date("2024-01-10"),
//     status: "CONFIRMED",
//     qrCode: "QR123456789",
//   },
//   {
//     id: "reg-2",
//     userId: "user-1",
//     eventId: "2",
//     registeredAt: new Date("2024-01-15"),
//     status: "CONFIRMED",
//     qrCode: "QR987654321",
//   },
//   {
//     id: "reg-3",
//     userId: "organizer-1",
//     eventId: "3",
//     registeredAt: new Date("2024-01-20"),
//     status: "CONFIRMED",
//     qrCode: "QR456789123",
//   },
// ]

// // Get all events
// export async function getEvents(): Promise<any[]> {
//   await new Promise((resolve) => setTimeout(resolve, 300))
//   return events
// }

// // Get single event
// export async function getEvent(id: string): Promise<any | null> {
//   await new Promise((resolve) => setTimeout(resolve, 200))
//   return events.find((event) => event.id === id) || null
// }

// // Get user registrations
// export async function getUserRegistrations(userId: string): Promise<any[]> {
//   await new Promise((resolve) => setTimeout(resolve, 250))
//   return mockRegistrations.filter((reg) => reg.userId === userId)
// }

// // Get event registrations
// export async function getEventRegistrations(eventId: string): Promise<any[]> {
//   await new Promise((resolve) => setTimeout(resolve, 250))
//   return mockRegistrations.filter((reg) => reg.eventId === eventId)
// }

// // Update event status (Approve/Reject/Cancel/Publish)
// export async function updateEventStatus(
//   eventId: string,
//   status: "PUBLISHED" | "PENDING" | "REJECTED" | "CANCELLED" | "COMPLETED",
//   reason?: string,
// ): Promise<any | null> {
//   await new Promise((resolve) => setTimeout(resolve, 200))
//   const idx = events.findIndex((e) => e.id === eventId)
//   if (idx === -1) return null

//   const ev = events[idx]
//   ev.status = status
//   ev.updatedAt = new Date().toISOString()

//   if (status === "REJECTED") {
//     ev.rejectionReason = reason
//   } else {
//     ev.rejectionReason = undefined
//   }

//   // When approving, set some defaults if missing
//   if (status === "PUBLISHED") {
//     if (!ev.currentAttendees) ev.currentAttendees = 0
//   }

//   events[idx] = ev
//   return ev
// }

// export async function getPendingEvents(): Promise<any[]> {
//   await new Promise((resolve) => setTimeout(resolve, 150))
//   return events.filter((e) => e.status === "PENDING")
// }

// // Search events (compatible with current event shape)
// export async function searchEvents(query: string): Promise<any[]> {
//   await new Promise((resolve) => setTimeout(resolve, 200))
//   const q = query.toLowerCase()
//   return events.filter((e) => {
//     return (
//       e.name?.toLowerCase().includes(q) ||
//       e.description?.toLowerCase().includes(q) ||
//       e.venue?.toLowerCase().includes(q) ||
//       e.location?.city?.toLowerCase().includes(q) ||
//       e.organizer?.name?.toLowerCase().includes(q) ||
//       (Array.isArray(e.tags) && e.tags.some((t: string) => t?.toLowerCase().includes(q)))
//     )
//   })
// }

// // Featured events
// export async function getFeaturedEvents(): Promise<any[]> {
//   await new Promise((resolve) => setTimeout(resolve, 200))
//   return events.filter((e) => e.featured).slice(0, 6)
// }

// // Upcoming events
// export async function getUpcomingEvents(): Promise<any[]> {
//   await new Promise((resolve) => setTimeout(resolve, 200))
//   const now = new Date()
//   return events
//     .filter((e) => new Date(e.date) > now && e.status === "PUBLISHED")
//     .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
//     .slice(0, 10)
// }

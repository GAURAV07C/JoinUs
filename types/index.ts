export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
  role: "USER" | "ORGANIZER" | "ADMIN";
  status: "PENDING" | "APPROVED" | "REJECTED" | "SUSPENDED";
  college?: string;
  department?: string;
  year?: string;
  createdAt: Date;
  updatedAt: Date;
  approvedAt?: Date;
  approvedBy?: string;
  rejectionReason?: string;
  suspensionReason?: string;
}

export interface Event {
  id: string;
  name: string;
  description: string;
  date: string;
  time: string;
  venue: string;
  city: string;
  state: string;
  address?: string;
  posterUrl?: string;
  type: "COLLEGE" | "PRIVATE";
  isPaid: boolean;
  price: number;
  maxAttendees: number;
  status: "DRAFT" | "PENDING" | "PUBLISHED" | "CANCELLED" | "COMPLETED" | "REJECTED";
  tags: string[];
  maxCapacity: number;
  registrationCount: number;
  imageUrl: string;
  requirements: string[];
  category: string;
  organizerId: string;
  organizer: {
    id: string;
    name: string;
    email: string;
    phone?: string;
    avatar?: string;
    college?: string;
  };
  currentAttendees?: number;
  reason?: string;
  createdAt: Date;
  updatedAt: Date;
  formFields?: any[];
}

export interface EventRegistration {
  id: string;
  userId: string;
  eventId: string;
  registeredAt: Date;
  status: "PENDING" | "CONFIRMED" | "CANCELLED" | "ATTENDED";
  qrCode: string;
  attendedAt?: Date;
  notes?: string;
}

export type UserRole = "USER" | "ORGANIZER" | "ADMIN";
export type UserStatus = "PENDING" | "APPROVED" | "REJECTED" | "SUSPENDED";
export type EventStatus = "DRAFT" | "PENDING" | "PUBLISHED" | "CANCELLED" | "COMPLETED" | "REJECTED";
export type RegistrationStatus = "PENDING" | "CONFIRMED" | "CANCELLED" | "ATTENDED";

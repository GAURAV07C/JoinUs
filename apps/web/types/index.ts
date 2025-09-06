export type UserRole = "USER" | "ORGANIZER" | "ADMIN";
export type UserStatus = "PENDING" | "APPROVED" | "REJECTED" | "SUSPENDED";
export type EventStatus =
  | "DRAFT"
  | "PENDING"
  | "PUBLISHED"
  | "CANCELLED"
  | "COMPLETED"
  | "REJECTED";
export type RegistrationStatus =
  | "PENDING"
  | "CONFIRMED"
  | "CANCELLED"
  | "ATTENDED";
export type EventType = "COLLEGE" | "PRIVATE";

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string | null; // ✅ allow null
  avatar?: string | null; // ✅ allow null
  role: UserRole;
  status: UserStatus;
  college?: string | null; // ✅ allow null
  department?: string | null;
  year?: string | null;
  createdAt: Date;
  updatedAt: Date;
  approvedAt?: Date | null;
  approvedBy?: string | null;
  rejectionReason?: string | null;
  suspensionReason?: string | null;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface Event {
  id: string;
  name: string;
  description: string;

  // Timing & Location
  date: string;
  time: string;
  venue: string;
  city: string;
  state: string;
  address?: string | null;

  // Details
  posterUrl?: string | null;
  type: EventType;
  isPaid: boolean;
  price: number;
  maxAttendees: number;

  // Status & Features
  status: EventStatus;
  featured: boolean;
  tags: string[];

  // Organizer
  organizerId: string;
  organizer: {
    id: string;
    name: string;
    email: string;
    phone?: string | null;
    avatar?: string | null;
    college?: string | null;
  };

  // Approval tracking
  rejectionReason?: string | null;

  currentAttendees?: number;

  // Timestamps
  createdAt: Date;
  updatedAt: Date;

  // Relations (optional if not included in query)
  registrations?: EventRegistration[];
  eventForm?: EventForm | null;
  formSubmissions?: FormSubmission[];
}

export interface EventRegistration {
  id: string;
  userId: string;
  eventId: string;
  status: RegistrationStatus;
  qrCode: string;
  attendedAt?: Date;
  notes?: string | null;
  registeredAt: Date;
  updatedAt: Date;

  // Relations
  user?: User; // make optional
  event?: Event; // make optional
}

export interface EventForm {
  id: string;

  eventId: string;
  label: string;
  fields: any; // JSON type
  placeholder?: string;
  required?: boolean;
  options?: string[];
  createdAt: Date;
  updatedAt: Date;

  // Relations
  event?: Event;
  submissions?: FormSubmission[];
}

export interface FormSubmission {
  id: string;
  formId: string;
  userId: string;
  eventId: string;
  data: any;
  submittedAt: Date;

  // Relations
  form?: EventForm;
  user?: User;
  event?: Event;
}


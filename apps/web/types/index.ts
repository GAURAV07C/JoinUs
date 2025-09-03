export type UserRole = "USER" | "ORGANIZER" | "ADMIN"
export type UserStatus = "PENDING" | "APPROVED" | "REJECTED" | "SUSPENDED"
export type EventStatus = "DRAFT" | "PENDING" | "PUBLISHED" | "CANCELLED" | "COMPLETED" | "REJECTED"
export type RegistrationStatus = "PENDING" | "CONFIRMED" | "CANCELLED" | "ATTENDED"

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


export interface Event {
  maxCapacity: number
  registrationCount: number
  imageUrl: string
  title: string
  id: string
  name: string
  description: string
  date: string
  time: string
  venue: string
  city: string
  state: string
  address?: string
  posterUrl?: string
  type: "COLLEGE" | "PRIVATE"
  isPaid: boolean
  price: number
  maxAttendees: number
  status: EventStatus
  featured?: boolean
  tags: string[]
  requirements: string[]
  category: string
  organizerId: string
  organizer: {
    [x: string]: any
    id: string
    name: string
    email: string
    phone?: string
    avatar?: string
    college?: string
  }
  currentAttendees?: number
  rejectionReason?: string
  createdAt: Date
  updatedAt: Date
  formFields?: FormField[]
}

export interface EventRegistration {
  id: string
  userId: string
  eventId: string
  registeredAt: Date
  status: RegistrationStatus
  qrCode: string
  attendedAt?: Date
  notes?: string
}

export interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
}

export interface FormField {
  id: string
  type: "text" | "email" | "tel" | "textarea" | "select" | "checkbox" | "radio" | "dropdown" | "file"
  label: string
  placeholder?: string
  required?: boolean
  options?: string[]
  validation?: {
    min?: number
    max?: number
    pattern?: string
    message?: string
  }
}

export interface EventForm {
  id: string
  eventId: string
  fields: FormField[]
  createdAt: Date
  updatedAt: Date
}

export interface FormSubmission {
  id: string
  formId: string
  userId: string
  eventId: string
  data: Record<string, any>
  submittedAt: Date
}

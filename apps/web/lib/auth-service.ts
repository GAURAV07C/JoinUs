
import type { UserRole } from "@/types";





export async function createUser(userData: {
  name: string;
  email: string;
  password: string;
  role: UserRole;
  college?: string;
  department?: string;
  year?: string;
  phone?: string;
}) {
  try {
  

    // Hash password
   

    
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
}






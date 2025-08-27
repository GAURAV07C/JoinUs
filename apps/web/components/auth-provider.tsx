// "use client";

// import type React from "react";
// import { createContext, useContext, useState, useEffect } from "react";
// import type { User } from "@/types";
// import { signIn, signOut, auth } from "@/auth";

// interface AuthContextType {
//   user: User | null;
//   isLoading: boolean;
//   login: (
//     email: string,
//     password: string
//   ) => Promise<{ success: boolean; error?: string }>;
//   signup: (userData: any) => Promise<{ success: boolean; error?: string }>;
//   logout: () => void;
//   setUser: (user: User | null) => void;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export function AuthProvider({ children }: { children: React.ReactNode }) {
//   const [user, setUser] = useState<User | null>(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // TODO: Replace with actual user session retrieval logic if needed
//     setUser(null);
//     setIsLoading(false);
//   }, []);

//   const login = async (email: string, password: string) => {
//     setIsLoading(true);
//     try {
//       const result = await signIn({ email, password });
//       if (result.success && result.user) {
//         setUser(result.user);
//         return { success: true };
//       } else {
//         return {
//           success: false,
//           error: "Login failed. Please check your credentials.",
//         };
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       return {
//         success: false,
//         error: "An unexpected error occurred during login. Please try again.",
//       };
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const signup = async (userData: any) => {
//     setIsLoading(true);
//     try {
//       // For now, we'll simulate signup since the actual implementation
//       // would require server actions or API calls
//       // TODO: Implement actual signup logic
//       console.warn("Signup functionality not fully implemented yet");
//       return {
//         success: false,
//         error: "Signup is currently unavailable. Please try again later.",
//       };
//     } catch (error) {
//       console.error("Signup error:", error);
//       return {
//         success: false,
//         error: "An unexpected error occurred during signup. Please try again.",
//       };
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const logout = () => {
//     try {
//       signOut();
//       setUser(null);
//     } catch (error) {
//       console.error("Logout error:", error);
//     }
//   };

//   return (
//     <AuthContext.Provider
//       value={{ user, isLoading, login, signup, logout, setUser }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export function useAuth() {
//   const context = useContext(AuthContext);
//   if (context === undefined) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// }

// "use client";

// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { signupAction } from "@/actions/auth";
// import { useState } from "react";
// import { toast } from "sonner";
// import { signupSchema, type SignupFormData as SignupData } from "@joinUs/validation/authTypes";

// interface RegistrationFormProps {
//   eventId?: string;
// }

// export function RegistrationForm({ eventId }: RegistrationFormProps) {
//   const [isLoading, setIsLoading] = useState(false);

//   const form = useForm<SignupData>({
//     resolver: zodResolver(signupSchema),
//     defaultValues: {
//       name: "",
//       email: "",
//       phone: "",
//       role: undefined,
//       college: "",
//       department: "",
//       year: "",
//       password: "",
//       confirmPassword: "",
//     },
//   });

//   const handleSubmit = async (data: SignupData) => {
//     setIsLoading(true);
//     try {
//       const formData = new FormData();
      
//       // Append all form data to FormData
//       Object.entries(data).forEach(([key, value]) => {
//         if (value !== undefined && value !== null) {
//           formData.append(key, value.toString());
//         }
//       });

//       if (eventId) {
//         formData.append("eventId", eventId);
//       }

//       await signupAction(formData);
//       toast.success("Registration successful! Please check your email for confirmation.");
//     } catch (error) {
//       console.error("Registration error:", error);
//       toast.error("Registration failed. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
//         {/* Name Field */}
//         <FormField
//           control={form.control}
//           name="name"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Full Name *</FormLabel>
//               <FormControl>
//                 <Input placeholder="Enter your full name" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         {/* Email Field */}
//         <FormField
//           control={form.control}
//           name="email"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Email *</FormLabel>
//               <FormControl>
//                 <Input type="email" placeholder="Enter your email" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         {/* Phone Field */}
//         <FormField
//           control={form.control}
//           name="phone"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Phone Number *</FormLabel>
//               <FormControl>
//                 <Input type="tel" placeholder="Enter your phone number" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         {/* Role Selection */}
//         <FormField
//           control={form.control}
//           name="role"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Role *</FormLabel>
//               <Select onValueChange={field.onChange} defaultValue={field.value}>
//                 <FormControl>
//                   <SelectTrigger>
//                     <SelectValue placeholder="Select your role" />
//                   </SelectTrigger>
//                 </FormControl>
//                 <SelectContent>
//                   <SelectItem value="USER">Student</SelectItem>
//                   <SelectItem value="ORGANIZER">Organizer</SelectItem>
//                   <SelectItem value="ADMIN">Admin</SelectItem>
//                 </SelectContent>
//               </Select>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         {/* College Field */}
//         <FormField
//           control={form.control}
//           name="college"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>College/Institution</FormLabel>
//               <FormControl>
//                 <Input placeholder="Enter your college/institution" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         {/* Department Field */}
//         <FormField
//           control={form.control}
//           name="department"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Department</FormLabel>
//               <FormControl>
//                 <Input placeholder="Enter your department" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         {/* Year Field */}
//         <FormField
//           control={form.control}
//           name="year"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Year of Study</FormLabel>
//               <FormControl>
//                 <Input placeholder="Enter your year of study" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         {/* Password Field */}
//         <FormField
//           control={form.control}
//           name="password"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Password *</FormLabel>
//               <FormControl>
//                 <Input type="password" placeholder="Create a password" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         {/* Confirm Password Field */}
//         <FormField
//           control={form.control}
//           name="confirmPassword"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Confirm Password *</FormLabel>
//               <FormControl>
//                 <Input type="password" placeholder="Confirm your password" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <Button type="submit" className="w-full" disabled={isLoading}>
//           {isLoading ? "Creating Account..." : "Create Account"}
//         </Button>
//       </form>
//     </Form>
//   );
// }

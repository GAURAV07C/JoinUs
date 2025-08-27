// "use server"

// import { signIn, signOut } from "@/auth"
// import { createUser } from "@/lib/auth-service"
// import { loginSchema, signupSchema } from "@/lib/validations"
// import { AuthError } from "next-auth"
// import { redirect } from "next/navigation"
// import { z } from "zod"

// export async function loginAction(prevState: any, formData: FormData) {
//   const rawData = {
//     email: formData.get("email"),
//     password: formData.get("password"),
//     role: formData.get("role"),
//   }

//   try {
//     const validatedData = loginSchema.parse(rawData)

//     await signIn("credentials", {
//       email: validatedData.email,
//       password: validatedData.password,
//     })

//     return { success: true, message: "Login successful" }
//   } catch (error) {
//     if (error instanceof AuthError) {
//       switch (error.type) {
//         case "CredentialsSignin":
//           return { success: false, message: "Invalid credentials" }
//         default:
//           return { success: false, message: "Something went wrong" }
//       }
//     }

//     if (error instanceof z.ZodError) {
//       return { success: false, message: "Invalid form data", errors: error.flatten().fieldErrors }
//     }

//     throw error
//   }
// }

// export async function signupAction(prevState: any, formData: FormData) {
//   const rawData = {
//     name: formData.get("name"),
//     email: formData.get("email"),
//     phone: formData.get("phone"),
//     role: formData.get("role"),
//     college: formData.get("college"),
//     department: formData.get("department"),
//     year: formData.get("year"),
//     password: formData.get("password"),
//     confirmPassword: formData.get("confirmPassword"),
//   }

//   try {
//     const validatedData = signupSchema.parse(rawData)

//     const user = await createUser({
//       name: validatedData.name,
//       email: validatedData.email,
//       password: validatedData.password,
//       role: validatedData.role,
//       college: validatedData.college,
//       department: validatedData.department,
//       year: validatedData.year,
//       phone: validatedData.phone,
//     })

//     // Auto-login admin users
//     if (user.role === "ADMIN") {
//       await signIn("credentials", {
//         email: validatedData.email,
//         password: validatedData.password,
//       })
//     }

//     return { success: true, message: "Account created successfully", user }
//   } catch (error) {
//     if (error instanceof Error) {
//       return { success: false, message: error.message }
//     }

//     if (error instanceof z.ZodError) {
//       return { success: false, message: "Invalid form data", errors: error.flatten().fieldErrors }
//     }

//     return { success: false, message: "Something went wrong" }
//   }
// }

// export async function logoutAction() {
//   await signOut({ redirect: false })
//   redirect("/")
// }

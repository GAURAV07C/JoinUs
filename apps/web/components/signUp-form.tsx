"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Eye, EyeOff, ArrowLeft, UserPlus } from "lucide-react";

import {
  signupSchema,
  type SignupFormData,
} from "@joinUs/validation/authTypes";
import { signupAction } from "@/actions/auth";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { signInWithGoogle } from "@/lib/social-auth";
import { FcGoogle } from "react-icons/fc";
import FormError from "./form-error";
import FormSucess from "./form-sucess";

export function SignupForm() {
  const searchParams = useSearchParams();
  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "Email is Already in use with Different Provided"
      : "";

  const [error, setError] = useState<string | undefined>("");
  const [sucess, setSucess] = useState<string | undefined>("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      role: "USER",
      name: "",
      email: "",
      phone: "",
      college: "",
      department: "",
      year: "",
      password: "",
      confirmPassword: "",
    },
  });

  const selectedRole = form.watch("role");

  const handleSubmit = async (data: SignupFormData) => {
    setIsLoading(true);
    setError("");
    setSucess("");
    try {
      const res = await signupAction(data);

      if (res.success) {
        toast.success("🎉 Account created successfully!", {
          description: "Redirecting to login page...",
          duration: 2500,
        });

        form.reset();
        setTimeout(() => router.push("/dashboard"), 1000);
      } else {
        toast.error("Signup failed", {
          description: res.message ?? "Please try again later.",
          duration: 3000,
        });
      }
    } catch (error) {
      toast.error("Something went wrong", {
        description: "Please check your connection and try again.",
        duration: 3000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-cyan-50 to-teal-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <div className="flex items-center justify-center mb-4">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 flex items-center justify-center">
              <span className="text-white font-bold text-xl">JU</span>
            </div>
          </div>

          <h1 className="text-3xl font-bold bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-transparent">
            Create Your Account
          </h1>
          <p className="text-muted-foreground mt-2">
            Join us and start exploring events today!
          </p>
        </div>

        <Card className="border-0 shadow-xl">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">
              Create Account
            </CardTitle>
            <CardDescription className="text-center">
              Fill in the details below to sign up
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <Button
              type="button"
              variant="outline"
              className="w-full h-11 bg-white hover:bg-slate-50 flex items-center justify-center gap-2"
              onClick={() => signInWithGoogle("/dashboard")}
            >
              <FcGoogle className="h-5 w-5" />
              Continue with Google
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or create with email
                </span>
              </div>
            </div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="space-y-4"
              >
                {/* Name */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Phone */}
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your phone number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Role */}
                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Role</FormLabel>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="USER">Student</SelectItem>
                          <SelectItem value="ORGANIZER">
                            Event Organizer
                          </SelectItem>
                          <SelectItem value="ADMIN">Administrator</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {(selectedRole === "USER" || selectedRole === "ORGANIZER") && (
                  <>
                    {/* College */}
                    <FormField
                      control={form.control}
                      name="college"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>College/University</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your college name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Department */}
                    <FormField
                      control={form.control}
                      name="department"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Department</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your department"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {selectedRole === "USER" && (
                      <FormField
                        control={form.control}
                        name="year"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Year of Study</FormLabel>
                            <Select
                              value={field.value}
                              onValueChange={field.onChange}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select your year" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="1st Year">
                                  1st Year
                                </SelectItem>
                                <SelectItem value="2nd Year">
                                  2nd Year
                                </SelectItem>
                                <SelectItem value="3rd Year">
                                  3rd Year
                                </SelectItem>
                                <SelectItem value="4th Year">
                                  4th Year
                                </SelectItem>
                                <SelectItem value="Graduate">
                                  Graduate
                                </SelectItem>
                                <SelectItem value="Post Graduate">
                                  Post Graduate
                                </SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}
                  </>
                )}

                {/* Password */}
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="Create a password"
                            {...field}
                            className="pr-10"
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                            onClick={() => setShowPassword((prev) => !prev)}
                          >
                            {showPassword ? (
                              <EyeOff className="h-4 w-4" />
                            ) : (
                              <Eye className="h-4 w-4" />
                            )}
                          </Button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Confirm Password */}
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirm your password"
                            {...field}
                            className="pr-10"
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                            onClick={() =>
                              setShowConfirmPassword((prev) => !prev)
                            }
                          >
                            {showConfirmPassword ? (
                              <EyeOff className="h-4 w-4" />
                            ) : (
                              <Eye className="h-4 w-4" />
                            )}
                          </Button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormError message={error || urlError} />
                <FormSucess message={sucess} />

                {/* Submit */}
                <Button
                  type="submit"
                  className="w-full h-11 bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <motion.div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <UserPlus className="mr-2 h-4 w-4" />
                      Create Account
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>

          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link
                href="/auth/login"
                className="text-primary hover:underline font-medium"
              >
                Sign In
              </Link>
            </p>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}

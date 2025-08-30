"use client";

import { startTransition, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { ArrowLeft, Eye, EyeOff, LogIn } from "lucide-react";

import { loginSchema, type LoginFormData } from "@joinUs/validation/authTypes";
import { loginAction } from "@/actions/auth";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
} from "@joinUs/ui/components/card";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

import { useSearchParams } from "next/navigation";

import { signInWithGoogle } from "@/lib/social-auth";
import { FcGoogle } from "react-icons/fc";
import FormError from "./form-error";
import FormSucess from "./form-sucess";

export function LoginForm() {
  const searchParams = useSearchParams();
  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "Email is Already in use with Different Provided"
      : "";

  const [error, setError] = useState<string | undefined>("");
  const [sucess, setSucess] = useState<string | undefined>("");

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // ✅ Use form object instead of just control
  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      role: undefined,
      email: "",
      password: "",
    },
  });

  const handleSubmitFn = async (data: LoginFormData) => {
    setIsLoading(true);
    setError("");
    setSucess("");

    try {
      // ✅ Await loginAction result
      const res = await loginAction(data);

      // ✅ Show toast based on result
      if (res.success) {
        toast.success(res.message);
        setSucess("Success");
        form.reset();

        // Redirect after short delay
        setTimeout(() => router.push("/dashboard"), 1000);
      } else {
        toast.error(res.message);
        setError(res.message);
        form.setValue("password", ""); // clear password on error
      }
    } catch (err) {
      console.error("Unexpected login error:", err);
      toast.error("Something went wrong, please try again later.");
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
            Welcome Back
          </h1>
          <p className="text-muted-foreground mt-2">
            Sign in to your JoinUs account
          </p>
        </div>

        {/* Card */}
        <Card className="border-0 shadow-xl">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">Sign In</CardTitle>
            <CardDescription className="text-center">
              Enter your credentials to access your account
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
                  Or sign in with email
                </span>
              </div>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleSubmitFn)}
                className="space-y-4"
              >
                {/* Role Field */}
                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Role</FormLabel>
                      <Select
                        value={field.value}
                        onValueChange={(value) =>
                          field.onChange(
                            value as "USER" | "ORGANIZER" | "ADMIN"
                          )
                        }
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

                {/* Email Field */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Password Field */}
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
                            placeholder="Enter your password"
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
                <FormError message={error || urlError} />
                <FormSucess message={sucess} />
                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full h-11 bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <motion.div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <LogIn className="mr-2 h-4 w-4" />
                      Sign In
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>

          {/* Footer */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link
                href="/auth/signup"
                className="text-primary hover:underline font-medium"
              >
                Sign up
              </Link>
            </p>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}

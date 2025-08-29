import { SignupForm } from "@/components/signUp-form";

export default function SignupPage() {
  return (
    <div className="max-w-md mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Create an Account</h1>
      <SignupForm />
    </div>
  );
}

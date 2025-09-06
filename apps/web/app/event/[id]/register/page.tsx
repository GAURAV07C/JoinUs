"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Progress } from "@/components/ui/progress";
import { FormBuilder } from "@/components/form-builder";
import { LoadingAnimation } from "@/components/loading-animation";
import { useEventQuery } from "@/hooks/useEventsQuery";
import { ArrowLeft, CheckCircle } from "lucide-react";

export default function EventRegistrationPage() {
  const params = useParams();
  const router = useRouter();
  const eventId = params.id as string;
  const { data: event, isLoading, error } = useEventQuery(eventId);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitProgress, setSubmitProgress] = useState(0);

  const handleSubmit = async (formData: Record<string, any>) => {
    setIsSubmitting(true);
    setSubmitProgress(0);

    // Simulate progress steps
    const steps = [
      { progress: 25, text: "Validating information" },
      { progress: 50, text: "Processing registration" },
      { progress: 75, text: "Generating QR code" },
      { progress: 100, text: "Registration complete" },
    ];

    for (const step of steps) {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setSubmitProgress(step.progress);
    }

    // Final delay before redirect
    await new Promise((resolve) => setTimeout(resolve, 500));

    setIsSubmitting(false);
    router.push(`/event/${eventId}/qr`);
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Skeleton className="h-8 w-64 mb-6" />
        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-48" />
          </CardHeader>
          <CardContent className="space-y-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="space-y-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-10 w-full" />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    );
  }

  if (error || !event) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-destructive">Event not found.</p>
          <Button asChild className="mt-4">
            <Link href="/">Back to Events</Link>
          </Button>
        </div>
      </div>
    );
  }

  if (isSubmitting) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5">
        <Card className="w-full max-w-md border-0 shadow-2xl">
          <CardContent className="p-8">
            <LoadingAnimation text="Registering you for the event" />
            <div className="mt-6 space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progress</span>
                <span>{submitProgress}%</span>
              </div>
              <Progress value={submitProgress} className="h-2" />
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link href={`/event/${eventId}`}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Event
            </Link>
          </Button>
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Register for{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {event.name}
              </span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Fill out the form below to complete your registration
            </p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-2">
              <CardTitle className="flex items-center justify-center gap-2">
                <CheckCircle className="w-6 h-6 text-primary" />
                Registration Form
              </CardTitle>
              {event.isPaid && (
                <p className="text-sm text-muted-foreground">
                  Registration fee:{" "}
                  <span className="font-semibold text-primary">
                    ₹{event.price}
                  </span>
                </p>
              )}
            </CardHeader>
            <CardContent className="p-8">
              <FormBuilder
                fields={event.formFields}
                onSubmit={handleSubmit}
                isLoading={isSubmitting}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

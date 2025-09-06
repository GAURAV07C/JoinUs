"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createEventAction } from "@/actions/test";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

export default function CreateEventPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [eventType, setEventType] = useState("COLLEGE");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const result = await createEventAction(formData);

    if (result.success) {
      toast.success("Event created successfully!");
      router.push("/dashboard/events");
    } else {
      toast.error(result.message);
      if (result.errors) {
        for (const [field, messages] of Object.entries(result.errors)) {
          toast.error(`${field}: ${messages?.join(", ")}`);
        }
      }
      console.error(result.errors || result.message);
    }

    setLoading(false);
  }

  return (
    <div className="max-w-xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Create Event</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label>Name</Label>
          <Input name="name" required />
        </div>

        <div>
          <Label>Description</Label>
          <Textarea name="description" required />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>Date</Label>
            <Input name="date" type="date" required />
          </div>
          <div>
            <Label>Time</Label>
            <Input name="time" type="time" required />
          </div>
        </div>

        <div>
          <Label>Venue</Label>
          <Input name="venue" required />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>City</Label>
            <Input name="city" required />
          </div>
          <div>
            <Label>State</Label>
            <Input name="state" required />
          </div>
        </div>

        <div>
          <Label>Address (Optional)</Label>
          <Input name="address" />
        </div>

        <div>
          <Label>Max Attendees</Label>
          <Input name="maxAttendees" type="number" min="1" required />
        </div>

        <div>
          <Label>Event Type</Label>
          <Select value={eventType} onValueChange={setEventType}>
            <SelectTrigger>
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="COLLEGE">College</SelectItem>
              <SelectItem value="PRIVATE">Private</SelectItem>
            </SelectContent>
          </Select>
          <input type="hidden" name="type" value={eventType} />
        </div>

        <div>
          <Label>Price (₹)</Label>
          <Input name="price" type="number" min="0" defaultValue="0" />
        </div>

        <Button type="submit" disabled={loading} className="w-full">
          {loading ? "Creating..." : "Create Event"}
        </Button>
      </form>
    </div>
  );
}

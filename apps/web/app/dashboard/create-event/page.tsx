"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Plus, Trash2, Upload } from "lucide-react";
import { toast } from "sonner";

import {useCreateEvent} from "@/hooks/use-events"

type EventForm = {
  id: string;
  label: string;
  fields: "text" | "email" | "dropdown" | "file";
  required: boolean;
  options?: string[];
};

export default function CreateEventPage() {
  const { mutateAsync: createEvent } = useCreateEvent();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [eventData, setEventData] = useState({
    name: "",
    description: "",
    date: "",
    time: "",
    venue: "",
    city: "",
    state: "",
    maxAttendees: 0,
    type: "COLLEGE" as "COLLEGE" | "PRIVATE",
    isPaid: false,
    price: 0,
  });


  const [formFields, setFormFields] = useState<EventForm[]>([
    {
      id: "name",
      label: "Full Name",
      fields: "text",
      required: true,
    },
    {
      id: "email",
      label: "Email Address",
      fields: "email",
      required: true,
    },
  ]);

  const [newField, setNewField] = useState<Partial<EventForm>>({
    label: "",
    fields: "text",
    required: false,
    options: [],
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append("name", eventData.name);
      formData.append("description", eventData.description);
      formData.append("date", eventData.date);
      formData.append("time", eventData.time);
      formData.append("venue", eventData.venue);
      formData.append("price", String(eventData.price ?? 0));
      formData.append("requirements", JSON.stringify(formFields ?? []));
      formData.append("city", eventData.city);
      formData.append("state", eventData.state);
      formData.append("maxCapacity", String(eventData.maxAttendees));
      formData.append("category", eventData.type);

      console.log("Submitting event data:", Object.fromEntries(formData));

      await createEvent(formData);

      router.push("/dashboard/my-events");
    } catch (error) {
      console.error("Event creation failed:", error);
      toast.error("Failed to create event");
    } finally {
      setIsLoading(false);
    }
  };

  const addFormField = () => {
    if (!newField.label) return;

    const field: EventForm = {
      id: newField.label!.toLowerCase().replace(/\s+/g, "_"),
      label: newField.label!,
      fields: newField.fields || "text",
      required: newField.required || false,
      options: newField.fields === "dropdown" ? newField.options : undefined,
    };

    setFormFields([...formFields, field]);
    setNewField({
      label: "",
      fields: "text",
      required: false,
      options: [],
    });
  };

  const removeFormField = (index: number) => {
    if (index < 2) return; // Don't allow removing name and email
    setFormFields(formFields.filter((_, i) => i !== index));
  };

  const addOption = () => {
    if (!newField.options) {
      setNewField({ ...newField, options: [""] });
    } else {
      setNewField({
        ...newField,
        options: [...newField.options, ""],
      });
    }
  };

  const updateOption = (index: number, value: string) => {
    if (!newField.options) return;
    const updatedOptions = [...newField.options];
    updatedOptions[index] = value;
    setNewField({ ...newField, options: updatedOptions });
  };

  const removeOption = (index: number) => {
    if (!newField.options) return;
    setNewField({
      ...newField,
      options: newField.options.filter((_: any, i: number) => i !== index),
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Create New Event</h1>
        <p className="text-muted-foreground">
          Fill out the details to create your event
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-8">
        {/* Basic Information */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Event Name *</Label>
                <Input
                  id="name"
                  value={eventData.name}
                  onChange={(e) =>
                    setEventData({ ...eventData, name: e.target.value })
                  }
                  placeholder="Enter event name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="type">Event Type *</Label>
                <Select
                  value={eventData.type}
                  onValueChange={(value: "COLLEGE" | "PRIVATE") =>
                    setEventData({ ...eventData, type: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="COLLEGE">College</SelectItem>
                    <SelectItem value="PRIVATE">Private</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description *</Label>
              <Textarea
                id="description"
                value={eventData.description}
                onChange={(e) =>
                  setEventData({ ...eventData, description: e.target.value })
                }
                placeholder="Describe your event"
                rows={4}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="date">Date *</Label>
                <Input
                  id="date"
                  type="date"
                  value={eventData.date}
                  onChange={(e) =>
                    setEventData({ ...eventData, date: e.target.value })
                  }
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="time">Time *</Label>
                <Input
                  id="time"
                  type="time"
                  value={eventData.time}
                  onChange={(e) =>
                    setEventData({ ...eventData, time: e.target.value })
                  }
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="venue">Venue *</Label>
                <Input
                  id="venue"
                  value={eventData.venue}
                  onChange={(e) =>
                    setEventData({ ...eventData, venue: e.target.value })
                  }
                  placeholder="Event venue"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="city">City *</Label>
                <Input
                  id="city"
                  value={eventData.city ?? ""}
                  onChange={(e) =>
                    setEventData({ ...eventData, city: e.target.value })
                  }
                  placeholder="Enter city"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="state">State *</Label>
                <Input
                  id="state"
                  value={eventData.state ?? ""}
                  onChange={(e) =>
                    setEventData({ ...eventData, state: e.target.value })
                  }
                  placeholder="Enter state"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="capacity">Max Attendees *</Label>
                <Input
                  id="capacity"
                  type="number"
                  value={eventData.maxAttendees ?? ""}
                  onChange={(e) =>
                    setEventData({
                      ...eventData,
                      maxAttendees: Number(e.target.value),
                    })
                  }
                  placeholder="100"
                  min="1"
                  required
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Event Poster</Label>
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                  <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground mb-2">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-sm text-muted-foreground">
                    PNG, JPG up to 10MB
                  </p>
                  <Button
                    type="button"
                    variant="outline"
                    className="mt-4 bg-transparent"
                  >
                    Choose File
                  </Button>
                  
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Pricing */}
        <Card>
          <CardHeader>
            <CardTitle>Pricing</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center space-x-2">
              <Switch
                id="paid"
                checked={eventData.isPaid}
                onCheckedChange={(checked) =>
                  setEventData({
                    ...eventData,
                    isPaid: checked,
                    price: checked ? eventData.price : 0,
                  })
                }
              />
              <Label htmlFor="paid">This is a paid event</Label>
            </div>

            {eventData.isPaid && (
              <div className="space-y-2">
                <Label htmlFor="price">Registration Fee (₹)</Label>
                <Input
                  id="price"
                  type="number"
                  value={eventData.price}
                  onChange={(e) =>
                    setEventData({
                      ...eventData,
                      price: Number(e.target.value),
                    })
                  }
                  placeholder="0"
                  min="0"
                />
              </div>
            )}
          </CardContent>
        </Card>

        {/* Registration Form Builder */}
        <Card>
          <CardHeader>
            <CardTitle>Registration Form</CardTitle>
            <p className="text-sm text-muted-foreground">
              Customize the registration form for your event
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Existing Fields */}
            <div className="space-y-4">
              <h4 className="font-medium">Form Fields</h4>
              {formFields.map((field, index) => (
                <div
                  key={field.id}
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="font-medium">{field.label}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Badge variant="outline">{field.fields}</Badge>
                        {field.required && (
                          <Badge variant="secondary">Required</Badge>
                        )}
                      </div>
                    </div>
                  </div>
                  {index >= 2 && (
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => removeFormField(index)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
            </div>

            <Separator />

            {/* Add New Field */}
            <div className="space-y-4">
              <h4 className="font-medium">Add New Field</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Field Label</Label>
                  <Input
                    value={newField.label}
                    onChange={(e) =>
                      setNewField({ ...newField, label: e.target.value })
                    }
                    placeholder="Enter field label"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Field Type</Label>
                  <Select
                    value={newField.fields}
                    onValueChange={(
                      value: "text" | "email" | "dropdown" | "file"
                    ) => setNewField({ ...newField, fields: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="text">Text</SelectItem>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="dropdown">Dropdown</SelectItem>
                      <SelectItem value="file">File Upload</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="required"
                  checked={newField.required}
                  onCheckedChange={(checked) =>
                    setNewField({ ...newField, required: checked })
                  }
                />
                <Label htmlFor="required">Required field</Label>
              </div>

              {newField.fields === "dropdown" && (
                <div className="space-y-2">
                  <Label>Options</Label>
                  {newField.options?.map(
                    (
                      option: string | number | readonly string[] | undefined,
                      index: number
                    ) => (
                      <div key={index} className="flex gap-2">
                        <Input
                          value={option}
                          onChange={(e) => updateOption(index, e.target.value)}
                          placeholder={`Option ${index + 1}`}
                        />
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => removeOption(index)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    )
                  )}
                  <Button type="button" variant="outline" onClick={addOption}>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Option
                  </Button>
                </div>
              )}

              <Button
                type="button"
                onClick={addFormField}
                disabled={!newField.fields}
              >
                <Plus className="mr-2 h-4 w-4" />
                Add Field
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Submit */}
        <div className="flex gap-4">
          <Button type="submit" disabled={isLoading} className="flex-1">
            {isLoading ? "Creating Event..." : "Create Event"}
          </Button>
          <Button type="button" variant="outline">
            Save as Draft
          </Button>
        </div>
      </form>
    </div>
  );
}

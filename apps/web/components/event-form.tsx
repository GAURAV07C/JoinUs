"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from "@/components/ui/form"

import { useState } from "react"
import { toast } from "sonner"
import type { FormField as EventFormField } from "@/types"
import { createEventAction } from "@/lib/events"

const eventSchema = z.object({
  name: z.string().min(1, "Event name is required"),
  description: z.string().min(1, "Description is required"),
  date: z.string().min(1, "Date is required"),
  time: z.string().min(1, "Time is required"),
  venue: z.string().min(1, "Venue is required"),
  type: z.enum(["COLLEGE", "PRIVATE"]),
  isPaid: z.boolean(),
  price: z.number().min(0),
})

type EventFormData = z.infer<typeof eventSchema>

interface EventFormProps {
  formFields: EventFormField[]
  onFormFieldsChange: (fields: EventFormField[]) => void
}

export function EventForm({ formFields, onFormFieldsChange }: EventFormProps) {
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<EventFormData>({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      type: "COLLEGE",
      isPaid: false,
      price: 0,
    },
  })

  const isPaid = form.watch("isPaid")

  const handleSubmit = async (data: EventFormData) => {
    setIsLoading(true)
    try {
      const formData = new FormData()
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value.toString())
      })
      formData.append("formFields", JSON.stringify(formFields))

      await createEventAction(formData)
      toast.success("Event created successfully!")
    } catch (error) {
      toast.error("Failed to create event. Please try again.")
      setIsLoading(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Event Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter event name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Event Type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="COLLEGE">College</SelectItem>
                    <SelectItem value="PRIVATE">Private</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Describe your event" rows={4} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="time"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Time</FormLabel>
                <FormControl>
                  <Input type="time" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="venue"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Venue</FormLabel>
                <FormControl>
                  <Input placeholder="Event venue" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="space-y-4">
          <FormField
            control={form.control}
            name="isPaid"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <FormLabel className="text-base">Paid Event</FormLabel>
                  <FormDescription>Enable this if your event requires a registration fee</FormDescription>
                </div>
                <FormControl>
                  <Switch checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
              </FormItem>
            )}
          />

          {isPaid && (
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Registration Fee (₹)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="0"
                      min="0"
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
        </div>

        <Button type="submit" disabled={isLoading} className="w-full">
          {isLoading ? "Creating Event..." : "Create Event"}
        </Button>
      </form>
    </Form>
  )
}

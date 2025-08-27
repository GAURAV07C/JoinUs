"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from "@/components/ui/form"
import { Badge } from "@/components/ui/badge"
import { eventSchema, type EventFormData } from "@/lib/validations"
import { useCreateEvent, useUpdateEvent } from "@/hooks/use-events"
import { useState } from "react"
import { X, Plus, Loader2 } from "lucide-react"
import type { Event } from "@/types"

interface ModernEventFormProps {
  event?: Event
  onSuccess?: () => void
}

export function ModernEventForm({ event, onSuccess }: ModernEventFormProps) {
  const [tags, setTags] = useState<string[]>(event?.tags || [])
  const [requirements, setRequirements] = useState<string[]>(event?.requirements || [])
  const [newTag, setNewTag] = useState("")
  const [newRequirement, setNewRequirement] = useState("")

  const createEventMutation = useCreateEvent()
  const updateEventMutation = useUpdateEvent()

  const form = useForm<EventFormData>({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      title: event?.title || "",
      description: event?.description || "",
      date: event?.date || "",
      time: event?.time || "",
      venue: event?.venue || "",
      category: event?.category || "",
      maxCapacity: event?.maxCapacity || 50,
      price: event?.price || 0,
      tags: event?.tags || [],
      requirements: event?.requirements || [],
    },
  })

  const isLoading = createEventMutation.isPending || updateEventMutation.isPending

  const onSubmit = (data: EventFormData) => {
    const formData = new FormData()
    Object.entries(data).forEach(([key, value]) => {
      if (key === "tags" || key === "requirements") {
        formData.append(key, JSON.stringify(value))
      } else {
        formData.append(key, value.toString())
      }
    })

    if (event) {
      updateEventMutation.mutate(
        { eventId: event.id, formData },
        {
          onSuccess: () => {
            onSuccess?.()
          },
        },
      )
    } else {
      createEventMutation.mutate(formData, {
        onSuccess: () => {
          form.reset()
          setTags([])
          setRequirements([])
          onSuccess?.()
        },
      })
    }
  }

  const addTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      const updatedTags = [...tags, newTag.trim()]
      setTags(updatedTags)
      form.setValue("tags", updatedTags)
      setNewTag("")
    }
  }

  const removeTag = (tagToRemove: string) => {
    const updatedTags = tags.filter((tag) => tag !== tagToRemove)
    setTags(updatedTags)
    form.setValue("tags", updatedTags)
  }

  const addRequirement = () => {
    if (newRequirement.trim() && !requirements.includes(newRequirement.trim())) {
      const updatedRequirements = [...requirements, newRequirement.trim()]
      setRequirements(updatedRequirements)
      form.setValue("requirements", updatedRequirements)
      setNewRequirement("")
    }
  }

  const removeRequirement = (requirementToRemove: string) => {
    const updatedRequirements = requirements.filter((req) => req !== requirementToRemove)
    setRequirements(updatedRequirements)
    form.setValue("requirements", updatedRequirements)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Event Title</FormLabel>
                <FormControl>
                  <Input placeholder="Enter event title" {...field} disabled={isLoading} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value} disabled={isLoading}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Technology">Technology</SelectItem>
                    <SelectItem value="Business">Business</SelectItem>
                    <SelectItem value="Arts">Arts</SelectItem>
                    <SelectItem value="Sports">Sports</SelectItem>
                    <SelectItem value="Education">Education</SelectItem>
                    <SelectItem value="Health">Health</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
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
                <Textarea placeholder="Describe your event" rows={4} {...field} disabled={isLoading} />
              </FormControl>
              <FormDescription>Provide a detailed description of your event (10-1000 characters)</FormDescription>
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
                  <Input type="date" {...field} disabled={isLoading} />
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
                  <Input type="time" {...field} disabled={isLoading} />
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
                  <Input placeholder="Event venue" {...field} disabled={isLoading} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="maxCapacity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Maximum Capacity</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="50"
                    min="1"
                    max="10000"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                    disabled={isLoading}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

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
                    max="100000"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                    disabled={isLoading}
                  />
                </FormControl>
                <FormDescription>Set to 0 for free events</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Tags Section */}
        <div className="space-y-4">
          <FormLabel>Tags</FormLabel>
          <div className="flex gap-2">
            <Input
              placeholder="Add a tag"
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
              disabled={isLoading}
            />
            <Button type="button" onClick={addTag} disabled={isLoading}>
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                {tag}
                <X className="h-3 w-3 cursor-pointer" onClick={() => removeTag(tag)} />
              </Badge>
            ))}
          </div>
        </div>

        {/* Requirements Section */}
        <div className="space-y-4">
          <FormLabel>Requirements</FormLabel>
          <div className="flex gap-2">
            <Input
              placeholder="Add a requirement"
              value={newRequirement}
              onChange={(e) => setNewRequirement(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addRequirement())}
              disabled={isLoading}
            />
            <Button type="button" onClick={addRequirement} disabled={isLoading}>
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {requirements.map((requirement) => (
              <Badge key={requirement} variant="outline" className="flex items-center gap-1">
                {requirement}
                <X className="h-3 w-3 cursor-pointer" onClick={() => removeRequirement(requirement)} />
              </Badge>
            ))}
          </div>
        </div>

        <Button type="submit" disabled={isLoading} className="w-full">
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              {event ? "Updating Event..." : "Creating Event..."}
            </>
          ) : event ? (
            "Update Event"
          ) : (
            "Create Event"
          )}
        </Button>
      </form>
    </Form>
  )
}

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Calendar, Download, QrCode, Share2, CheckCircle, Smartphone } from "lucide-react"
import { toast } from "sonner"

interface QRDisplayProps {
  eventName: string
  eventDate: string
  eventTime: string
  venue: string
}

export function QRDisplay({ eventName, eventDate, eventTime, venue }: QRDisplayProps) {
  const [isDownloading, setIsDownloading] = useState(false)
  const [isAddingToCalendar, setIsAddingToCalendar] = useState(false)

  const handleDownloadQR = async () => {
    setIsDownloading(true)
    // Simulate download process
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsDownloading(false)
    toast.success("QR Code downloaded to your device!")
  }

  const handleAddToCalendar = async () => {
    setIsAddingToCalendar(true)
    // Simulate calendar integration
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsAddingToCalendar(false)
    toast.success("Event added to your calendar!")
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: eventName,
          text: `I'm attending ${eventName}!`,
          url: window.location.href,
        })
      } catch (error) {
        // Handle user cancellation or permission denied
        if (error instanceof Error && error.name !== "AbortError") {
          console.error("Share failed:", error)
          // Fallback to clipboard copy if share fails
          try {
            await navigator.clipboard.writeText(window.location.href)
            toast.success("Event link copied to clipboard!")
          } catch (clipboardError) {
            console.error("Clipboard fallback failed:", clipboardError)
            toast.error("Unable to share. Please copy the URL manually.")
          }
        }
        // If AbortError (user cancelled), do nothing
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      try {
        await navigator.clipboard.writeText(window.location.href)
        toast.success("Event link copied to clipboard!")
      } catch (error) {
        console.error("Clipboard access failed:", error)
        toast.error("Unable to copy link. Please copy the URL manually from your browser.")
      }
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const formatTime = (timeString: string) => {
    return new Date(`2000-01-01T${timeString}`).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })
  }

  return (
    <div className="max-w-md mx-auto space-y-6">
      {/* Success Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 animate-pulse">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-green-600 mb-2">Registration Confirmed!</h1>
          <p className="text-muted-foreground">Your ticket is ready. Save it for event entry.</p>
        </div>
      </div>

      <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm">
        <CardHeader className="text-center pb-4">
          <CardTitle className="text-xl">{eventName}</CardTitle>
          <div className="space-y-1 text-muted-foreground">
            <p className="font-medium">
              {formatDate(eventDate)} at {formatTime(eventTime)}
            </p>
            <p>{venue}</p>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* QR Code Display */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-dashed border-primary/30 rounded-2xl flex items-center justify-center animate-pulse">
                <div className="text-center">
                  <QrCode className="h-20 w-20 mx-auto mb-3 text-primary" />
                  <p className="text-sm font-medium text-primary">Your Entry Ticket</p>
                  <p className="text-xs text-muted-foreground mt-1">Show this at the venue</p>
                </div>
              </div>

              {/* Animated Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-primary/20 animate-ping"></div>
            </div>
          </div>

          {/* Instructions */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <Smartphone className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div className="text-sm">
                <p className="font-medium text-blue-800 mb-1">How to use your ticket:</p>
                <ul className="text-blue-700 space-y-1">
                  <li>• Save this QR code to your phone</li>
                  <li>• Show it at the event entrance</li>
                  <li>• Keep your phone charged on event day</li>
                </ul>
              </div>
            </div>
          </div>

          <Separator />

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button
              onClick={handleAddToCalendar}
              variant="outline"
              className="w-full h-12 bg-transparent border-2 hover:bg-primary hover:text-white hover:border-primary"
              disabled={isAddingToCalendar}
            >
              <Calendar className="mr-2 h-5 w-5" />
              {isAddingToCalendar ? "Adding to Calendar..." : "Add to Calendar"}
            </Button>

            <Button
              onClick={handleDownloadQR}
              className="w-full h-12 bg-primary hover:bg-primary/90"
              disabled={isDownloading}
            >
              <Download className="mr-2 h-5 w-5" />
              {isDownloading ? "Downloading..." : "Download QR Code"}
            </Button>

            <Button
              onClick={handleShare}
              variant="outline"
              className="w-full h-12 bg-transparent border-2 hover:bg-secondary hover:text-white hover:border-secondary"
            >
              <Share2 className="mr-2 h-5 w-5" />
              Share Event
            </Button>
          </div>

          {/* Event Details Summary */}
          <div className="bg-gray-50 rounded-lg p-4 space-y-2">
            <h4 className="font-medium text-sm text-gray-800">Event Summary</h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
              <div>
                <span className="font-medium">Date:</span>
                <p>{formatDate(eventDate)}</p>
              </div>
              <div>
                <span className="font-medium">Time:</span>
                <p>{formatTime(eventTime)}</p>
              </div>
              <div className="col-span-2">
                <span className="font-medium">Venue:</span>
                <p>{venue}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Additional Info */}
      <div className="text-center text-sm text-muted-foreground">
        <p>Need help? Contact the event organizer or visit our help center.</p>
      </div>
    </div>
  )
}

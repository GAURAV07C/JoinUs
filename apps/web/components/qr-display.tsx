"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Calendar,
  Download,
  QrCode,
  Share2,
  CheckCircle,
  Smartphone,
} from "lucide-react";
import { toast } from "sonner";
import { QRCodeSVG } from "QRCode.react"; // add this package

interface QRDisplayProps {
  eventId : string;
  eventName: string;
  eventDate: string;
  eventTime: string;
  venue: string;
  registrationId: string; // new prop
}

export function QRDisplay({
  eventId,
  eventName,
  eventDate,
  eventTime,
  venue,
  registrationId,
}: QRDisplayProps) {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isAddingToCalendar, setIsAddingToCalendar] = useState(false);

  const handleDownloadQR = async () => {
    setIsDownloading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsDownloading(false);
    toast.success("QR Code downloaded to your device!");
  };

  const handleAddToCalendar = async () => {
    setIsAddingToCalendar(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsAddingToCalendar(false);
    toast.success("Event added to your calendar!");
  };

 const handleShare = async () => {
   const baseEventURL = `${window.location.origin}/event/${eventId}`; // fixed URL

   if (navigator.share) {
     try {
       await navigator.share({
         title: eventName,
         text: `I'm attending ${eventName}!`,
         url: baseEventURL,
       });
     } catch (error) {
       await navigator.clipboard.writeText(baseEventURL);
       toast.success("Event link copied to clipboard!");
     }
   } else {
     await navigator.clipboard.writeText(baseEventURL);
     toast.success("Event link copied to clipboard!");
   }
 };


  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  const formatTime = (timeString: string) =>
    new Date(`2000-01-01T${timeString}`).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

  return (
    <div className="max-w-md mx-auto space-y-6">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 animate-pulse">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-green-600 mb-2">
            Registration Confirmed!
          </h1>
          <p className="text-muted-foreground">
            Your ticket is ready. Save it for event entry.
          </p>
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
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 border-2 border-dashed border-primary/30 rounded-2xl flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
                {/* QR Code */}
                <QRCodeSVG value={registrationId} size={160} />
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <Smartphone className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div className="text-sm">
                <p className="font-medium text-blue-800 mb-1">
                  How to use your ticket:
                </p>
                <ul className="text-blue-700 space-y-1">
                  <li>• Save this QR code to your phone</li>
                  <li>• Show it at the event entrance</li>
                  <li>• Keep your phone charged on event day</li>
                </ul>
              </div>
            </div>
          </div>

          <Separator />

          <div className="space-y-3">
            <Button
              onClick={handleAddToCalendar}
              variant="outline"
              className="w-full h-12"
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
              className="w-full h-12"
            >
              <Share2 className="mr-2 h-5 w-5" />
              Share Event
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

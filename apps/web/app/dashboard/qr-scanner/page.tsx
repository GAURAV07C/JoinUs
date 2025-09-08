"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, Scan, CheckCircle, XCircle } from "lucide-react";

interface ScanResult {
  name: string;
  email: string;
  eventName: string;
  status: "verified" | "already_verified" | "invalid";
}

export default function QRScannerPage() {
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<ScanResult | null>(null);

  const handleScan = () => {
    setIsScanning(true);

    // Simulate scanning process
    setTimeout(() => {
      setIsScanning(false);
      // Mock scan result
      setScanResult({
        name: "John Doe",
        email: "john.doe@student.edu",
        eventName: "Tech Fest 2024",
        status: "verified",
      });
    }, 2000);
  };

  const resetScanner = () => {
    setScanResult(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">QR Code Scanner</h1>
        <p className="text-muted-foreground">
          Scan attendee QR codes to verify event registration
        </p>
      </div>

      <div className="max-w-md mx-auto space-y-6">
        {!scanResult ? (
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Scanner</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Mock Camera Preview */}
              <div className="aspect-square bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                {isScanning ? (
                  <div className="text-center">
                    <div className="animate-pulse">
                      <Scan className="h-16 w-16 mx-auto mb-4 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground">Scanning...</p>
                  </div>
                ) : (
                  <div className="text-center">
                    <Camera className="h-16 w-16 mx-auto mb-4 text-gray-400" />
                    <p className="text-sm text-gray-500">Camera Preview</p>
                  </div>
                )}
              </div>

              <Button
                onClick={handleScan}
                disabled={isScanning}
                className="w-full"
                size="lg"
              >
                {isScanning ? "Scanning..." : "Scan QR Code"}
              </Button>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle className="text-center flex items-center justify-center gap-2">
                {scanResult.status === "verified" && (
                  <>
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <span className="text-green-600">Verified</span>
                  </>
                )}
                {scanResult.status === "already_verified" && (
                  <>
                    <CheckCircle className="h-6 w-6 text-yellow-600" />
                    <span className="text-yellow-600">Already Verified</span>
                  </>
                )}
                {scanResult.status === "invalid" && (
                  <>
                    <XCircle className="h-6 w-6 text-red-600" />
                    <span className="text-red-600">Invalid</span>
                  </>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center space-y-2">
                <h3 className="font-semibold text-lg">{scanResult.name}</h3>
                <p className="text-muted-foreground">{scanResult.email}</p>
                <Badge variant="outline">{scanResult.eventName}</Badge>
              </div>

              {scanResult.status === "verified" && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                  <p className="text-green-800 font-medium">
                    Registration verified successfully!
                  </p>
                  <p className="text-green-600 text-sm mt-1">
                    Attendee can proceed to the event.
                  </p>
                </div>
              )}

              {scanResult.status === "already_verified" && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-center">
                  <p className="text-yellow-800 font-medium">
                    QR code already scanned
                  </p>
                  <p className="text-yellow-600 text-sm mt-1">
                    This attendee has already been verified.
                  </p>
                </div>
              )}

              {scanResult.status === "invalid" && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
                  <p className="text-red-800 font-medium">Invalid QR code</p>
                  <p className="text-red-600 text-sm mt-1">
                    This QR code is not valid for this event.
                  </p>
                </div>
              )}

              <Button onClick={resetScanner} className="w-full">
                Scan Another Code
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}

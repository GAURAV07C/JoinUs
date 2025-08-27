"use client"

import { PageLayout } from "@/components/page-layout"

interface ErrorStateProps {
  message?: string
}

import React from "react";

export function ErrorState({ message = "Failed to load events. Please try again." }: ErrorStateProps): React.ReactElement {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-destructive">{message}</p>
        </div>
      </div>
    </PageLayout>
  )
}

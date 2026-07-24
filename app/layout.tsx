import type { Metadata } from "next";

import "@/styles/globals.css";
import { JSX } from "react";
import { Providers } from "./providers";
import { Toaster } from "@/components/ui/sonner";
import { Poppins, Playfair_Display } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "JoinUs - Discover & Create Amazing College Events",
    template: "%s | JoinUs",
  },
  description: "Connecting students with amazing college events. Join the community of 10,000+ students discovering and creating memorable experiences.",
  keywords: ["events", "college", "students", "joinus", "campus", "workshops", "fests"],
  authors: [{ name: "JoinUs Team" }],
  openGraph: {
    title: "JoinUs - Discover & Create Amazing College Events",
    description: "Connecting students with amazing college events.",
    type: "website",
    locale: "en_IN",
    siteName: "JoinUs",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>): JSX.Element {
  return (
    <html lang="en" className={`${poppins.variable} ${playfair.variable}`}>
      <body className={`font-sans bg-[#f8f4ef] antialiased`}>
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}

import "@joinUs/ui/globals.css";
import { JSX } from "react";
import { Providers } from "./providers";
import { Toaster } from "@/components/ui/sonner";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>): JSX.Element {
  return (
    <html lang="en">
      <body className={` font-poppins bg-[#f8f4ef]`}>
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}

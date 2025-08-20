import "@joinUs/ui/globals.css";
import { JSX } from "react";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>): JSX.Element {
  return (
    <html lang="en">
      <body className={` font-poppins bg-[#f8f4ef]`}>{children}</body>
    </html>
  );
}

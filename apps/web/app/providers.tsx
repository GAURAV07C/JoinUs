"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { QueryClient } from "@tanstack/react-query";

export function Providers({ children }: { children: ReactNode }) {
   const queryClient = new QueryClient();
  return(
   <QueryClientProvider client={queryClient}>

   <SessionProvider>
    {children}
    </SessionProvider>;
   </QueryClientProvider>
  )
}

// app/dashboard/layout.tsx
import { auth } from "@/lib/auth";

import DashboardClient from "@/components/dashboard/dashboard-client";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  const user = session?.user ?? null;

  return <DashboardClient user={user}>{children}</DashboardClient>;
}

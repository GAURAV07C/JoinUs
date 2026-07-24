import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const sessionCookie = request.cookies.get("next-auth.session-token") || request.cookies.get("__Secure-next-auth.session-token");

  const isLoggedIn = !!sessionCookie;

  if (!isLoggedIn && !pathname.startsWith("/auth") && !pathname.startsWith("/api/auth") && !isPublicRoute(pathname)) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  if (isLoggedIn && pathname.startsWith("/auth")) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

function isPublicRoute(pathname: string): boolean {
  const publicRoutes = ["/", "/cheak"];
  const publicPrefixes = ["/_next", "/favicon.ico", "/api/eoptimise", "/api/events"];
  return publicRoutes.some((r) => pathname === r || publicPrefixes.some((p) => pathname.startsWith(p)));
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
};

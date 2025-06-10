import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // ⚠️ Skip API routes and _next/static/ or _next/image/ etc.
  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/static")
  ) {
    return NextResponse.next();
  }

  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  // 🔐 Protect /client-dashboard
  if (pathname.startsWith("/client-dashboard") && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // 🚫 Prevent access to /login if already logged in
  if (token && pathname === "/login") {
    return NextResponse.redirect(new URL("/client-dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next|static).*)"], // ignore all static/api routes
};

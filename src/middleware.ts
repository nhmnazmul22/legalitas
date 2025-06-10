import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  // Only protect /client-dashboard
  if (pathname === "/client-dashboard") {
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // If logged in, prevent access to /login
  if (token && pathname === "/login") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/client-dashboard", "/login"],
};

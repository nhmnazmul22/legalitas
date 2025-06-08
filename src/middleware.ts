import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const { pathname } = request.nextUrl;

  const isAdminRoute = pathname.startsWith("/admin");
  const isClientRoute = pathname.startsWith("/client-dashboard");

  const isPublicFile =
    pathname.startsWith("/_next/") ||
    pathname === "/favicon.ico" ||
    pathname.startsWith("/api");

  // ✅ Don't protect login pages or public files
  const isLoginPage = pathname === "/login" || pathname === "/admin/login";
  if (isLoginPage || isPublicFile) {
    return NextResponse.next();
  }

  // ✅ Admin section
  if (isAdminRoute) {
    if (!token || token.role !== "admin") {
      const adminLoginUrl = new URL("/admin/login", request.url);
      return NextResponse.redirect(adminLoginUrl);
    }
    return NextResponse.next();
  }

  // ✅ Client section
  if (isClientRoute) {
    if (!token || token.role !== "client") {
      const userLoginUrl = new URL("/login", request.url);
      return NextResponse.redirect(userLoginUrl);
    }
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/client-dashboard", "/client-dashboard/:path*"],
};

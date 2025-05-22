import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

const adminRoutes = ["/admin", "/api/admin"];
const protectedRoutes = ["/dashboard", "/api/user"];
const publicRoutes = ["/login", "/register", "/api/auth"];

export default withAuth(
  function middleware(req) {
    const { pathname } = req.nextUrl;
    const token = req.nextauth?.token;

    const isPublicRoute = publicRoutes.some((route) => pathname.startsWith(route));
    if (isPublicRoute && token) {
      if (token.role === "admin") {
        return NextResponse.redirect(new URL("/admin", req.url));
      }
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const { pathname } = req.nextUrl;
        const isPublicRoute = publicRoutes.some((route) => pathname.startsWith(route));
        const isAdminRoute = adminRoutes.some((route) => pathname.startsWith(route));
        const isProtectedRoute = protectedRoutes.some((route) => pathname.startsWith(route));

        if (isPublicRoute) return true;
        if (isProtectedRoute && !token) return false;
        if (isAdminRoute && token?.role !== "admin") return false;
        return true;
      },
    },
  }
);

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|api/auth).*)",
  ],
};
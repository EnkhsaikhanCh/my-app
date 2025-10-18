import { NextResponse, type NextRequest } from "next/server";

import { auth } from "./lib/auth";

export const runtime = "nodejs";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Get session
  const session = await auth.api.getSession({ headers: request.headers });

  // 2. Protected routes
  if (!session?.user && pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // 3. Block auth pages for logged-in users
  if (session?.user && ["/login", "/signup"].includes(pathname)) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/login", "/signup"],
};

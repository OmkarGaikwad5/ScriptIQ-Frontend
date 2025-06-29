// middleware.js
import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("token")?.value;

  // If no token and trying to access / (home), redirect to /landing
  if (!token && req.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/landing", req.url));
  }

  // If token exists and trying to access /landing, redirect to /
  if (token && req.nextUrl.pathname === "/landing") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/landing"], // apply middleware on these paths
};

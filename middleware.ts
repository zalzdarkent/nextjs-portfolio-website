// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

const ADMIN_PREFIX = "/admin";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Jalankan intl middleware untuk semua route non-admin
  if (!pathname.startsWith(ADMIN_PREFIX)) {
    return intlMiddleware(req);
  }

  // Proteksi /admin routes
  const isLogin = pathname === "/admin/login";
  const token = req.cookies.get("admin_auth")?.value;

  if (!token && !isLogin) {
    const url = req.nextUrl.clone();
    url.pathname = "/admin/login";
    url.searchParams.set("from", pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|_vercel|.*\\..*).*)"],
};
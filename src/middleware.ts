import { NextResponse } from "next/server";

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|_vercel|media/|[\\w-]+\\.\\w+).*)",
  ],
};

export default function middleware() {
  return NextResponse.next();
}

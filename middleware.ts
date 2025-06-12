import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const protectedAPIs = ["/api/auth/check"];
  const isProtected = protectedAPIs.some((r) => pathname.startsWith(r));
  if (!isProtected) return NextResponse.next();

  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  if (!token)
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/auth/check"],
};

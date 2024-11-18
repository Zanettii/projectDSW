import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  // Se a rota não for encontrada, redirecione para `/not-found`
  if (!url.pathname.startsWith("/api") && !url.pathname.startsWith("/_next")) {
    url.pathname = "/not-found";
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

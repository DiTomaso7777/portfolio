import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    // Force HTTPS in production
    const isProduction = process.env.NODE_ENV === 'production';
    const protocol = request.headers.get("x-forwarded-proto") || "http";  // Fallback to "http" if header is not found
  
    if (isProduction && protocol !== "https") {
      return NextResponse.redirect(
        `https://${request.headers.get('host')}${request.nextUrl.pathname}`,
        301 // Or use 302 during development
      )
    }
    return NextResponse.next()
  }
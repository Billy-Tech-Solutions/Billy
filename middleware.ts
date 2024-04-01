import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  if (process.env.NODE_ENV !== 'production') return

  if (
    request.nextUrl.pathname.startsWith('/') &&
    request.nextUrl.pathname !== '/waitlist'
  ) {
    return NextResponse.redirect(new URL('/waitlist', request.url))
  }
}

export const config = {
  matcher: '/:path',
}

// middleware.ts
import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const uid = req.cookies.get('uid')?.value
  const { pathname } = req.nextUrl
  console.log('uid',uid);
  console.log('pathname',pathname);
  
  // If user is not logged in and trying to access a protected route
  if (!uid && pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/auth/signin', req.url))
  }

  // If user is logged in and tries to access /signin
  if (uid && pathname === '/signin') {
    return NextResponse.redirect(new URL('/dashboard', req.url))
  }

  return NextResponse.next()
}

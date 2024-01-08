import { NextResponse } from "next/server";

export function middleware(request) {
    //console.log('middleware ran');
    if (request.nextUrl.pathname != '/login') {
        return NextResponse.redirect(new URL('/login', request.url))
    }
    return NextResponse.json({ success: "succesfully ran" });
}

export const config = {
    matcher: ['/userslist/:path*']
}
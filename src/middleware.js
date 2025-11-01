import { NextResponse } from 'next/server'

export function middleware(req){
    const {pathname} = req.nextUrl;
    const cookies = req.cookies.getAll("token");

    console.log("Cookie token:", cookies);

    if (pathname.startsWith("/articles")) {
        console.log("Middleware applied to /articles path");
    }

    if (pathname.startsWith("/admin")) {
        return NextResponse.rewrite(new URL('/forbidden', req.url))
    }

    if (pathname.startsWith("/superSecret")) {
        return NextResponse.redirect(new URL('/forbidden', req.url))
    }

    // console.log("Middleware called" , pathName);
}


// Apply middleware only to /articles/* paths
// export const config = {
//     matcher: "/articles/:path*",
// };
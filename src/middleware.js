export function middleware(req){
    const {pathname} = req.nextUrl;

    if (pathname.startsWith("/articles")) {
        console.log("Middleware applied to /articles path");
    }

    if (pathname.startsWith("/admin")) {
        console.log("Middleware applied to /admin path");
    }

    // console.log("Middleware called" , pathName);
}


// Apply middleware only to /articles/* paths
// export const config = {
//     matcher: "/articles/:path*",
// };
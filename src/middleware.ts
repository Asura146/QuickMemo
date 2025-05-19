// import { NextResponse, NextRequest } from "next/server";
// import { getToken } from "next-auth/jwt";

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)"],
};
export { auth as middleware } from "../auth"

// export async function middleware(req: NextRequest) {
//     const session = await auth()
//   if (!session ) {
//     return NextResponse.redirect(new URL("/", req.url));
//   }
//   return NextResponse.next();
// }


// export default auth((req) => {
//     if (!req.auth && req.nextUrl.pathname !== "/") {
//       const newUrl = new URL("/", req.nextUrl.origin)
//       return Response.redirect(newUrl)
//     }
//   })
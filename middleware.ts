// import { NextResponse, NextRequest } from "next/server";
// import { getToken } from "next-auth/jwt";
// import { auth } from "./auth";

// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)"],
// };

// export async function middleware(req: NextRequest) {
//     const session = await auth()
//   if (!session ) {
//     return NextResponse.redirect(new URL("/", req.url));
//   }
//   return NextResponse.next();
// }
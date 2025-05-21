import NextAuth, { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";
import NeonAdapter from "@auth/neon-adapter";
import { Pool } from "@neondatabase/serverless";


// export const config: NextAuthConfig = {
//     // adapter: NeonAdapter(pool),
//     providers: [Google],
//     basePath: "/api/auth",
//     callbacks: {
//       async jwt({ token, user, account }) {
//         if (user && account?.id_token) {
//           token.idToken = account.id_token;
//         }
//         return token;
//       },
//       async session({ token, session }) {
//         if (token.idToken) {
//           session.idToken = token.idToken;
//         }
//         return session;
//       },
//     }
// };

export const { handlers, auth, signIn, signOut } = NextAuth(()=> {
  const pool = new Pool({connectionString: process.env.DATABASE_URL});
  return {
    adapter: NeonAdapter(pool),
    providers: [
      Google
    ],
    pages: {
      signIn: "/",
    },
    callbacks: {
      authorized: async ({ auth }) => {
        // Logged in users are authenticated, otherwise redirect to login page
        return !!auth
      },
    },
  }
})
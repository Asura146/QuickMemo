import NextAuth, { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";

export const config: NextAuthConfig = {
    providers: [Google],
    basePath: "/api/auth",
    callbacks: {
        async jwt({ token, user, account }) {
          if (user && account?.id_token) {
            token.idToken = account?.id_token;
          }
          return token;
        },
        async session({ token, session }) {
          session.idToken = token.idToken;
          return session;
        },
      },
};

export const { handlers, auth, signIn, signOut } = NextAuth(config);
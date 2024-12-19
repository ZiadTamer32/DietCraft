import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Facebook from "next-auth/providers/facebook";
import { createGuest, getGuest } from "./action";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    Facebook({
      clientId: process.env.AUTH_FACEBOOK_ID,
      clientSecret: process.env.AUTH_FACEBOOK_SECRET
    })
  ],
  callbacks: {
    authorized({ auth, request }) {
      return !!auth?.user;
    },
    async signIn({ user, account, profile }) {
      try {
        const existing = await getGuest(user.email);
        if (!existing) {
          await createGuest({
            email: user.email,
            fullName: user.name
          });
        }
        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
    async session({ session, user }) {
      const guest = await getGuest(session.user.email);
      if (guest) {
        session.user.guestId = guest.id;
      }
      return session;
    }
  },
  pages: {
    signIn: "/signup"
  }
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST }
} = NextAuth(authConfig);

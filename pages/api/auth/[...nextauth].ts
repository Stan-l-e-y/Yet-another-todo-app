import NextAuth, { Awaitable, Session, User } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    // session: async ({ session, user }) => {
    //   return {
    //     ...session,
    //     user: {
    //       id: user.id,
    //       name: user.name,
    //       email: user.email,
    //       image: user.image,
    //     },
    //   };
    // },
    // async session(session: Session, user: User) {
    //   session.user = user;
    //   return session;
    // },
    async session({ session, user }) {
      session.user = user;
      return session;
    },
  },
};

export default NextAuth(authOptions);

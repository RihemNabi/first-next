import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../lib/mongodb";

export const authOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,

  // 👇 Ceci est ESSENTIEL pour les redirections correctes
  pages: {
    signIn: "/login", // page de connexion personnalisée
    signOut: "/login", // redirection après logout
    error: "/login", // redirection en cas d'erreur
  },
};

const handler = NextAuth(authOptions);
export default handler;

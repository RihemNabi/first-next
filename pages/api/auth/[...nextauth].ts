import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import connectDB from "../../../lib/mongodb";
import User from "../../../lib/models/user";
import bcrypt from "bcryptjs";

export const authOptions: NextAuthOptions = {
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connectDB();
        const user = await User.findOne({ email: credentials?.email });
        if (!user) throw new Error("Utilisateur introuvable");

        const isMatch = await bcrypt.compare(
          credentials!.password,
          user.password
        );
        if (!isMatch) throw new Error("Mot de passe incorrect");

        return { id: user.id.toString(), email: user.email };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = {
          id: token.id as string,
          email: token.email as string,
        };
      }
      return session;
    },
  },
  pages: { signIn: "/login", error: "/login" },
};

export default NextAuth(authOptions);

import api from "@/lib/config/axios";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import rateLimiter from "@/lib/ratelimiter";

const isProd = process.env.NODE_ENV === "production";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        if (!credentials?.username || !credentials?.password) {
          throw new Error("Username and password are required");
        }

        const ip =
          (req && req.headers && req.headers["x-forwarded-for"]) || "client";

        try {
          await rateLimiter.consume(ip.toString());
        } catch {
          throw new Error("Too many login attempts. Please try again later.");
        }

        try {
          const response = await api.post("/api/users/login-user", {
            username: credentials.username,
            password: credentials.password,
          });

          const { user } = response.data;

          if (user) {
            return { ...user };
          }
          return null;
        } catch (error) {
          console.error("Login failed:", error);
          return null;
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.username = user.username;
        token.status = user.status;
      }

      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.user = {
          id: token.id,
          email: token.email,
          username: token.username,
          status: token.status,
        };
      }
      return session;
    },
  },

  cookies: {
    sessionToken: {
      name: isProd
        ? "__Secure-next-auth.session-token"
        : "next-auth.session-token",
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: isProd,
      },
    },
  },

  pages: {
    signIn: "/login",
  },

  session: {
    strategy: "jwt",
  },

  secret: process.env.NEXTAUTH_SECRET,
};

export default authOptions;

import api from "@/lib/config/axios";
import { AdminType } from "@/types";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import rateLimiter from "@/lib/ratelimiter";

interface Admin {
  status: string;
  data: AdminType;
}

const isProd = process.env.NODE_ENV === "production";

export const authOptions: AuthOptions = {
  providers: [
    // Client authentication
    CredentialsProvider({
      id: "clientLogin",
      name: "clientLogin",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        console.log(credentials);
        if (!credentials?.username || !credentials?.password) {
          throw new Error("Username and password are required");
        }

        const ip =
          (req && req.headers && req.headers["x-forwarded-for"]) || "admin";

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
            return { ...user, role: "client" };
          }
          return null;
        } catch (error) {
          console.error("Login failed:", error);
          return null;
        }
      },
    }),

    // Admin Authentication
    CredentialsProvider({
      id: "adminLogin",
      name: "adminLogin",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        const ip =
          (req && req.headers && req.headers["x-forwarded-for"]) || "admin";

        try {
          await rateLimiter.consume(ip.toString());
        } catch {
          throw new Error("Too many login attempts. Please try again later.");
        }

        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        try {
          const response = await api.get<Admin>(
            `/api/author/${credentials.email}`
          );

          const admin = response.data.data;
          const isPassword = await bcrypt.compare(
            credentials?.password,
            admin.password!
          );

          if (credentials.email === admin.email && isPassword) {
            return {
              id: "admin",
              name: "Admin",
              email: admin.email,
              role: "admin",
            };
          }

          return null;
        } catch (error) {
          // Handle fetch error or admin not found
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
        token.role = user.role;
        if (user.role == "client") {
          token.username = user.username;
          token.status = user.status;
        }
      }

      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.user = {
          id: token.id,
          email: token.email,
          role: token.role,
          ...(token.role === "client" && {
            username: token.username,
            status: token.status,
          }),
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
        secure: isProd, // Only true in production (HTTPS)
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

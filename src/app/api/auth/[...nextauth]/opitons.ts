import api from "@/lib/config/axios";
import { AdminType } from "@/types";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

interface Admin {
  status: string;
  data: AdminType;
}
export const authOptions: AuthOptions = {
  providers: [
    // Admin Authentication
    CredentialsProvider({
      name: "Admin Login",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
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

    // Client authentication
    CredentialsProvider({
      name: "Client Login",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          throw new Error("Username and password are required");
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
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default authOptions;

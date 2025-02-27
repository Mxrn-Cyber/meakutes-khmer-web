import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    // Example: Using Google authentication
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // Example: Using Credentials (for custom login)
    Providers.Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Here you can fetch user data from your database
        const user = { email: credentials.email }; // Simplified for example
        if (user) {
          return user;
        }
        return null;
      },
    }),
  ],
  session: {
    jwt: true,
  },
  callbacks: {
    async jwt(token, user) {
      if (user) {
        token.email = user.email;
      }
      return token;
    },
    async session(session, token) {
      session.user.email = token.email;
      return session;
    },
  },
  pages: {
    signIn: "/login", // Custom login page if necessary
    error: "/auth/error", // Custom error page if needed
  },
});

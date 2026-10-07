import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import authConfig from "./auth.config";

export const { handlers, auth, signIn, signOut } = NextAuth({
...authConfig,
providers: [
Credentials({
credentials: {
email: {
label: "Email",
type: "email",
},
password: {
label: "Password",
type: "password",
},
},
async authorize(credentials) {
const email = process.env.ADMIN_EMAIL;
const password = process.env.ADMIN_PASSWORD;


    if (!email || !password) {
      return null;
    }

    if (
      credentials?.email !== email ||
      credentials?.password !== password
    ) {
      return null;
    }

    return {
      id: "admin",
      name: "A-ZED 69 Admin",
      email,
    };
  },
}),


],
session: {
strategy: "jwt",
},
});

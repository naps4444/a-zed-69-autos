import type { NextAuthConfig } from "next-auth";

export default {
pages: {
signIn: "/admin/login",
},
providers: [],
callbacks: {
authorized({ auth, request: { nextUrl } }) {
const isAdminRoute = nextUrl.pathname.startsWith("/admin");
const isLoginPage = nextUrl.pathname === "/admin/login";

  if (!isAdminRoute || isLoginPage) {
    return true;
  }

  return !!auth?.user;
},


},
} satisfies NextAuthConfig;

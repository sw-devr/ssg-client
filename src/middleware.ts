export { default } from "next-auth/middleware"

export const config = { matcher: ["/myssg/:path*", "/cart", "/member/resign"] }

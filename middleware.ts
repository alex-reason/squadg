// Resource: https://clerk.com/docs/nextjs/middleware#auth-middleware
import { authMiddleware, redirectToSignIn, redirectToSignUp } from "@clerk/nextjs";

export default authMiddleware({
  // An array of public routes that don't require authentication.
  publicRoutes: ["/", "/sign-up",'/about','/sign-in',"/api/webhook/clerk", "/terms"],

  // An array of routes to be ignored by the authentication middleware.
  ignoredRoutes: ["/api/webhook/clerk"],

});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
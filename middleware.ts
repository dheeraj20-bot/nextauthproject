import NextAuth from "next-auth" 
import authConfig from "./auth.config"
import { DEFAULT_LOGIN_REDIRECT,publicRoutes,authRoutes,apiAuthPrefix } from "./route"
const {auth}= NextAuth(authConfig)

export default auth((req) => {
       const {nextUrl}=req;
       const isLoggedIn = !!req.auth;

       const isApiAuthRoute = req.nextUrl.pathname.startsWith(apiAuthPrefix)
       const isPublicRoute = publicRoutes.includes(req.nextUrl.pathname)
       const isAuthRoute = authRoutes.includes(req.nextUrl.pathname)
       
       if(isApiAuthRoute){
          return ;
       }

       if(isAuthRoute){
           if(isLoggedIn){
               return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT,nextUrl))
           }
           return 
       }

       if(!isLoggedIn && !isPublicRoute){
              return Response.redirect(new URL("/login",nextUrl))
       }
})

export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
  };
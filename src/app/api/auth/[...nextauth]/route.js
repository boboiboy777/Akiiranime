import NextAuth from "next-auth/next";
import GoogleAuth from "next-auth/providers/google"; 
import githubAuth from "next-auth/providers/github";

export const authOption = {
    providers: [
        GoogleAuth({
            clientId: process.env.GOOGLE_CLIENT,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        githubAuth({
            clientId: process.env.GITHUB_CLIENT,
            clientSecret: process.env.GITHUB_SECRET,
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOption);

export { handler as GET, handler as POST };

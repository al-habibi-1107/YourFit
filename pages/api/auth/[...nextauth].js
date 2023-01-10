import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials"
import NextAuth from "next-auth/next";
import loginUser from "../../../utils/login";
import prisma from "../../../lib/prisma"
export default NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                try {
                    const { email, password } = credentials;
                    const { user, error } = await loginUser(email, password);
                    if(user) return user;
                    if (error) {
                        throw new Error(error);
                    }
                } catch (error) {
                    return null;
                }
            },
        }),
    ],
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: "jwt",
    },
});

import { NextAuthOptions } from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { connectToDatabase } from "../mongoDB/connect";
import { verifyPassword } from "../signup/hashPasswd";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            credentials: {
                email: { label: 'Email', type: 'text' },
                username: { label: 'Username', type: 'text' },
                password: { label: 'Password', type: 'password' }
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    console.error('Credentials are missing.');
                    return null;
                }

                const db = await connectToDatabase();

                try {
                    const usersCollection = db.collection('users');
                    const user = await usersCollection.findOne({ email: credentials.email });

                    if (!user) {
                        console.error('No user found with the provided email.');
                        return null;
                    }

                    const isValid = await verifyPassword(credentials.password, user.password || '');

                    if (!isValid) {
                        console.error('Invalid credentials.');
                        return null;
                    }

                    return {
                        id: user._id.toString(),
                        email: user.email,
                        username: user.username,
                    };
                } catch (e) {
                    console.error(e);
                    return null;
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    pages: {
        signIn: '/',
    },
    callbacks: {
        async redirect({ baseUrl }) {
            return `${baseUrl}/home`;
        },
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.email = user.email;
                token.username = user.username;
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user = {
                    ...session.user,
                    id: token.id as string,
                    username: token.username as string,
                };
            }
            return session;
        },
    },
    secret: process.env.AUTH_SECRET,
    session: {
        strategy: 'jwt'
    },
};
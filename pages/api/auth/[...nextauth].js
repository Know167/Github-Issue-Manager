import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import createAnonymousUser from "@/utils/createAnonymousUser";

const callbacks = {};
(callbacks.jwt = async function jwt({ token, account }) {
    // Persist the OAuth access_token to the token right after signin
    if (account) {
        token.accessToken = account.access_token;
    }
    return token;
}),
    (callbacks.session = async function session({ session, token, user }) {
        // Send properties to the client, like an access_token from a provider.
        if (session) {
            session.accessToken = token?.accessToken;
        }
        return session;
    });
// (callbacks.redirect=async function redirect(){
//     return process.env.NEXTAUTH_URL;
// })
const options = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        Credentials({
            name: "anonymous",
            credentials: {},
            async authorize(credentials, req) {
                return createAnonymousUser();
            },
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
            authorization: { params: { scope: "user repo" } },
        }),
    ],
    callbacks: callbacks,
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60, // 30 days
        updateAge: 24 * 60 * 60, // 24 hours
    },
    pages: {
        signIn: "/auth/signin",
        error: "/auth/error",
    },
};

export default (req, res) => NextAuth(req, res, options);

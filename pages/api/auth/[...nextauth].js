import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

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
    if (session) { session.accessToken = token?.accessToken; }
        return session;
    })
    (callbacks.redirect=async function redirect(){
        return "/";
    })
const options = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
            authorization: { params: { scope: "user repo" } },
            
        }),
    ],
    callbacks: callbacks,
};

export default (req, res) => NextAuth(req, res, options);

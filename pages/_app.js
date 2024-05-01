import { useEffect, useContext } from "react";
import { SessionProvider } from "next-auth/react";

import AuthProvider from "@/store/AuthProvider";
import "@/styles/globals.css";
import UserDataProvider from "@/store/userDataProvider";
import Navigation from "@/Components/Navigation";

export default function App({ Component, pageProps }) {
    useEffect(() => {

        localStorage.setItem("client_id", process.env.GITHUB_ID);
        localStorage.setItem("client_secret", process.env.GITHUB_SECRET);
        localStorage.setItem("redirect_uri", "http://localhost:3000/home");
       
    });
    return (
        <SessionProvider session={pageProps.session}>
            <AuthProvider>
                <UserDataProvider>
                    <Navigation>
                        <Component {...pageProps} />
                    </Navigation>
                </UserDataProvider>
            </AuthProvider>{" "}
        </SessionProvider>
    );
}

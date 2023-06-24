import { useEffect, useContext } from "react";
import { SessionProvider } from "next-auth/react";

import AuthProvider from "@/store/AuthProvider";
import "@/styles/globals.css";
import UserDataProvider from "@/store/userDataProvider";
import Navigation from "@/Components/Navigation";

export default function App({ Component, pageProps }) {
    useEffect(() => {

        localStorage.setItem("client_id", "41b15081d743c8755362");
        localStorage.setItem(
            "client_secret",
            "f973539cbc60322c478b8cede34ecec6670d89fe"
        );
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

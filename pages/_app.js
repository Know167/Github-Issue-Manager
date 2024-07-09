import { useEffect } from "react";
import { SessionProvider } from "next-auth/react";
import { NextUIProvider } from "@nextui-org/react";
import "@/styles/globals.css";
import UserDataProvider from "@/store/userDataProvider";

export default function App({ Component, pageProps }) {
    useEffect(() => {
        // localStorage.setItem("client_id", process.env.GITHUB_ID);
        // localStorage.setItem("client_secret", process.env.GITHUB_SECRET);
        // localStorage.setItem(
        //     "redirect_uri",
        //     "https://localhost:3000"
        // );
    });

    return (
            <NextUIProvider>

        <SessionProvider session={pageProps.session}>
            {/* <AuthProvider> */}

                <UserDataProvider>
                    <Component {...pageProps} />
                </UserDataProvider>
            {/* </AuthProvider> */}
            </SessionProvider>
            </NextUIProvider>
    );
}

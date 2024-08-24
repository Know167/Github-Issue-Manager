import { SessionProvider } from "next-auth/react";
import { NextUIProvider } from "@nextui-org/react";
import "@/styles/globals.css";

import Navigation from "@/Components/Navigation";
import UserDataProvider from "@/store/userDataProvider";

export default function App({ Component, pageProps }) {
    

    return (
        <NextUIProvider>
            <SessionProvider session={pageProps.session}>
                {/* <AuthProvider> */}

                <UserDataProvider>
                    <Navigation />
                    <Component {...pageProps} />
                </UserDataProvider>
                {/* </AuthProvider> */}
            </SessionProvider>
        </NextUIProvider>
    );
}

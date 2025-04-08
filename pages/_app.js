import { useEffect, useState } from "react";

import { SessionProvider } from "next-auth/react";
import { NextUIProvider } from "@nextui-org/react";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navigation from "@/Components/Navigation";
import UserDataProvider from "@/store/userDataProvider";

export default function App({ Component, pageProps }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);
    return (
        <NextUIProvider>
            <SessionProvider session={pageProps.session}>
                {/* <AuthProvider> */}

                <UserDataProvider>
                    <Navigation>
                        <Component {...pageProps} />

                        </Navigation>
                        {mounted && (
                            <>
                                <Analytics />
                                <SpeedInsights />
                            </>
                        )}
                </UserDataProvider>
                {/* </AuthProvider> */}
            </SessionProvider>
        </NextUIProvider>
    );
}

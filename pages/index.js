import React from "react";
import { signIn, useSession } from "next-auth/react";
import Navigation from "@/Components/Navigation";
import Home from "@/Components/Home";

const Index = () => {
    const { data: session, status } = useSession();
    return (
        <>
            {!session&&<Home/>}
            {/* {session && (
                <Navigation/>
            )} */}
            {session &&
                localStorage.setItem("access_token", session.accessToken)}
        </>
    );
};

export default Index;

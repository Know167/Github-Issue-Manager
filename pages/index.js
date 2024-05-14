import React from "react";
import { signIn, useSession } from "next-auth/react";
import Navigation from "@/Components/Navigation";
import Home from "@/Components/Home";

const Index = ({Component, PageProps}) => {
    const { data: session, status } = useSession();
    return (
        <>
            {!session&&<Home/>}
            {session && (
                <Navigation>
                   
                </Navigation>
            )}
            {session &&
                localStorage.setItem("access_token", session.accessToken)}
        </>
    );
};

export default Index;

import { useSession, signIn } from "next-auth/react";

import UserBio from "@/Components/UserBio";
import { AuthContext } from "@/store/authContext";
import { UserDataContext } from "@/store/userDataContext";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";

const Navigation = (props) => {
    const { data: session } = useSession();
    const handleSignin = (e) => {
        e.preventDefault();
        signIn("github");
    };

    return (
        <>
            {session && (
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        border: "2px solid white",
                    }}>
                    <div>{session && <Link href="/repos">Home</Link>}</div>
                    <div>
                        {session && (
                            <Link href="/add_repo">New Repository</Link>
                        )}
                    </div>
                    <div style={{ marginLeft: "70%" }}>
                        {session && (
                            <UserBio
                                username={session.user.name}
                                avatar={session.user.image}
                            />
                        )}
                    </div>
                </div>
            )}
            {!session && (
                <a href="#" onClick={handleSignin} className="btn-signin">
                    Sign in
                </a>
            )}
            {props.children}
        </>
    );
};

export default Navigation;

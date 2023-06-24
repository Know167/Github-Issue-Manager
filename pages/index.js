import React from "react";
import { useSession } from "next-auth/react";

const Index = () => {
  const { data: session, status } = useSession();
    const loading = status === "loading";
  
  
    return (
        <>
            {loading && <div>Loading...</div>}
            {session && (
                <p style={{ marginBottom: "10px" }}>
                    {" "}
                    Welcome, {session.user.name ?? session.user.email}
                </p>
            )}
            {session&&localStorage.setItem('access_token', session.accessToken)}
            {!session && (
                <>
                    <p style={{ textAlign: "center", marginTop: "50px" }}>
                        Please Sign in
                    </p>
                </>
            )}
        </>
    );
};

export default Index;

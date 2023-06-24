import React, { useContext, useEffect } from "react";
import { AuthContext } from "../store/authContext";

const Login = () => {
    const authCtx = useContext(AuthContext);
    const { client_id, redirect_uri } = authCtx;
    const scope = "user repo";
    useEffect(() => {
        localStorage.setItem("isLoggedIn", null);
    }, []);

    return (
        <div>
            <a
                href={`https://github.com/login/oauth/authorize?scope=${scope}&client_id=${client_id}&redirect_uri=${redirect_uri}`}>
                Sign in with github
            </a>
        </div>
    );
};

export default Login;

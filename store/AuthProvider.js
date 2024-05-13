import { useReducer } from "react";
import { useRouter } from "next/router";

import { AuthContext } from "./authContext";

const authreducer = (authstate, action) => {
    switch (action.type) {
        case "LOGIN": {
            localStorage.setItem("code", action.code);
            localStorage.setItem("isLoggedIn", true);
            return {
                ...authstate,
                isLoggedIn: true,
                code: action.code.toString(),
            };
        }
        case "GOT_TOKEN": {
            return {
                ...authstate,
                token: action.token.toString(),
            };
        }
        case "LOGOUT": {
            localStorage.clear();
            localStorage.setItem("isLoggedIn", false);
            return {
                ...authstate,
                isLoggedIn: false,
            };
        }

        default:
            return authstate;
    }
};

const AuthProvider = (props) => {
    const router = useRouter();
    const initialState = {
        isLoggedIn: false,
        client_id: "41b15081d743c8755362",
        redirect_uri: "http://localhost:3000/home",
        client_secret: "f973539cbc60322c478b8cede34ecec6670d89fe",
        logoutHandler: () => {},
        loginHandler: () => { },
        tokenHandler: () => {},
        code: null,
        token: null,
    };
    const [authstate, dispatch] = useReducer(authreducer, initialState);

    const handleLogout = () => {
        dispatch({
            type: "LOGOUT",
        });
        router.push("/");
    };

    const handleLogin = (code) => {
        dispatch({
            type: "LOGIN",
            code: code,
        });
    };
    const handleToken = (token) => {
        dispatch({
            type: "GOT_TOKEN",
            token: token,
        });
    };

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: authstate.isLoggedIn,
                client_id: authstate.client_id,
                redirect_uri: authstate.redirect_uri,
                client_secret: authstate.client_secret,
                logoutHandler: handleLogout,
                loginHandler: handleLogin,
                tokenHandler: handleToken,
                code: null,
                token: null,
            }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

import { createContext } from "react";

const initialState = {
    isLoggedIn: false,
    client_id: process.env.GITHUB_ID,
    redirect_uri: "https://localhost:3000",
    client_secret: process.env.GITHUB_SECRET,
    loginHandler: () => {},
    logoutHandler: () => {},
    tokenHandler: () => {},
    code: null,
    token: null,
};

export const AuthContext = createContext(initialState);

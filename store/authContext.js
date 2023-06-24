import { createContext } from "react";

const initialState = {
    isLoggedIn: false,
    client_id: "41b15081d743c8755362",
    redirect_uri: "http://localhost:3000/home",
    client_secret: "f973539cbc60322c478b8cede34ecec6670d89fe",
    loginHandler: () => {},
    logoutHandler: () => {},
    tokenHandler: () => {},
    code: null,
    token: null,
};

export const AuthContext = createContext(initialState);

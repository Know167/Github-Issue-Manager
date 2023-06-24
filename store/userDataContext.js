import { createContext } from "react";

export const initialState = {
    repoList: [],
    handleRepoList: () => {},
};

export const UserDataContext = createContext(initialState);

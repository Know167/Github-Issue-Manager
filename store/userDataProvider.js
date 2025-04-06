import { useReducer } from "react";
import { UserDataContext, initialState } from "./userDataContext";

const userDataReducer = (userDataState, action) => {
    switch (action.type) {
        case "HANDLE_REPO_LIST": {
            return {
                ...userDataState,
                repoList: action.repoList,
            };
        }
    }
};
const UserDataProvider = (props) => {
    const [userDataState, dispatch] = useReducer(userDataReducer, initialState);

    const handleRepoList = (repoList) => {
        dispatch({
            type: "HANDLE_REPO_LIST",
            repoList: repoList,
        });
    };
    return (
        <UserDataContext.Provider
            value={{
                repoList: userDataState.repoList,
                handleRepoList: handleRepoList,
            }}>
            {props.children}
        </UserDataContext.Provider>
    );
};

export default UserDataProvider;

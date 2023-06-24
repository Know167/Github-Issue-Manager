import { useReducer } from "react";
import { UserDataContext, initialState } from "./userDataContext";


const UserDataProvider = (props) => {
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
   
    const handleRepoList = (repoList) => {
        dispatch({
            type: "HANDLE_REPO_LIST",
            repoList: repoList,
        });
    };
    const [userDataState, dispatch] = useReducer(userDataReducer, initialState);
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

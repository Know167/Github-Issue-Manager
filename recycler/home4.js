import { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";

import { AuthContext } from "@/recycler/authContext";
import { UserDataContext } from "@/store/userDataContext";
import fetcher from "@/utils/fetcher";
import RepoList from "@/Components/RepoList";

const Home = () => {
    const authCtx = useContext(AuthContext);
    const userDataCtx = useContext(UserDataContext);
    const router = useRouter();
    const [code, setCode] = useState(authCtx.code);
    const [token, setToken] = useState(authCtx.token);
    const [repoList, setRepoList] = useState(userDataCtx.repoList);
    useEffect(() => {
        const justChecking = async () => {
            if (code && code.length > 0) {
                if (token && token.length > 0) {
                    // check for bio
                    if (
                        !userDataCtx.userBio ||
                        !userDataCtx.userBio.length > 0
                    ) {
                        // fetch userbio
                        const response = await fetcher(
                            "api/get-user-bio",
                            token
                        );

                        const resData = await response.json();
                        userDataCtx.handleUserData(resData.data);
                    }

                    // check for repolist
                    if (!repoList || !repoList.length > 0) {
                        // fetch Repolist
                        const response = await fetcher(
                            "api/get-repo-list",
                            token
                        );
                        const resData = await response.json();
                        setRepoList(resData);
                        userDataCtx.handleRepoList(resData);
                        router.push("/repos");
                    }
                } else {
                    // fetching Access Token
                    const reqBody = {
                        code: code,
                        client_id: authCtx.client_id,
                        client_secret: authCtx.client_secret,
                        redirect_uri: authCtx.redirect_uri,
                    };

                    const response = await fetch("api/get-access-token", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Accept: "application/json",
                        },
                        body: JSON.stringify(reqBody),
                    });

                    const resData = await response.json();
                    setToken(resData.access_token);
                    authCtx.tokenHandler(resData.access_token);
                }
            } else {
                const url = window.location.href;
                const hasCode = url.includes("?code=");
                if (hasCode) {
                    const temp = url.split("?code=");
                    const winCode = temp[1];
                    authCtx.loginHandler(winCode);
                    setCode(winCode);
                    localStorage.setItem("code", winCode);
                    router.push("/home");
                }
            }
        };
        justChecking();
    }, [token, code, repoList]);

    return <></>;
};

export default Home;

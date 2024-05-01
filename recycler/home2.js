import { Octokit } from "octokit";

import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";

import { AuthContext } from "../store/authContext";
import { UserDataContext } from "../store/userDataContext";

import RepoList from "@/Components/RepoList";

export default function Home2() {
    const router = useRouter();

    const authCtx = useContext(AuthContext);
    const userDataCtx = useContext(UserDataContext);

    const [page, setPage] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const code = authCtx.code;
    const token = authCtx.token;
    let repoList = userDataCtx.repoList;
    useEffect(() => {
        const getToken = async () => {
            // After requesting Github access, Github redirects back to your app with a code parameter
            const url = window.location.href;
            const hasCode = url.includes("?code=");

            // If Github API returns the code parameter
            if (hasCode) {
                const temp = url.split("?code=");
                const winCode = temp[1];
                authCtx.loginHandler(winCode);
                localStorage.setItem("code", winCode);

                // requesting access_token
                const reqBody = {
                    code: winCode,
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
                const { access_token } = await response.json();
                authCtx.tokenHandler(access_token);
            }
        };
        if (!token || token.length === 0) {
            getToken();
        } else {
        }
    }, [token]);

    // GETTING USER_BIO AFTER GETTING TOKEN
    useEffect(() => {
        const getUserBio = async () => {
            setIsLoading(true);
            const octokit = new Octokit({
                auth: authCtx.token,
            });
            const { data } = await octokit.rest.users.getAuthenticated();
            userDataCtx.handleUserData(data);
            setIsLoading(false);

            async function getPaginatedData(url) {
                const nextPattern = /(?<=<)([\S]*)(?=>; rel="Next")/i;
                let pagesRemaining = true;
                let list = [];

                while (pagesRemaining) {
                    setIsLoading(true);
                    const response = await octokit.request(`GET ${url}`, {
                        per_page: 1,
                    });

                    const parsedData = parseData(response.data);
                    list = [...list, ...parsedData];

                    const linkHeader = response.headers.link;

                    pagesRemaining =
                        linkHeader && linkHeader.includes(`rel=\"next\"`);

                    if (pagesRemaining) {
                        url = linkHeader.match(nextPattern)[0];
                    }
                }
                setIsLoading(false);
                return list;
            }

            function parseData(resData) {
                // If the data is an array, return that
                if (Array.isArray(resData)) {
                    return resData;
                }

                // Some endpoints respond with 204 No Content instead of empty array
                //   when there is no data. In that case, return an empty array.
                if (!resData) {
                    return [];
                }

                // Otherwise, the array of items that we want is in an object
                // Delete keys that don't include the array of items
                delete resData.incomplete_results;
                delete resData.repository_selection;
                delete resData.total_count;
                // Pull out the array of items
                const namespaceKey = Object.keys(resData)[0];
                resData = resData[namespaceKey];

                return resData;
            }

            repoList = await getPaginatedData("/user/repos");

            // const list = await octokit.request(`GET /user/repos`, {
            //     per_page: 5,
            // });

            userDataCtx.handleRepoList(repoList);
        };

        if (token && repoList?.length === 0) {
            getUserBio().catch(console.log);
        } else {
            console.log(repoList);
        }
    }, [userDataCtx, authCtx]);

    const onNextHandler = () => {
        setPage((prevPage) => prevPage + 1);
    };

    const onPrevHandler = () => {
        setPage((prevPage) => prevPage - 1);
    };

    let ListToBe;
    if (repoList) {
        ListToBe = repoList.reduce((acc, _, index, orig) => {
            return !(index % 5)
                ? acc.concat([orig.slice(index, index + 5)])
                : acc;
        }, []);
    }
    return (
        <>
            {isLoading && <h2> please wait...</h2>}
            {ListToBe && authCtx.isLoggedIn && !isLoading && (
                <RepoList repoList={ListToBe[page]} />
            )}
            {page > 0 && <button onClick={onPrevHandler}>prev</button>}
            <span> page {page + 1} </span>
            {ListToBe && page < ListToBe.length - 1 && (
                <button onClick={onNextHandler}>next</button>
            )}
        </>
    );
}

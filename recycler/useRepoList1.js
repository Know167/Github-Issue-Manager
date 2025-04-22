import { useEffect, useContext, useState } from "react";
import { useRouter } from "next/router";
import fetcher from "@/utils/fetcher";
import { UserDataContext } from "@/store/userDataContext";
const useRepoList = (session) => {
    const [reposList, setReposList] = useState([]);
    const userDataCtx = useContext(UserDataContext);
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("useEffect called");
        const fetchData = async () => {
            console.log("fetchData called");
            console.log(userDataCtx);
            if (userDataCtx.repoList && userDataCtx.repoList.length > 0) {
              console.log("setting the repolist from context");
              
                setReposList(userDataCtx.repoList);
                setLoading(false);
                return;
            }
            if (session) {
                console.log(
                    "can't find the repolist in context, so api call is made"
                );
                const token = session?.accessToken || "guest-token";
                const guestSession = JSON.parse(
                    localStorage?.getItem("guestSession")
                );
                const asycwrapper = async () => {
                    console.log("fetching repo list");
                    const getrepolist = async () => {
                        const repores = await fetcher(
                            "api/get-repo-list",
                            token
                        );
                        if (repores.status === 200) {
                            const repoList = await repores.json();
                            setReposList(repoList);
                            userDataCtx.handleRepoList(repoList);
                            return router.push("/repos");
                        } else {
                            setLoading(false);
                            return router.push("/repos");
                        }
                    };
                    if (token) {
                        await getrepolist();
                    }
                    router.push("/repos");
                };
                if (guestSession) {
                    setReposList(guestSession.repos);
                    userDataCtx.handleRepoList(guestSession.repos);
                    setLoading(false);
                } else {
                    await asycwrapper();
                }
            } else {
                setLoading(false);
            }
        };
        fetchData();
    }, [session]);
    return { reposList, loading };
};
export default useRepoList;

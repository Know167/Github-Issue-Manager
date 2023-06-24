import { useContext, useState, useEffect } from "react";
import { UserDataContext } from "@/store/userDataContext";
import RepoList from "@/Components/RepoList";
import fetcher from "@/utils/fetcher";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
const Repos = () => {
    const { data: session } = useSession();
    const [page, setPage] = useState(0);
    const [reposList, setReposList] = useState([]);
    const userDataCtx = useContext(UserDataContext);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage
            ? localStorage.getItem("access_token")
            : session
            ? session.accessToken
            : "";

        const asycwrapper = async () => {
            const getrepolist = async () => {
                const repores = await fetcher("api/get-repo-list", token);
                if (repores.status === 200) {
                    const repoList = await repores.json();
                    return repoList || router.push("/repos");
                }
            };
            if (token) {
                const data = await getrepolist();
                setReposList(data);
                userDataCtx.handleRepoList(data);
            }
            router.push("/repos");
        };
        asycwrapper();
    }, []);

    let ListToBe = [];
    if (reposList) {
        ListToBe = reposList.reduce((acc, _, index, orig) => {
            return !(index % 5)
                ? acc.concat([orig.slice(index, index + 5)])
                : acc;
        }, []);
    }

    const onNextHandler = () => {
        setPage((prevPage) => prevPage + 1);
    };

    const onPrevHandler = () => {
        setPage((prevPage) => prevPage - 1);
    };
    return (
        <div>
            {ListToBe && session && <RepoList repoList={ListToBe[page]} />}
            {page > 0 && <button onClick={onPrevHandler}>prev</button>}
            <span> page {page + 1} </span>
            {ListToBe && page < ListToBe.length - 1 && (
                <button onClick={onNextHandler}>next</button>
            )}
        </div>
    );
};
export default Repos;

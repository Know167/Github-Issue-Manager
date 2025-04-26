import { useState } from "react";
import RepoList from "@/Components/RepoList";
import { useSession } from "next-auth/react";
import { useRepoList } from "@/hooks/useRepoList";

const Repos = () => {
    const { data: session } = useSession();
    const [page, setPage] = useState(0);
    const { repos, loading, error } = useRepoList();

    let ListToBe = [];
    if (repos) {
        ListToBe = repos.reduce((acc, _, index, orig) => {
            return !(index % 8)
                ? acc.concat([orig.slice(index, index + 8)])
                : acc;
        }, []);
    }

    const onNextHandler = () => {
        setPage((prevPage) => prevPage + 1);
    };

    const onPrevHandler = () => {
        if (page === 0) return;
        setPage((prevPage) => prevPage - 1);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="bg-neutral-900 text-neutral-100 flex flex-col h-[calc(100vh-4.2rem)]">
            <div className="flex-grow w-full mx-auto px-4 my-6">
                {ListToBe && session && <RepoList repoList={ListToBe[page]} />}
            </div>

            <div className="flex justify-between items-center sticky bottom-0 bg-neutral-900 p-4 shadow-lg border-t-2 border-secondary-500">
                <button
                    onClick={onPrevHandler}
                    disabled={page === 0}
                    className={`px-6 py-2 ${
                        page === 0
                            ? "bg-secondary-700 text-neutral-500 cursor-not-allowed"
                            : "bg-secondary-500 hover:bg-secondary-600 text-neutral-900"
                    } rounded-lg shadow-md transition duration-200`}>
                    Prev
                </button>

                <span className="text-md font-semibold text-neutral-200">
                    Page {page + 1} of {ListToBe.length}
                </span>

                <button
                    onClick={onNextHandler}
                    disabled={page === ListToBe.length - 1}
                    className={`px-6 py-2 ${
                        page === ListToBe.length - 1
                            ? "bg-secondary-700 text-neutral-500 cursor-not-allowed"
                            : "bg-secondary-500 hover:bg-secondary-600 text-neutral-900"
                    } rounded-lg shadow-md transition duration-200`}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default Repos;

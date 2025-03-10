import React, { useState } from "react";
import { useRouter } from "next/router";

import Repo from "./Repo";

const RepoList = ({ repoList }) => {
    const router = useRouter();
    const monthsList = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    const [specificRepo, setSpecificRepo] = useState({});
    const openSpecificRepo = () => {
        router.push(`/issue/${specificRepo.id}`);
    };

    return (
        <div className="flex flex-col lg:flex-row justify-between p-4">
            <div className="w-full lg:w-2/3">
                {repoList &&
                    repoList.map((i) => {
                        const date = new Date(i.pushed_at);
                        const month = monthsList[date.getMonth()];
                        const convertedDate = `${date.getDate()} ${month}, ${date.getFullYear()}`;
                        return (
                            <div
                                key={i.id}
                                className="mb-4 p-4 bg-white shadow rounded-lg">
                                <Repo
                                    id={i.id}
                                    name={i.name}
                                    description={i.description}
                                    date={convertedDate}
                                    setSpecificRepo={setSpecificRepo}
                                />
                            </div>
                        );
                    })}
            </div>
            {specificRepo.name && (
                <div className="w-full lg:w-1/3 p-4 bg-green-100 shadow rounded-lg">
                    <Repo
                        key="101"
                        name={specificRepo.name}
                        description={specificRepo.desc}
                        date={specificRepo.date}
                    />
                    <button
                        onClick={openSpecificRepo}
                        className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700 transition duration-200">
                        Open
                    </button>
                </div>
            )}
        </div>
    );
};

export default RepoList;

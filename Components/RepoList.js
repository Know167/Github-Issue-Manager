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
    const [specificRepo, setSpecificRepo]=useState({})
    const openSpecificRepo = () => {
        router.push(`/issue/${specificRepo.id}`)
    }
    return (
        <div style={{display: "flex", flexDirection:'row', justifyContent: 'space-between'}}>
            <div>
                {repoList &&
                    repoList.map((i) => {
                        const date = new Date(i.pushed_at);
                        const month = monthsList[date.getMonth()];
                        const convertedDate = `${date.getDate()} ${month}, ${date.getFullYear()}`;
                        return (
                            <Repo
                                key={i.id}
                                id={i.id}
                                name={i.name}
                                description={i.description}
                                date={convertedDate}
                                setSpecificRepo={setSpecificRepo}
                            />
                        );
                    })}
            </div>
            {specificRepo.name&&<div>
                <Repo
                    key="101"
                    name={specificRepo.name}
                    description={specificRepo.desc}
                    date={specificRepo.date}
                />
                <button onClick={openSpecificRepo}>Open</button>
            </div>}
        </div>
    );
};

export default RepoList;

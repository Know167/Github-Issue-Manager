import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

import IssueNode from "./IssueNode";
import fetcher from "@/utils/fetcher";

const IssueTree = (props) => {
    const name = props.name;
    const { data: session } = useSession();
    class Issue {
        constructor(id = "root", title = "", desc = "") {
            this.id = id;
            this.desc = desc;
            this.title = title;
            this.child = [];
        }
    }
    const originaltree = new Issue(undefined, name);
    const [tree, setTree] = useState(originaltree);
    const [sha, setSha] = useState("");

    useEffect(() => {
        const reqBody = {
            reponame: name,
            owner: session.user.name,
        };
        const IssueFetcher = async () => {
            console.log("fetcher ran");

            const response = await fetcher(
                "/api/get-git-issues",
                session.accessToken,
                reqBody
            );
            const resData = await response.json();
            setTree(resData.resData);
            setSha(resData.sha);
        };
        try {
            IssueFetcher();
        } catch (err) {
            console.log(err);
        }
    }, []);

    const addChild = () => {
        setTree((prev) => {
            const id = Math.random().toString();
            const temp = prev.child.concat(new Issue(id));
            prev.child.slice();
            return { ...prev, child: temp };
        });
    };

    const updateFn = () => {
        setTree((prev) => {
            prev.child.slice();
            return { ...prev };
        });
    };

    const deleteFn = (id) => {
        setTree((prev) => {
            let temp = prev.child;
            temp = temp.filter((i) => {
                return +i.id !== +id;
            });
            // prev.child.slice();
            return { ...prev, child: temp };
        });
    };

    const saveToJson = async () => {
        const reqBody = {
            tree,
            owner: session.user.name,
            reponame: name,
            sha,
        };
        const response = await fetcher(
            "/api/save-to-json",
            session.accessToken,
            reqBody
        );
        if (response.ok) {
            alert("saved successfully!");
        }
    };
    return (
        <div className="min-h-screen bg-slate-100 p-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-semibold text-green-800 mb-4">
                    {tree.title}
                </h1>
                <div className="flex justify-between items-center mb-4">
                    <button
                        onClick={addChild}
                        className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-700 transition duration-200">
                        Add Issue
                    </button>
                    <button
                        onClick={saveToJson}
                        className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-700 transition duration-200">
                        Save to File
                    </button>
                </div>
                <div className="flex flex-wrap justify-evenly">
                    {tree.child.length > 0 &&
                        tree.child.map((i) => {
                            return (
                                <IssueNode
                                    key={i.id}
                                    node={i}
                                    id={i.id}
                                    updateFn={updateFn}
                                    deleteFn={deleteFn}
                                />
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

export default IssueTree;

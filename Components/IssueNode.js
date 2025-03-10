import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import React, { useState, useContext } from "react";
import { UserDataContext } from "@/store/userDataContext";
import fetcher from "@/utils/fetcher";
const IssueNode = (props) => {
    const userDataCtx = useContext(UserDataContext);
    const router = useRouter();
    const sperepoId = router.query.id;
    const sperepo = userDataCtx.repoList.filter((i) => i.id === +sperepoId);
    const { data: session } = useSession();
    const [title, setTitle] = useState(props.node.title);
    const [desc, setDesc] = useState(props.node.desc);

    const titleChangeHandler = (e) => {
        props.node.title = e.target.value;
        setTitle(e.target.value);
        props.updateFn();
    };

    const descChangeHandler = (e) => {
        props.node.desc = e.target.value;
        setDesc(e.target.value);
        props.updateFn();
    };

    class Issue {
        constructor(id = "root", title = "", desc = "") {
            this.id = id;
            this.desc = desc;
            this.title = title;
            this.child = [];
        }
    }
    const gitCommitHandler = async () => {
        const trimTitle = title.trim();
        const trimDesc = desc.trim();
        if (
            trimTitle &&
            trimTitle.length > 5 &&
            trimDesc &&
            trimDesc.length > 5
        ) {
            const reqBody = {
                owner: session.user.name,
                reponame: sperepo[0].name,
                trimTitle,
                trimDesc,
            };
            const response = await fetcher(
                "/api/add-git-issue",
                session.accessToken,
                reqBody
            );
            alert("issue has been created");
        } else {
            if (trimTitle.length == 0) {
                alert("Title cannot be empty");
            } else {
                alert("Title should be more than 5 characters");
            }
            if (trimDesc.length == 0) {
                alert("Description cannot be empty");
            } else {
                alert("Description should be more than 5 characters");
            }
        }
    };

    const addIssue = () => {
        const id = Math.random().toString();
        const temp = props.node.child.concat(new Issue(id));
        props.node.child = temp;
        props.node.child.slice();
        props.updateFn();
    };

    const deleteIssue = () => {
        props.deleteFn(props.id);
        props.updateFn();
    };

    const deleteChild = (id) => {
        let temp = props.node.child;
        temp = temp.filter((i) => +i.id !== +id);
        props.node.child = temp;
        props.updateFn();
    };
    return (
        <div className="bg-white rounded-lg shadow-md p-4 mb-4">
            <div className="flex justify-between items-center mb-2">
                <button
                    onClick={addIssue}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    +
                </button>
                <button
                    onClick={deleteIssue}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    del
                </button>
                <button
                    onClick={gitCommitHandler}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    toGit
                </button>
            </div>
            <input
                type="text"
                name="title"
                id="title"
                placeholder="Title"
                value={title}
                required
                onChange={titleChangeHandler}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
            />
            <div>
                <textarea
                    name="desc"
                    id="desc"
                    rows={8}
                    value={desc}
                    required
                    placeholder="Description"
                    onChange={descChangeHandler}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="flex flex-wrap justify-evenly">
                {props.node.child.length > 0 &&
                    props.node.child.map((i) => {
                        return (
                            <IssueNode
                                key={i.id}
                                node={i}
                                id={i.id}
                                updateFn={props.updateFn}
                                deleteFn={deleteChild}
                            />
                        );
                    })}
            </div>
        </div>
    );
};

export default IssueNode;
